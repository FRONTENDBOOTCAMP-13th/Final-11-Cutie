import { CreateProjectTitle } from '@components/common/etc';

/* 프로젝트 안내문 */
export function ProjectNotice() {
  /* 타이틀 글자 사이즈 */
  const projectTitle_480 = 'max-[480px]:text-[17px] '; // 0 ~ 479px 까지
  const projectTitle_768 = 'text-[20px] '; // 480 ~ 767px 까지

  /* 서브 글자 사이즈 */
  const projectSub_480 = 'max-[480px]:text-[10px] '; // 0 ~ 479px 까지
  const projectSub_768 = 'text-[12px] '; // 480 ~ 767px 까지

  return (
    <div className="pb-[39px]">
      <CreateProjectTitle
        title={'프로젝트를 조금 더 자세히 알려주세요'}
        sub={'기본 정보와 프로젝트에 대한 자세한 설명을 작성해주세요.'}
        gap={8}
        titleClassName={projectTitle_480 + projectTitle_768}
        subClassName={projectSub_480 + projectSub_768}
      />
    </div>
  );
}
