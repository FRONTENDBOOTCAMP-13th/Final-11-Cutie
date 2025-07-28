import { useEffect } from 'react';
import Modal from '@components/modal/Modal';

interface TermsModalProps {
  isShow: boolean;
  onClose: () => void;
}

export function TermsModal({ isShow, onClose }: TermsModalProps) {
  // ESC 키로 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <Modal isShow={isShow} onClose={onClose}>
      <div className="w-[90vw] max-w-[640px] max-h-[70vh] overflow-y-auto p-6 rounded-2xl">
        <div className="semibold-16 text-primary-800 mb-2">제1조 (목적)</div>
        <p className="normal-14 text-font-400 leading-relaxed mb-4">
          이 약관은 1더하기1은귀요미 주식회사(이하 &quot;회사&quot;)가 제공하는 펀딩 플랫폼 서비스 펀드림(이하
          &quot;서비스&quot;)의 이용조건 및 절차, 이용자와 회사 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
        </p>

        <div className="semibold-16 text-primary-800 mb-2">제2조 (정의)</div>
        <ul className="list-decimal ml-5 text-font-400 normal-14 leading-relaxed mb-4">
          <li>&quot;플랫폼&quot;이란 회사가 온라인상에서 제공하는 펀딩 관련 서비스를 의미합니다.</li>
          <li>&quot;이용자&quot;란 본 약관에 따라 플랫폼에 가입하여 서비스를 이용하는 자를 말합니다.</li>
          <li>&quot;프로젝트&quot;란 이용자가 플랫폼을 통해 게시한 후원 유치를 위한 기획안을 말합니다.</li>
          <li>&quot;서포터&quot;란 프로젝트에 참여하여 후원한 이용자를 말합니다.</li>
          <li>&quot;창작자&quot;란 프로젝트를 개설하여 자금을 모집하는 이용자를 말합니다.</li>
        </ul>

        <div className="semibold-16 text-primary-800 mb-2">제3조 (약관의 효력 및 변경)</div>
        <ul className="list-disc ml-5 text-font-400 normal-14 leading-relaxed mb-4">
          <li>본 약관은 회사가 플랫폼에 게시하거나 기타 방법으로 공지함으로써 효력이 발생합니다.</li>
          <li>회사는 관계법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있습니다.</li>
          <li>
            변경된 약관은 제1항과 같은 방법으로 공지하며, 이용자가 동의하지 않을 경우 서비스 이용을 중단할 수 있습니다.
          </li>
        </ul>

        <div className="semibold-16 text-primary-800 mb-2">제4조 (서비스의 제공 및 변경)</div>
        <ul className="list-disc ml-5 text-font-400 normal-14 leading-relaxed mb-4">
          <li>
            회사는 다음과 같은 서비스를 제공합니다.
            <ul className="list-disc ml-5">
              <li>프로젝트 등록 및 관리 시스템</li>
              <li>후원 결제 및 정산 시스템</li>
              <li>커뮤니티 및 소통 기능</li>
              <li>기타 회사가 정하는 서비스</li>
            </ul>
          </li>
        </ul>

        <div className="flex justify-center mt-6">
          <button onClick={onClose} className="px-6 py-2 bg-primary-800 text-white rounded-[4px] hover:bg-primary-900">
            닫기
          </button>
        </div>
      </div>
    </Modal>
  );
}
