'use client';

import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { userProjectStroe } from 'zustand/useProjectStore';

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline'],
    ['image', 'code-block'], // 여기 'image' 버튼 추가
  ],
};

/* ReactQuill */
export function QuillWrapper() {
  // 현재 유저가 적은 값 전역저장 (zustand)
  const nowSetContent = userProjectStroe(state => state.setContent);

  function contentSet(c: string) {
    const result = [...c.matchAll(/<p>(.*?)<\/p>/g)].map(match => match[1]).join(',');
    nowSetContent(JSON.stringify(result));
  }

  return (
    <ReactQuill
      onChange={c => {
        contentSet(c);
      }}
      placeholder="10글자 이상 입력해주세요!"
      modules={modules}
      className="w-full h-[300px]"
      theme="snow"
    />
  );
}
