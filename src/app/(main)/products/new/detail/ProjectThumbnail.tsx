'use client';

import { StarTitle } from '@components/common/etc';
import { Upload } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useEditProjectStore } from 'zustand/useEditProjectStore';
import { userProjectStroe } from 'zustand/useProjectStore';

interface ProjectThumbnailProps {
  isEditMode?: boolean;
}

/* 프로젝트 대표 이미지 */
export function ProjectThumbnail({ isEditMode = false }: ProjectThumbnailProps) {
  /* 이미지 업로드 텍스트 */
  const imgUpload_480 = 'max-[480px]:text-[10px] '; // 0 ~ 479px 까지
  const imgUpload_768 = 'mobile:text-[10px] '; // 480 ~ 767px 까지
  const imgUpload_1280 = 'tablet:text-[12px] '; // 768 ~ 1279px 까지

  /* 이미지 사이즈 텍스트 */
  const imgSize_480 = 'max-[480px]:text-[8px] '; // 0 ~ 479px 까지
  const imgSize_768 = 'mobile:text-[12px] ';

  /* 이미지 첨부 확인 */
  const [img, setImg] = useState(0);

  const mainImgSet = userProjectStroe(state => state.setMainImage);
  const mainImage = useEditProjectStore(state => state.mainImage);

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const currentImage = previewImage || (isEditMode ? mainImage : null);

  function setImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (ext !== 'jpg' && ext !== 'png') {
        alert('이미지를 넣어주세요.');
        return;
      }

      // Zustand 저장
      mainImgSet(file);

      // URL 객체로 미리보기 생성
      const imageURL = URL.createObjectURL(file);
      setPreviewImage(imageURL); // 수정 모드에서 사진 새로 업로드 시, 미리보기 업데이트

      setImg(1);
    }
  }
  // 수정 모드에서 이미 이미지가 있으면 1로 설정
  useEffect(() => {
    if (mainImage) {
      setImg(1);
    }
  }, [mainImage]);

  return (
    <div className="grid gap-[11px] mb-[40px] tablet:grid-cols-[auto_1fr] tablet:items-center tablet:gap-[24px]">
      <StarTitle title="프로젝트 대표 이미지" />

      <div className="relative flex flex-col justify-center items-center p-[20px] normal-10 font-[500] rounded-[4px] border-[1px] border-secondary-200">
        {/* 이미지 업로드 부분 */}
        <input type="file" id="fileInput" className="hidden" onChange={setImage} />
        <label htmlFor="fileInput" className="absolute w-full h-full cursor-pointer"></label>
        <div className="flex flex-col gap-[8px] justify-center items-center">
          <div className="flex gap-[4px]">
            <Upload width={15} height={12} color="#091FB0" />{' '}
            <span className={imgUpload_480 + imgUpload_768 + imgUpload_1280}>이미지 업로드({img}/1)</span>
          </div>
          <span className={'text-[#686871] font-[500] ' + imgSize_480 + imgSize_768 + imgUpload_1280}>
            파일 형식 : jpg 또는 png / 용량 : 5MB 이하
          </span>
          <span className={'text-[#686871] font-[500] ' + imgSize_480 + imgSize_768 + imgUpload_1280}>
            사이즈 : 가로 세로 각각 1000px 이상 <span className="text-[#17171B]">가로 세로 비율 1:1</span>
          </span>

          {/* 미리보기 이미지 렌더링 */}
          {currentImage && (
            <Image
              src={currentImage}
              alt="대표 이미지"
              width={100}
              height={100}
              className="mt-[12px] w-[100px] h-[100px] object-cover rounded"
            />
          )}
        </div>
      </div>
    </div>
  );
}
