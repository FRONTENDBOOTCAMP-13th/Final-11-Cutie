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
      <div
        className="relative bg-primary-50 rounded-2xl max-h-[70vh] overflow-y-auto mt-[98px] mobile:mt-[100px] tablet:mt-[136px]"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <button className="absolute top-[10px] right-[10px] text-black p-2" onClick={onClose}>
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
