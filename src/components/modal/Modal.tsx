import { ReactNode } from 'react';

interface TestModalProps {
  children: ReactNode;
  isShow: boolean;
  onClose: () => void; // 모달 닫기, 쓸 모달에 onClose={() => setShowModal(false) 통해서 사용
}

export default function Modal({ children, isShow, onClose }: TestModalProps) {
  if (!isShow) return null; // 아예 렌더링 안 함

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-2xl">
        <button className="absolute -top-10 right-0 text-white p-2" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
