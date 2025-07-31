'use client';

import { getNotifications } from '@data/functions/getNotification';
import { INotification } from '@models/notification';
import { useEffect, useState } from 'react';
import AlertMessage from './AlertMessage';
import useUserStore from 'zustand/userStore';
import useAlertStore from 'zustand/alertStore';

// 알림 부분
export default function Alert() {
  const [alerts, setAlerts] = useState<INotification[]>([]);
  const [error, setError] = useState('');

  const accessToken = useUserStore().user?.token?.accessToken; // 토큰 가져오기

  const deletedAlertId = useAlertStore(state => state.deletedAlertId); // 삭제된 알림 목록 가져오기

  // 알림 목록 조회
  useEffect(() => {
    if (!accessToken) return;
    getNotifications(accessToken)
      .then(res => {
        if (res.ok && res.item) {
          setAlerts(res.item);
        } else {
          setError('알림을 불러오지 못했습니다.');
        }
      })
      .catch(() => setError('알림 요청 중 오류가 발생했습니다.'));
  }, [accessToken]);

  return (
    <div className="hidden max-h-[910px] laptop:max-h-[1265px] overflow-y-auto tablet:flex flex-col gap-[8px] noraml-14 font-[600] border border-primary-800 px-[6px] py-[11px] rounded-[8px] bg-primary-50 min-w-0">
      <span className="px-[24px] py-[6px] semibold-14 border-[1px] border-error w-fit rounded-[13px] text-error bg-white flex-shrink-0">
        알림
      </span>
      {error ? (
        <p className="text-error text-sm px-4">{error}</p>
      ) : alerts.filter(alert => !deletedAlertId.includes(alert._id)).length === 0 ? (
        <p className="text-sm text-font-400 px-4">알림이 없습니다.</p>
      ) : (
        alerts
          .filter(alert => !deletedAlertId.includes(alert._id))
          .map(alert => <AlertMessage key={alert._id} alert={alert} accessToken={accessToken!} />)
      )}
    </div>
  );
}
