'use client';

import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { userProjectStroe } from 'zustand/useProjectStore'; // 이거 최종적으로 데이터 저장해줘야함
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill-new';
import { useEditProjectStore } from 'zustand/useEditProjectStore';

interface ProjectContentProps {
  isEditMode?: boolean;
  initialContent?: string;
}

const InputFiled = dynamic(() => import('react-quill-new'), {
  ssr: false, // SSR 비활성화: 클라이언트 사이드에서만 렌더링됨
  loading: () => <p>Loading...</p>,
}) as typeof ReactQuill;

/* ReactQuill */
export function ProjectContent({ isEditMode = false, initialContent }: ProjectContentProps) {
  // 이건 내가 Zustand에서 만든 입력내용을 저장하는 함수야
  // 이 함수를 사용해서 저장된 값을 물건을 등록할때 최종 결과값을 확인 후에 이 값을 서버로 보내서 물건을 등록함
  const nowSetContent = userProjectStroe(state => state.setContent);

  const { saveContent } = useEditProjectStore(); // 수정용 zustand
  const [value, setValue] = useState<string>('');

  const modules = {
    toolbar: {
      container: [[{ header: [1, 2, false] }], ['bold', 'italic', 'underline'], ['image', 'code-block']],
    },
  };

  // 수정 모드일 경우, 초기값을 Quill에 반영하고 zustand에도 넣음
  useEffect(() => {
    if (isEditMode && initialContent) {
      setValue(initialContent);
      saveContent(initialContent);
    }
  }, [isEditMode, initialContent, saveContent]);

  // zustand에 저장하는 로직 분리
  const handleChange = (content: string) => {
    setValue(content);
    if (isEditMode) {
      saveContent(content);
    } else {
      nowSetContent(content);
    }
  };

  return (
    <InputFiled
      theme="snow"
      placeholder="10글자 이상 입력해주세요!"
      className="w-full h-[300px]"
      modules={modules}
      onChange={e => {
        handleChange(e);
      }}
      value={value}
    />
  );
}
