import { StarTitle } from '@components/common/etc';
import { ProjectContent } from './ProjectContent';

/* 프로젝트 소개 */
export function ProjectIntro({ isEditMode = false }: ProjectIntroProps) {
  const content = useEditProjectStore(state => state.content); // 수정 시 사용

  return (
    <div className="flex flex-col gap-[11px] mb-[80px]">
      <StarTitle
        title="프로젝트 소개"
        subTitle="작성한 내용이 상품 소개 페이지에 반영됩니다. (이미지 업로드는 최대 5개까지 가능합니다.)"
        className="flex-col items-start"
      />

      {/* 입력란 */}
      <ProjectContent />
    </div>
  );
}
