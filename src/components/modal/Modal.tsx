import { ReactNode, useEffect, useState } from 'react';

interface TestModalProps {
  children: ReactNode;
  isShow: boolean;
}

export default function Modal({ children, isShow = false }: TestModalProps) {
  const [show, setShow] = useState(isShow);
  useEffect(() => {
    setShow(isShow);
  }, [isShow]);
  console.log('클릭', show);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${!show && 'hidden'}`}
      >
        <div className="relative bg-white rounded-2xl">
          <button className="absolute -top-10 right-0 text-white p-2" onClick={() => setShow(false)}>
            ✕
          </button>
          {children}
        </div>
      </div>
    </>
  );
}
