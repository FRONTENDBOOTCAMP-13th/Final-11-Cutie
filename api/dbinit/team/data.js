import dayjs from 'dayjs';

function getTime(day = 0, second = 0) {
  return dayjs().add(day, 'days').add(second, 'seconds').format('YYYY.MM.DD HH:mm:ss');
}

export const initData = async (clientId, nextSeq) => {
  return {
    // 회원
    user: [
      // 관리자
      {
        _id: await nextSeq('user'),
        email: 'support_fundream@cutie.kr',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '펀드림',
        phone: '01011112222',
        address: '서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층',
        type: 'admin',
        loginType: 'email',
        image: `files/${clientId}/profile.svg`,
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
      },

      // 일반 회원
      {
        _id: await nextSeq('user'),
        email: 'honggildong@cutie.kr',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '홍길동',
        phone: '01033334444',
        address: '서울시 중구 필동로 1길 30',
        type: 'user',
        loginType: 'email',
        image: `files/${clientId}/user-hong.png`,
        createdAt: getTime(-10),
        updatedAt: getTime(-10),
        extra: {
          birthday: '01-03',
        },
      },

      // 판매자
      {
        _id: await nextSeq('user'),
        email: 'cutie_11@gmail.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '(주)1더하기1은귀요미',
        phone: '01055556666',
        address: '서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층',
        type: 'seller',
        loginType: 'email',
        image: `files/${clientId}/user-seller-hong.png`,
        createdAt: getTime(-20),
        updatedAt: getTime(-20),
      },
    ],

    // 상품
    product: [
      {
        _id: await nextSeq('product'),
        seller: 2,
        title: '개구리 중사 케로로케로케로 티셔츠',
        description:
          '<h2>화제의 케로로 티셔츠 드디어 오픈!</h2><br><p>개구리 중사 케로케로케로케로 힘차게 케로케로케로 티셔츠</p>',
        image: `files/${clientId}/product-keroro-shirt.png`,
        price: 500000,
        goalAmount: 5555,
        currentAmount: 299447,
        goalPercent: 5394,
        funding: {
          startDate: new Date('2025-07-08T00:00:00.000Z'),
          endDate: new Date('2025-08-08T00:00:00.000Z'),
          deliveryDate: new Date('2025-08-08T00:00:00.000Z'),
        },
        category: '의류',
        stock: 9999,
        status: 'funding',
        likeCount: 1,
        createdAt: getTime(-3),
        updatedAt: getTime(-3),
      },
    ],
    // 주문
    order: [
      {
        _id: await nextSeq('order'),
        buyer: 1,
        seller: 2,
        productId: 1,
        productTitle: '개구리 중사 타마마 바지',
        productImage: `files/${clientId}/reviewProduct.jpg`,
        price: 500000,
        quantity: 1,
        totalAmount: 500000,
        deliveryFee: 0,
        deliveryAddress: '서울 종로구 종로3길 17, 광화문D타워 D15 16층, 17층',
        status: 'paid',
        createdAt: getTime(-1),
        updatedAt: getTime(-1),
      },
    ],

    // 후기
    // 마이페이지는 userId로 가져오기
    review: [
      {
        _id: await nextSeq('review'),
        userId: 1,
        productId: 1,
        title: '색깔이 생각보다 어둡네요',
        content: '사진이랑 달라요. 아쉽습니다.',
        rating: 3.0,
        images: [],
        createdAt: '2024.05.05 14:00:00',
      },
      {
        _id: await nextSeq('review'),
        userId: 1,
        productId: 5,
        title: '완전 따뜻해요!',
        content: '기대 이상으로 따뜻하고 좋네요.',
        rating: 5.0,
        images: [],
        createdAt: '2024.01.18 10:30:00',
      },
      {
        _id: await nextSeq('review'),
        userId: 2,
        productId: 1,
        title: '',
        content: '대만족 합니다.',
        rating: 5.0,
        images: [`files/${clientId}/reviewProucut.jpg`],
        createdAt: getTime(-5),
      },
      {
        _id: await nextSeq('review'),
        userId: 1,
        productId: 10,
        title: '배송이 생각보다 빠르고 좋았어요',
        content: '굿입니다.',
        rating: 5.0,
        images: [],
        createdAt: '2023.01.13 09:15:00',
      },
    ],

    // 장바구니
    cart: [
      {
        _id: await nextSeq('cart'),
        userId: 1,
        productId: 1,
        quantity: 1,
        createdAt: getTime(-1, -60 * 60 * 4),
        updatedAt: getTime(-1, -60 * 60 * 4),
      },
      {
        _id: await nextSeq('cart'),
        userId: 1,
        productId: 1,
        quantity: 1,
        createdAt: getTime(-1, -60 * 60 * 3),
        updatedAt: getTime(-1, -60 * 60 * 3),
      },
    ],

    // 즐겨찾기/북마크
    bookmark: [
      {
        _id: await nextSeq('bookmark'),
        userId: 2,
        productId: 1,
        createdAt: getTime(-2),
      },
    ],

    // QnA, 공지사항 등의 게시판
    post: [
      // 공지사항(자주 묻는 질문)
      {
        _id: await nextSeq('post'),
        type: 'qna',
        views: 142,
        user: {
          _id: 1, // admin
          name: '펀드림',
          image: `files/${clientId}/logo.svg`,
        },
        category: '결제',
        title: '할부 결제가 가능한가요?',
        content: '후원 결제는 현재 카드, 네이버페이, 계좌 이체로만 가능합니다. 추후 결제 수단 확대 예정입니다.',
        createdAt: getTime(-7),
        updatedAt: getTime(-7),
      },

      // 상품 Q&A
      {
        _id: await nextSeq('post'),
        type: 'qna',
        views: 12,
        user: {
          _id: 2, // 홍길동 (일반 사용자)
          name: '홍길동',
          image: `files/${clientId}/user-muzi.png`,
        },
        title: '세탁기 사용해도 되나요?',
        content: '케로케로케로 티셔츠 일반 세탁기에 돌려도 되는지 궁금해요!',
        createdAt: getTime(-3),
        updatedAt: getTime(-3),
      },
    ],

    // 코드
    code: [],

    // 설정
    config: [],
  };
};
