'use client';

import 'react-quill-new/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import { userProjectStroe } from 'zustand/useProjectStore'; // 이거 최종적으로 데이터 저장해줘야함
import React, { useRef } from 'react';
import { uploadFile } from '@data/actions/file';
import ReactQuill from 'react-quill-new';

// dynamic는 컴포넌트를 사용자가 필요할때 불러옴
// 이게 무슨 소리냐 리액트는 웹 페이지를 로딩할때 컴포넌트를 다 만들고 html의 형태로 구성이 되는데
// 만드는 도중 dynamic가 붙은 컴포넌트는 나중에 불러오겠다는 의미
// 그리고 그 사이에는 loading에 있는 옵션으로 대신할 텍스트를 출력
// 이제 페이지 로딩이 끝나면 dynamic가 붙은 컴포넌트를 다시불러옴, 여기서는 태그가 모두 생성이 된 상태라서
// dom api에 접근이 가능함
const InputFiled = dynamic(() => import('react-quill-new'), {
  ssr: false, // SSR 비활성화: 클라이언트 사이드에서만 렌더링됨
  loading: () => <p>Loading...</p>,
}) as typeof ReactQuill;
// 타입 단언 ReactQuill의 타입을 가져와서 강제로 InputFiled라는 변수에 맞추겠다는 의미
// 즉 InputFiled는 현재 ReactQuill과 타입이 같음

/* ReactQuill */
export function QuillWrapper() {
  // 이 컴포넌트가 리렌더링 되어도 저장할 값
  // 현재 quillRef 변수는 ReactQuill 이라는 컴포넌트에서 ref라는 props로 넘겨지는데
  // 그럼 현재 quillRef는 ReactQuill의 주소를 가지고 있는 객체형태이다.
  // 이제 quillRef.current.[원하는 속성] 이런식으로 원하는 값에 접근이 가능하다는 의미!
  const quillRef = useRef<ReactQuill | null>(null);

  // 이건 내가 Zustand에서 만든 입력내용을 저장하는 함수야
  // 이 함수를 사용해서 저장된 값을 물건을 등록할때 최종 결과값을 확인 후에 이 값을 서버로 보내서 물건을 등록함
  const nowSetContent = userProjectStroe(state => state.setContent);

  // 이미지 추가 버튼을 눌렀을때 실행할 함수
  function imageHandler() {
    // input 태그를 동적으로 만드는 것
    const input = document.createElement('input');

    // 만든 input 태그에 속성으로 type:file을 부여
    input.setAttribute('type', 'file');

    // 만약 파일 업로드창을 띄운다면 이미지만 표시되도록 설정
    input.setAttribute('accept', 'image/*');

    // 이제 만든 input 태그를 강제로 클릭하게 만드는 함수
    // 즉 <input type="file" accept="image/*"> 이 태그를 강제로 클릭하게 만드는 것
    // 그럼 이제 업로드 파일창이 뜨는 상태임
    input.click();

    // onchange는 사용자가 파일을 업로드 하고 나서 실행되는 함수
    // 즉 현재는 사용자가 업로드한 이미지가 있는 상태
    // 업로드한 이미지는 차례대로 files에 배열형태로 존재함
    input.onchange = async () => {
      // 만약 파일 input.files가 없다면 업로드 된 이미지가 없다는 뜻임으로
      // 리턴한다
      if (!input.files) return;

      // 전송한 이미지중 가장 첫번째를 가져옴
      const file = input.files[0];

      // FormData 생성
      const formData = new FormData();

      // 서버 양식 맞춰서 key,value 값을 추가
      formData.append('attach', file);

      // 서버에 업로드 후 결과값을 response에 받아옴
      const response = await uploadFile(formData);

      // 업로드에서 성공하면 ok = 1을 받아온다
      if (response.ok === 1) {
        // 서버에서 받아온 결과에서 이미지 주소값을 추출해서 변수에 담아둠
        const imageUrl = response.item[0].path;

        // 현재 quillRef.current에는 ReactQuill를 참조하고 있는 상태인데
        // 많은 기능중 ReactQuill를 제어하는 기능만 변수에 할당
        const editor = quillRef.current!.getEditor();

        // editor에서 현재 ReactQuill의 입력위치를 반환
        const range = editor.getSelection();

        // insertEmbed는 ReactQuill에서 텍스트가 아닌 다른 다른 요소를 추가할때 쓰는것
        // 매개 변수로 삽입위치,타입,이미지 주소 를 입력
        editor.insertEmbed(range!.index, 'image', imageUrl);

        // 현재 커서를 다음 줄로 이동하여 바로 입력이 가능하도록 구성
        editor.setSelection(range!.index + 1);
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
    <InputFiled
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
