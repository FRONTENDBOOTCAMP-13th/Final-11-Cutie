'use client';

import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { userProjectStroe } from 'zustand/useProjectStore'; // 이거 최종적으로 데이터 저장해줘야함
import React, { useRef } from 'react';
import { uploadFile } from '@data/actions/file';

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

/* ReactQuill */
export function QuillWrapper() {
  const quillRef = useRef(null);
  const nowSetContent = userProjectStroe(state => state.setContent);

  function imageHandler() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;

      // FormData 생성
      const formData = new FormData();
      formData.append('attach', file);

      // 서버에 업로드 (uploadFile은 서버통신 함수)
      const response = await uploadFile(formData);

      if (response.ok === 1) {
        const imageUrl = response.item[0].path;
        const editor = quillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range.index, 'image', imageUrl);
        editor.setSelection(range.index + 1);
      }
    };
  }

  const modules = {
    toolbar: {
      container: [[{ header: [1, 2, false] }], ['bold', 'italic', 'underline'], ['image', 'code-block']],
      handlers: {
        image: imageHandler,
      },
    },
  };

  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      placeholder="10글자 이상 입력해주세요!"
      className="w-full h-[300px]"
      modules={modules}
      onChange={e => {
        nowSetContent(e);
      }}
    />
  );
}
