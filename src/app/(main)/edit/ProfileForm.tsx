'use client';
import { useEffect, useState } from 'react';

import { checkName } from '@data/functions/user';
import { login, updateUser } from '@data/actions/user';
import useUserStore from 'zustand/userStore';
import { SignUpProfileEditButton } from '@app/(main)/edit/SignUpProfileEditButton';
import { InputField } from '@app/(main)/edit/InputField';
import ProfileImageSection from '@app/(main)/edit/ProfileImageSection';

export default function ProfileTotal() {
  const inner =
    'p-[25px] max-[480px]:px-[5px] tablet:px-[40px] py-[24px] laptop:px-[352px] laptop:py-[83px] laptop:flex laptop:justify-center';
  const titleSize = 'normal-18 min-[768px]:text-[20px] min-[1440px]:text-[24px]';

  // 이미지 상태
  const [savedImage, setSavedImage] = useState('');

  // 닉네임 상태
  const [nickname, setNickname] = useState('');
  const [savedNickname, setSavedNickname] = useState('');
  const [nicknameCheckResult, setNicknameCheckResult] = useState('');
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);

  // 비밀번호 상태
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 이름 상태
  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      const { user } = useUserStore.getState();
      if (!user || !user.token?.accessToken) return;

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`, {
          headers: {
            Authorization: `Bearer ${user.token.accessToken}`,
            'Client-Id': process.env.NEXT_PUBLIC_CLIENT_ID || '',
          },
        });

        const data = await res.json();

        if (res.ok && data.item) {
          const fetchedRealName = data.item.realname || '';
          const fetchedImage = data.item.image || '';
          const fetchedNickname = data.item.name || '';

          setSavedImage(fetchedImage);
          setSavedName(fetchedRealName);
          setName(fetchedRealName);

          setSavedNickname(fetchedNickname);
          setNickname(fetchedNickname);
        }
      } catch (err) {
        console.error('사용자 정보 요청 중 오류:', err);
      }
    };

    fetchUserInfo();
  }, []);

  // 닉네임 중복확인
  const handleCheckNickname = async () => {
    if (!nickname) return;
    const { user } = useUserStore.getState();

    if (user?.name === nickname) {
      setNicknameCheckResult('현재 사용 중인 닉네임입니다');
      setIsNicknameAvailable(false);
      return;
    }

    try {
      const res = await checkName(nickname);
      const isDuplicate = (res as { item?: { isDuplicate: boolean } }).item?.isDuplicate ?? false;
      if (isDuplicate) {
        setNicknameCheckResult('이미 사용중인 닉네임입니다');
        setIsNicknameAvailable(false);
      } else {
        setNicknameCheckResult('사용 가능한 닉네임입니다');
        setIsNicknameAvailable(true);
      }
    } catch (error) {
      console.error('닉네임 중복 확인 중 오류:', error);
      setNicknameCheckResult('닉네임 중복 및 오류입니다');
      setIsNicknameAvailable(false);
    }
  };

  // 닉네임 저장
  const handleSaveNickname = async () => {
    const { user } = useUserStore.getState();

    if (!user || !user.token?.accessToken) {
      alert('로그인이 필요합니다.');
      return;
    }

    const accessToken = user.token.accessToken;
    const formData = new FormData();
    formData.set('name', nickname);

    const res = await updateUser(null, formData, user._id, accessToken);

    if (res.ok) {
      alert('닉네임이 저장되었습니다!');
      setNicknameCheckResult('');
      setSavedNickname(nickname);
      setIsNicknameAvailable(false);
      useUserStore.getState().setUser({ ...user, name: nickname });
    } else {
      alert('닉네임 저장 실패: ' + res.message);
    }
  };

  // 비밀번호 변경
  const changePassword = async () => {
    const { user } = useUserStore.getState();

    if (!user || !user.token?.accessToken) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (!currentPassword || !newPassword || !confirmPassword) {
      alert('모든 비밀번호 입력란을 채워주세요.');
      return;
    }

    if (newPassword.length < 8) {
      alert('비밀번호는 최소 8자리 이상이어야 합니다.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('변경할 비밀번호와 확인이 일치하지 않습니다.');
      return;
    }

    const verifyForm = new FormData();
    verifyForm.set('email', user.email);
    verifyForm.set('password', currentPassword);

    const verify = await login(null, verifyForm);
    if (!verify.ok) {
      alert('현재 비밀번호가 일치하지 않습니다.');
      return;
    }

    const accessToken = user.token.accessToken;
    const formData = new FormData();
    formData.set('password', newPassword);

    const res = await updateUser(null, formData, user._id, accessToken);

    if (res.ok) {
      alert('비밀번호가 성공적으로 변경되었습니다!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      alert(`비밀번호 변경 실패: ${res.message}`);
    }
  };

  // 이름 저장
  const handleSaveName = async () => {
    const { user } = useUserStore.getState();

    if (!user || !user.token?.accessToken) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (!name.trim()) {
      alert('이름을 입력해주세요.');
      return;
    }

    const accessToken = user.token.accessToken;
    const formData = new FormData();
    formData.set('realname', name);

    const res = await updateUser(null, formData, user._id, accessToken);

    if (res.ok) {
      alert('이름이 저장되었습니다!');
      setSavedName(name);
      useUserStore.getState().setUser({ ...user, realname: name });
    } else {
      alert(`이름 저장 실패: ${res.message}`);
    }
  };

  return (
    <div className={inner}>
      <div className="flex flex-col min-w-[320px] gap-[20px] laptop:w-[600px]">
        <span className={'font-[800] ' + titleSize}>프로필 편집</span>

        <ProfileImageSection image={savedImage} />

        <InputField
          title="닉네임"
          placeholderText={savedNickname || '닉네임 입력'}
          checkButtonText={[savedNickname ? '수정' : '등록']}
          name={nickname}
          onCheck={handleCheckNickname}
          checkResult={nicknameCheckResult}
          onChange={e => setNickname(e.target.value)}
        />
        {isNicknameAvailable && <SignUpProfileEditButton label="변경" onClick={handleSaveNickname} />}

        <InputField
          type="password"
          title="본인 확인을 위해 현재 비밀번호를 입력해주세요"
          placeholderText="현재 비밀번호 입력"
          name={currentPassword}
          onChange={e => setCurrentPassword(e.target.value)}
        />
        <InputField
          type="password"
          title="변경할 비밀번호를 입력해주세요"
          placeholderText="변경할 비밀번호 입력"
          name={newPassword}
          onChange={e => setNewPassword(e.target.value)}
        />
        <InputField
          type="password"
          title="확인을 위해 비밀번호를 한번 더 입력해주세요"
          placeholderText="비밀번호 확인"
          name={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          checkButtonText={['변경']}
          onCheck={changePassword}
        />

        <InputField
          title="이름"
          placeholderText={savedName || '이름 입력'}
          checkButtonText={[savedName ? '수정' : '등록']}
          name={name}
          onChange={e => setName(e.target.value)}
          onCheck={handleSaveName}
        />

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => (window.location.href = '/')}
            className="px-6 py-2 bg-primary-800 text-white rounded-lg cursor-pointer"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
