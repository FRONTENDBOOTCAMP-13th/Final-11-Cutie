'use client';

import { useRef, useState } from 'react';

type Props = {
  onClose: () => void;
  onUpload: (file: File) => void;
};

export default function ProfileImageModal({ onClose, onUpload }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('현재 선택된 파일 없음');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onUpload(file);
      onClose();
    }
  };

  const triggerFileSelect = () => {
    fileRef.current?.click();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[320px]">
        <h2 className="font-semibold text-lg mb-4">프로필 이미지 업로드</h2>

        {/* 사용자 맞춤형 파일 선택 */}
        <div className="mb-4">
          <input ref={fileRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          <p className="mt-2 text-sm text-gray-600 truncate">{fileName}</p>
          <button
            onClick={triggerFileSelect}
            className="px-4 py-2 bg-primary-800 mt-[20px] text-white rounded hover:bg-primary-700"
          >
            파일 선택
          </button>
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 text-[15px] bg-gray-300 rounded hover:bg-gray-400">
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
