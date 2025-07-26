import { Upload } from 'lucide-react';

/* 프로젝트 대표 이미지 */
export function ProjectThumbnail() {
  /* 이미지 업로드 텍스트 */
  const imgUpload_480 = 'max-[480px]:text-[10px] '; // 0 ~ 479px 까지
  const imgUpload_768 = 'mobile:text-[10px] '; // 480 ~ 767px 까지
  const imgUpload_1280 = 'tablet:text-[12px] '; // 768 ~ 1279px 까지

  /* 이미지 사이즈 텍스트 */
  const imgSize_480 = 'max-[480px]:text-[8px] '; // 0 ~ 479px 까지
  const imgSize_768 = 'mobile:text-[12px] ';

  return (
    <div className="grid gap-[11px] mb-[40px] tablet:grid-cols-[auto_1fr] tablet:items-center tablet:gap-[24px]">
      <span className="flex flex-col gap-[11px]">
        <span className="normal-14 font-[700]">
          프로젝트 대표 이미지<span className="text-error">*</span>
        </span>
      </span>

      <div className="flex flex-col justify-center items-center p-[20px] normal-10 font-[500] rounded-[4px] border-[1px] border-secondary-200 cursor-pointer">
        <div className="flex flex-col gap-[8px] justify-center items-center">
          <div className="flex gap-[4px]">
            <Upload width={15} height={12} color="#091FB0" />{' '}
            <span className={imgUpload_480 + imgUpload_768 + imgUpload_1280}>이미지 업로드(0/1)</span>
          </div>
          <span className={'text-[#686871] font-[500] ' + imgSize_480 + imgSize_768 + imgUpload_1280}>
            파일 형식 : jpg 또는 png / 용량 : 5MB 이하
          </span>
          <span className={'text-[#686871] font-[500] ' + imgSize_480 + imgSize_768 + imgUpload_1280}>
            사이즈 : 가로 세로 각각 1000px 이상 <span className="text-[#17171B]">가로 세로 비율 1:1</span>
          </span>
        </div>
      </div>
    </div>
  );
}
