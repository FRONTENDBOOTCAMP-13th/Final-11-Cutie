import dayjs from 'dayjs';

function getTime(day = 0, second = 0) {
  return dayjs().add(day, 'days').add(second, 'seconds').format('YYYY.MM.DD HH:mm:ss');
}

export const initData = async (clientId, nextSeq) => {
  return {
    // 회원
    user: [
      {
        _id: await nextSeq('user'),
        email: 'admin@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '무지',
        phone: '01011112222',
        address: '서울시 강남구 역삼동 123',
        type: 'admin',
        loginType: 'email',
        image: `files/${clientId}/user-muzi.png`,
        createdAt: getTime(-100, -60 * 60 * 3),
        updatedAt: getTime(-100, -60 * 60 * 3),
        extra: {
          birthday: '03-23',
        },
      },
      {
        _id: await nextSeq('user'),
        email: 's1@market.com',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '네오',
        phone: '01022223333',
        address: '서울시 강남구 삼성동 456',
        type: 'seller',
        loginType: 'email',
        image: `files/${clientId}/user-neo.png`,
        createdAt: getTime(-50),
        updatedAt: getTime(-30, -60 * 60 * 3),
        extra: {
          birthday: '11-23',
        },
      },
    ],

    // 상품
    product: [
      {
        _id: await nextSeq('product'),
        seller: 2,
        title: '개구리 중사 케로로케로케로 티셔츠',
        description: '개구리 중사 케로로의 매력이 담긴 티셔츠입니다.',
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
        likeCount: 1, // 👍 현재 1명이 좋아요 누른 상태
        createdAt: getTime(-3),
        updatedAt: getTime(-3),
      },
    ],
    // 주문
    order: [],

    // 후기
    review: [],

    // 장바구니
    cart: [],

    // 즐겨찾기/북마크
    bookmark: [],

    // QnA, 공지사항 등의 게시판
    post: [
      {
        _id: await nextSeq('post'),
        type: 'community',
        views: 23,
        user: {
          _id: 2,
          name: '네오',
          image: `files/${clientId}/user-neo.png`,
        },
        title: '회원 가입했어요.',
        content: '잘 부탁드려요.',
        createdAt: getTime(-1, -60 * 60 * 14),
        updatedAt: getTime(-1, -60 * 60 * 2),
      },
    ],

    // 코드
    code: [],

    // 설정
    config: [],
  };
};
