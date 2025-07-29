'use client';

import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic';

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
  return <ReactQuill modules={modules} className="w-full h-[300px]" theme="snow" />;
}
