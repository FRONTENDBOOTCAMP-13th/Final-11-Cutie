// 이거 날짜 선택 스타일
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider } from '@mantine/core';
import { useEffect, useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { StarTitle } from '@components/common/etc';
import { userProjectStroe } from 'zustand/useProjectStore';
import { useEditProjectStore } from 'zustand/useEditProjectStore';

dayjs.locale('ko');

interface ProjectPlanProps {
  isEditMode?: boolean; // 수정할 때만 Zustand 사용
}

/* 프로젝트 진행 일정 */
export function ProjectPlan({ isEditMode = false }: ProjectPlanProps) {
  return (
    <MantineProvider>
      <SlectDate isEditMode={isEditMode} />
    </MantineProvider>
  );
}

function SlectDate({ isEditMode = false }: ProjectPlanProps) {
  // value에 선택한 날짜 들어있음
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  const today = dayjs().startOf('day').toDate();

  const setDate = userProjectStroe(state => state.setDate);

  const setStartDate = useEditProjectStore(state => state.setStartDate);
  const setEndDate = useEditProjectStore(state => state.setEndDate);

  useEffect(() => {
    setDate(JSON.stringify(value.join(',')));
  });

  // 수정 모드일 경우 시작일과 종료일 상태 설정
  useEffect(() => {
    if (isEditMode && value?.[0]) {
      setStartDate(value[0] || '');
    }
    if (isEditMode && value?.[1]) {
      setEndDate(value[1] || '');
    }
  }, [value, isEditMode, setStartDate, setEndDate]);

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  const sortStyle = 'flex flex-col gap-[15px]';
  const datePickerTextSize = 'max-[480px]:text-[10px] mobile:text-[12px] laptop:text-[16px]';

  return (
    <div className={`${sortStyle} ${datePickerTextSize} laptop:w-[220px]`}>
      <StarTitle
        title="프로젝트 진행 일정"
        subTitle="프로젝트 진행일정을 선택해주세요."
        className="max-[480px]:gap-[4px] max-[768px]:flex-col max-[768px]:items-start laptop:flex-col laptop:items-start"
      />
      <DatePickerInput
        locale="ko"
        type="range"
        placeholder={`${year}/${month}/${date}`}
        value={value}
        onChange={setValue}
        minDate={isEditMode ? undefined : today} // 수정 모드일 때 과거 날짜도 선택 가능하게 설정
        styles={{
          input: {
            width: '100%',
            height: '40px',
            fontSize: 'inherit',
          },
        }}
      />
    </div>
  );
}
