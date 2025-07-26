import { QuillWrapper } from './react.quill';

/* 프로젝트 소개 */
export function ProjectIntro() {
  return (
    <div className="flex flex-col gap-[11px] mb-[80px]">
      <span className="flex flex-col gap-[11px]">
        <span className="normal-13 font-[700]">
          프로젝트 소개<span className="text-error">*</span>
        </span>
        <span className="normal-10 font-[400] text-[#686871]">
          작성한 내용이 상품 소개 페이지에 반영됩니다. (이미지 업로드는 최대 5개까지 가능합니다.)
        </span>
      </span>

      <QuillWrapper />
    </div>
  );
}
