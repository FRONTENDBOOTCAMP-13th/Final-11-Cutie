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
  const [previewImage, setPreviewImage] = useState(image);

  useEffect(() => {
    setPreviewImage(image);
  }, [image]);

  const handleSaveImage = async (file: File) => {
    if (!user?.token?.accessToken) return alert('로그인이 필요합니다.');

    const fileForm = new FormData();
    fileForm.set('attach', file);

    // 파일 먼저 업로드
    const uploadRes = await uploadFile(fileForm);
    if (!uploadRes.ok) {
      alert('이미지 업로드 실패');
      return;
    }

    const imagePath = uploadRes.item[0].path;

    // 이후 사용자 정보 업데이트
    const patchForm = new FormData();
    patchForm.set('image', imagePath);

    const res = await updateUser(null, patchForm, user._id, user.token.accessToken);
    if (res.ok && res.item?.image) {
      alert('프로필 이미지가 저장되었습니다!');
      setPreviewImage(`${process.env.NEXT_PUBLIC_API_URL}/${res.item.image}`);
      setUser({ ...user, image: res.item.image });
    } else {
      alert('프로필 이미지 저장 실패');
    }
  };

  return (
    <>
      <div className="flex justify-between border-b pt-[26px] pb-[18px] max-[480px]:px-[10px]">
        <div className="flex items-center gap-2">
          {previewImage ? (
            <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden">
              <Image
                src={
                  previewImage.startsWith('http') ? previewImage : `${process.env.NEXT_PUBLIC_API_URL}/${previewImage}`
                }
                alt="프로필 이미지"
                fill
                className="object-cover"
                sizes="60px"
              />
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
