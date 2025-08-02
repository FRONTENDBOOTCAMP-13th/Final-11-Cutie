'use client';

import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { userProjectStroe } from 'zustand/useProjectStore';
import { useEditProjectStore } from 'zustand/useEditProjectStore';
import { useEffect, useState } from 'react';

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline'],
    ['image', 'code-block'],
  ],
};

interface QuillWrapperProps {
  isEditMode?: boolean;
  initialContent?: string;
}

/* ReactQuill */
export function QuillWrapper({ isEditMode = false, initialContent }: QuillWrapperProps) {
  // 현재 유저가 적은 값 전역저장 (zustand)
  const nowSetContent = userProjectStroe(state => state.setContent);

  const { setContent } = useEditProjectStore(); // 수정용 zustand
  const [value, setValue] = useState<string>('');

  // 수정 모드일 경우, 초기값을 Quill에 반영하고 zustand에도 넣음
  useEffect(() => {
    if (isEditMode && initialContent) {
      setValue(initialContent);
      setContent(initialContent);
    }
  }, [isEditMode, initialContent, setContent]);

  function contentSet(c: string) {
    setValue(c);

    if (isEditMode) {
      setContent(c);
    } else {
      nowSetContent(c);
    }
  }

  return (
    <ReactQuill
      onChange={c => {
        contentSet(c);
      }}
      modules={modules}
      className="w-full h-[300px]"
      theme="snow"
      value={value}
    />
  );
}
