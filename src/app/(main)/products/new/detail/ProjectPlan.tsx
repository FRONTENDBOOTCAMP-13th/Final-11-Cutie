// 이거 날짜 선택 스타일
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { MantineProvider } from '@mantine/core';
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { StarTitle } from '@components/common/etc';

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

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  const sortStyle = 'flex flex-col gap-[4px] mobile:gap-[14px]';
  const datePickerTextSize = 'max-[480px]:text-[10px] mobile:text-[12px] laptop:text-[16px]';

  return (
    <div className={`${sortStyle} ${datePickerTextSize}`}>
      <StarTitle title="프로젝트 진행 일정" />
      <DatePickerInput
        locale="ko"
        type="range"
        placeholder={`${year}/${month}/${date}`}
        value={value}
        onChange={setValue}
        minDate={today}
        styles={{
          input: {
            height: '40px',
            fontSize: 'inherit',
          },
        }}
      />
    </div>
  );
}
