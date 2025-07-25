'use client';

import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

/* ReactQuill */
export function QuillWrapper() {
  return <ReactQuill className="w-full h-[300px]" theme="snow" />;
}
