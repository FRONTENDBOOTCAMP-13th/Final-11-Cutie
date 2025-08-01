'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import useUserStore from 'zustand/userStore';
import { uploadFile } from '@data/actions/file';
import { updateUser } from '@data/actions/user';
import ProfileImg from '@assets/icons/profile.svg';
import { SignUpProfileEditButton } from './SignUpProfileEditButton';
import ProfileImageModal from './ProfileImageModal';

export default function ProfileImageSection({ image }: { image: string }) {
  const { user, setUser } = useUserStore();
  const [showModal, setShowModal] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>(image || '');

  useEffect(() => {
    setPreviewImage(image || '');
  }, [image]);

  const handleSaveImage = async (file: File) => {
    if (!user?.token?.accessToken) {
      alert('로그인이 필요합니다.');
      return;
    }

    // 파일 업로드
    const fileForm = new FormData();
    fileForm.set('attach', file);

    const uploadRes = await uploadFile(fileForm);
    if (!uploadRes?.ok || !uploadRes.item?.[0]?.path) {
      alert('이미지 업로드 실패');
      return;
    }

    const imageUrl: string = uploadRes.item[0].path;

    // 사용자 정보 업데이트
    const patchForm = new FormData();
    patchForm.set('image', imageUrl);

    const res = await updateUser(null, patchForm, user._id, user.token.accessToken);
    if (res?.ok) {
      alert('프로필 이미지가 저장되었습니다!');
      setPreviewImage(imageUrl);
      setUser({ ...user, image: imageUrl });
      setShowModal(false);
    } else {
      alert('프로필 이미지 저장 실패');
    }
  };

  return (
    <>
      <div className="flex justify-between border-b pt-[26px] pb-[18px] max-[480px]:px-[10px]">
        <div className="flex items-center gap-2">
          {previewImage ? (
            <div className="relative w-[50px] h-[50px] overflow-hidden">
              <Image src={previewImage} alt="프로필 이미지" fill className="object-contain" sizes="60px" />
            </div>
          ) : (
            <ProfileImg width={28} height={28} />
          )}
          <span className="normal-14">프로필</span>
        </div>
        <SignUpProfileEditButton label="사진 변경" onClick={() => setShowModal(true)} />
      </div>

      {showModal && <ProfileImageModal onClose={() => setShowModal(false)} onUpload={handleSaveImage} />}
    </>
  );
}
