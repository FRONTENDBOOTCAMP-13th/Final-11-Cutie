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

  //이미지 상태
  const [savedImage, setSavedImage] = useState('');

  //닉네임 상태
  const [nickname, setNickname] = useState('');
  const [nicknameCheckResult, setNicknameCheckResult] = useState('');
  const [isNicknameAvailable, setIsNicknameAvailable] = useState(false);

  //비밀번호 상태
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //배송지 상태
  const [address, setAddress] = useState('');
  const [savedAddress, setSavedAddress] = useState('');

  //연락처 상태
  const [phone, setPhone] = useState('');
  const [savedPhone, setSavedPhone] = useState('');

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
          const fetchedAddress = data.item.address || '';
          const fetchedPhone = data.item.phone || '';
          const fetchedImage = data.item.image || '';

          setSavedImage(fetchedImage);
          setSavedAddress(fetchedAddress);
          setAddress(fetchedAddress);
          setSavedPhone(fetchedPhone);
          setPhone(fetchedPhone);
        } else {
          console.error('사용자 정보 조회 실패:', data.message);
        }
      } catch (err) {
        console.error('사용자 정보 요청 중 오류:', err);
      }
    };

    fetchUserInfo();
  }, []);

  //닉네임 중복확인
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
    } catch (error: unknown) {
      console.error('닉네임 중복 확인 중 오류:', error);
      setNicknameCheckResult('중복 확인 중 오류가 발생했습니다');
      setIsNicknameAvailable(false);
    }
  };

  //닉네임 변경
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
      setIsNicknameAvailable(false);
      useUserStore.getState().setUser({ ...user, name: nickname });
      setNickname('');
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

    if (newPassword !== confirmPassword) {
      alert('변경할 비밀번호와 확인이 일치하지 않습니다.');
      return;
    }

    // 현재 비밀번호 검증 (로그인 시도)
    const verifyForm = new FormData();
    verifyForm.set('email', user.email);
    verifyForm.set('password', currentPassword);

    const verify = await login(null, verifyForm);
    if (!verify.ok) {
      alert('현재 비밀번호가 일치하지 않습니다.');
      return;
    }

    // 새 비밀번호 저장
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

  // 배송지 등록
  const handleSaveAddress = async () => {
    const { user } = useUserStore.getState();

    if (!user || !user.token?.accessToken) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (!address.trim()) {
      alert('주소를 입력해주세요.');
      return;
    }

    const accessToken = user.token.accessToken;
    const formData = new FormData();
    formData.set('address', address);

    // updateUser를 통해 JSON으로 PATCH 요청
    const res = await updateUser(null, formData, user._id, accessToken);

    if (res.ok) {
      alert('기본 배송지가 저장되었습니다!');
      // 로컬 상태도 동기화
      setSavedAddress(address);
      setAddress('');
      // zustand 유저 스토어에도 반영하고 싶다면
      useUserStore.getState().setUser({ ...user, address });
    } else {
      alert(`배송지 저장 실패: ${res.message}`);
    }
  };

  // 연락처 등록
  const handleSavePhone = async () => {
    const { user } = useUserStore.getState();

    if (!user || !user.token?.accessToken) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (!phone.trim()) {
      alert('연락처를 입력해주세요.');
      return;
    }

    const accessToken = user.token.accessToken;
    const formData = new FormData();
    formData.set('phone', phone);

    const res = await updateUser(null, formData, user._id, accessToken);

    if (res.ok) {
      alert('연락처가 저장되었습니다!');
      setSavedPhone(phone);
      setPhone('');
    } else {
      alert(`연락처 저장 실패: ${res.message}`);
    }
  };

  function formatPhoneNumber(value: string) {
    const numbersOnly = value.replace(/\D/g, '');

    if (numbersOnly.length < 4) return numbersOnly;
    if (numbersOnly.length < 7) return `${numbersOnly.slice(0, 3)}-${numbersOnly.slice(3)}`;
    if (numbersOnly.length < 11) return `${numbersOnly.slice(0, 3)}-${numbersOnly.slice(3, 6)}-${numbersOnly.slice(6)}`;
    return `${numbersOnly.slice(0, 3)}-${numbersOnly.slice(3, 7)}-${numbersOnly.slice(7, 11)}`;
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  return (
    <div className={inner}>
      <div className="flex flex-col min-w-[320px] gap-[20px] laptop:w-[600px]">
        <span className={'font-[800] ' + titleSize}>프로필 편집</span>

        <ProfileImageSection image={savedImage} />

        <InputField
          title={'닉네임'}
          placeholderText={'닉네임 입력'}
          errText={'*닉네임을 변경하면 일주일 동안 변경하실 수 없습니다.'}
          checkButtonText={['중복 확인']}
          name={nickname}
          onCheck={handleCheckNickname}
          checkResult={nicknameCheckResult}
          onChange={e => setNickname(e.target.value)}
        />
        {isNicknameAvailable && <SignUpProfileEditButton label="변경" onClick={handleSaveNickname} />}

        <InputField
          type="password"
          title={'본인 확인을 위해 현재 비밀번호를 입력해주세요'}
          placeholderText={'현재 비밀번호 입력'}
          errText={'*비밀번호를 변경하면 일주일 동안 변경하실 수 없습니다.'}
          name={currentPassword}
          onChange={e => setCurrentPassword(e.target.value)}
        />

        <InputField
          type="password"
          title={'변경할 비밀번호를 입력해주세요'}
          placeholderText={'변경할 비밀번호 입력'}
          name={newPassword}
          onChange={e => setNewPassword(e.target.value)}
        />

        <InputField
          type="password"
          title={'확인을 위해 비밀번호를 한번 더 입력해주세요'}
          placeholderText={'비밀번호 확인'}
          name={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          checkButtonText={['변경']}
          onCheck={changePassword}
        />

        <InputField
          title={'기본 배송지'}
          placeholderText={savedAddress || '주소 입력'}
          checkButtonText={[savedAddress ? '수정' : '등록']}
          name={address}
          onChange={e => setAddress(e.target.value)}
          onCheck={handleSaveAddress}
        />
        <InputField
          title={'연락처'}
          placeholderText={savedPhone || '전화번호 입력'}
          checkButtonText={[savedPhone ? '수정' : '등록']}
          name={phone}
          onChange={handlePhoneChange}
          onCheck={handleSavePhone}
        />
      </div>
    </div>
  );
}
