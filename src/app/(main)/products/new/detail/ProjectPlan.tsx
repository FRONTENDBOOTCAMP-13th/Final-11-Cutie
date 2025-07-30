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

dayjs.locale('ko');

/* 프로젝트 진행 일정 */
export function ProjectPlan() {
  return (
    <MantineProvider>
      <SlectDate />
    </MantineProvider>
  );
}

function SlectDate() {
  // value에 선택한 날짜 들어있음
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  const today = dayjs().startOf('day').toDate();

  const setDate = userProjectStroe(state => state.setDate);
  useEffect(() => {
    setDate(JSON.stringify(value.join(',')));
  });

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
        minDate={today}
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
