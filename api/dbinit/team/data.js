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
        email: 'aa@aa.aa',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '테스트',
        phone: '01000000000',
        type: 'admin',
        loginType: 'email',
        image: `files/${clientId}/user_admin.webp`,
        createdAt: '2025-07-23T12:00:00Z',
        updatedAt: '2025-07-23T12:00:00Z',
      },

      // 일반 회원
      {
        _id: await nextSeq('user'),
        email: 'tamama@cutie.kr',
        password: '$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2',
        name: '타마마',
        phone: '01033334444',
        address: '서울시 중구 필동로 1길 30',
        type: 'user',
        loginType: 'email',
        image: `files/${clientId}/user_tamama.webp`,
        createdAt: getTime(-10),
        updatedAt: getTime(-10),
        extra: {
          birthday: '01-03',
        },
      },

      // 일반 회원
      {
        _id: 4,
        type: 'user',
        name: '고양이',
        email: 'cat@meow.com',
        password: '$2b$10$/dX/rTTaPE1gQB27os.CVOOPkZsBzc.ONiCeLqUYBTpcx.1Bvdgby',
        image: '../../assets/icons/profile.svg',
        loginType: 'email',
        createdAt: '2025.07.26 19:02:05',
        updatedAt: '2025.07.26 19:02:05',
        refreshToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NTM2ODI0NzQsImV4cCI6MTc1NjI3NDQ3NCwiaXNzIjoiRkVCQyJ9.v0eP6T_w-1qWjDH4IJYmc_BmjCd46LofaPT8mdZdhJU',
      },

      // 일반 회원
      {
        _id: 5,
        email: 'api@market.com',
        password: '$2b$10$4thKGj8xQuhbOLa3HIImV.tU9q/5b73owQ65vrsFDPpiUb6/h5Gb6',
        name: 'GD',
        phone: '0118889999',
        type: 'user',
        extra: {
          birthday: '10-23',
        },
        loginType: 'email',
        createdAt: '2025.07.26 19:07:20',
        updatedAt: '2025.07.26 19:07:20',
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
        image: `files/${clientId}/user_keroro.webp`,
        createdAt: getTime(-20),
        updatedAt: getTime(-20),
      },

      // 판매 고양이
      {
        _id: 6,
        email: 'sellercat@meow.com',
        password: '$2b$10$A5H8Z4pK8dhW3g9TCPRYu.RdMpAvFBpuKztbQFz/gQdd8XVovrKDi',
        name: '판매고양이',
        type: 'seller',
        image: '../../assets/icons/profile.svg',
        loginType: 'email',
        createdAt: '2025.07.26 20:26:32',
        updatedAt: '2025.07.26 20:26:32',
        refreshToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NTM2MjQwOTcsImV4cCI6MTc1NjIxNjA5NywiaXNzIjoiRkVCQyJ9.gs362jZuS9tKF3HQFy6uh_1WbyEzXjTy5STDsDLdD9M',
      },
    ],

    // 상품
    product: [
      // 케로케로케로 티셔츠
      {
        _id: await nextSeq('product'),
        seller_id: 3,
        name: '개구리 중사 케로로케로케로 티셔츠',
        price: 500000,
        shippingFees: 0,
        show: true,
        active: true,
        quantity: 999,
        buyQuantity: 888,
        mainImages: [
          {
            path: 'files/febc13-final11-emjf/pro_01.webp',
            name: 'pro_01.webp',
            originalname: '케로케로케로 티셔츠.webp',
          },
        ],
        content:
          '<h2>화제의 케로로 티셔츠 드디어 오픈!</h2><br><p>개구리 중사 케로케로케로케로 힘차게 케로케로케로 티셔츠</p>',
        createdAt: '2025.07.25 21:07:18',
        updatedAt: '2025.07.25 21:07:18',
        extra: {
          goalAmount: 5555,
          goalPercent: 5394,
          funding: {
            startDate: new Date('2025-07-08T00:00:00.000Z'),
            endDate: new Date('2025-08-08T00:00:00.000Z'),
            deliveryDate: new Date('2025-08-08T00:00:00.000Z'),
          },
          category: 'clothes',
          status: 'funding',
          likeCount: 345,
        },
        seller: {
          _id: 3,
          email: 'cutie_11@gmail.com',
          name: '(주)1더하기1은귀요미',
          phone: '01055556666',
          address: '서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층',
          image: 'files/febc13-final11-emjf/user_keroro.webp',
        },
      },

      // 타마타마타마 바지
      {
        _id: await nextSeq('product'),
        seller_id: 3,
        name: '개구리 중사 타마타마타마 귀엽게 타마타마타마타마 팬츠',
        price: 500000,
        shippingFees: 0,
        show: true,
        active: true,
        quantity: 999,
        buyQuantity: 888,
        mainImages: [
          {
            path: 'files/febc13-final11-emjf/pro_02.webp',
            name: 'pro_02.webp',
            originalname: '타마타마타마 팬츠.webp',
          },
        ],
        content:
          '<h2>귀여운 타마마 팬츠 드디어 오픈!</h2><br><p>개구리 중사 타마타마타마타마 귀엽게 타마타마타마 팬츠</p>',
        createdAt: '2025.07.25 21:07:18',
        updatedAt: '2025.07.25 21:07:18',
        extra: {
          goalAmount: 5555,
          goalPercent: 5394,
          funding: {
            startDate: new Date('2025-07-08T00:00:00.000Z'),
            endDate: new Date('2025-08-08T00:00:00.000Z'),
            deliveryDate: new Date('2025-08-08T00:00:00.000Z'),
          },
          category: 'clothes',
          status: 'funding',
          likeCount: 55,
        },
        seller: {
          _id: 3,
          email: 'cutie_11@gmail.com',
          name: '(주)1더하기1은귀요미',
          phone: '01055556666',
          address: '서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층',
          image: 'files/febc13-final11-emjf/user_keroro.webp',
        },
      },

      // 케로로 땅콩샌드
      {
        _id: await nextSeq('product'),
        seller_id: 3,
        name: '개구리 중사 케로로의 미니땅콩샌드',
        price: 1500,
        shippingFees: 2000,
        show: true,
        active: true,
        quantity: 999,
        buyQuantity: 888,
        mainImages: [
          {
            path: 'files/febc13-final11-emjf/pro_03.webp',
            name: 'pro_03.webp',
            originalname: '케로로의 미니땅콩샌드.webp',
          },
        ],
        content: '<h2>달콤고소 돌아온 케로로빵</h2><br><p>고소고소고소한 케로로 미니땅콩샌드</p>',
        createdAt: '2025.07.08 10:54:54',
        updatedAt: '2025.07.08 10:54:54',
        extra: {
          goalAmount: 200,
          goalPercent: 500,
          funding: {
            startDate: new Date('2025-07-08T00:00:00.000Z'),
            endDate: new Date('2025-08-02T00:00:00.000Z'),
            deliveryDate: new Date('2025-08-08T00:00:00.000Z'),
          },
          category: 'food',
          status: 'funding',
          likeCount: 100,
        },
        seller: {
          _id: 3,
          email: 'cutie_11@gmail.com',
          name: '(주)1더하기1은귀요미',
          phone: '01055556666',
          address: '서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층',
          image: 'files/febc13-final11-emjf/user_keroro.webp',
        },
      },

      // 케로로 머그컵
      {
        _id: await nextSeq('product'),
        seller_id: 3,
        name: '개구리 중사 케로로 머그컵',
        price: 400000,
        shippingFees: 0,
        show: true,
        active: true,
        quantity: 999,
        buyQuantity: 888,
        mainImages: [
          {
            path: 'files/febc13-final11-emjf/pro_04.webp',
            name: 'pro_04.webp',
            originalname: '케로로 머그컵.webp',
          },
        ],
        content: '<h2>유니크한 케로로 머그컵</h2><br><p>케로케로케로 유용한 머그컵</p>',
        createdAt: '2025.07.08 10:54:54',
        updatedAt: '2025.07.08 10:54:54',
        extra: {
          goalAmount: 3333,
          goalPercent: 3000,
          funding: {
            startDate: new Date('2025-07-08T00:00:00.000Z'),
            endDate: new Date('2025-11-08T00:00:00.000Z'),
            deliveryDate: new Date('2025-11-08T00:00:00.000Z'),
          },
          category: 'living',
          status: 'funding',
          likeCount: 400,
        },
        seller: {
          _id: 3,
          email: 'cutie_11@gmail.com',
          name: '(주)1더하기1은귀요미',
          phone: '01055556666',
          address: '서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층',
          image: 'files/febc13-final11-emjf/user_keroro.webp',
        },
      },

      // 케로로 메세지 카드
      {
        _id: await nextSeq('product'),
        seller_id: 3,
        name: '개구리 중사 케로로 메세지 카드',
        price: 2000,
        shippingFees: 3000,
        show: true,
        active: true,
        quantity: 999,
        buyQuantity: 888,
        mainImages: [
          {
            path: 'files/febc13-final11-emjf/pro_05.webp',
            name: 'pro_05.webp',
            originalname: '케로로 메세지 카드.webp',
          },
        ],
        content: '<h2>메세지는 케로로 소대가 책임지겠다!</h2><br><p>봉투에 넣으면 더욱 귀여워요</p>',
        createdAt: '2025.05.08 10:54:54',
        updatedAt: '2025.05.08 10:54:54',
        extra: {
          goalAmount: 1000,
          goalPercent: 999,
          funding: {
            startDate: new Date('2024-05-08T00:00:00.000Z'),
            endDate: new Date('2024-07-08T00:00:00.000Z'),
            deliveryDate: new Date('2024-07-08T00:00:00.000Z'),
          },
          category: 'stationery',
          status: 'success',
          likeCount: 200,
        },
        seller: {
          _id: 3,
          email: 'cutie_11@gmail.com',
          name: '(주)1더하기1은귀요미',
          phone: '01055556666',
          address: '서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층',
          image: 'files/febc13-final11-emjf/user_keroro.webp',
        },
      },

      // 케로로 MP3 플레이어
      {
        _id: await nextSeq('product'),
        seller_id: 3,
        name: '개구리 중사 케로로 MP3 플레이어',
        price: 300000,
        shippingFees: 0,
        show: true,
        active: true,
        quantity: 5,
        buyQuantity: 0,
        mainImages: [
          {
            path: 'files/febc13-final11-emjf/pro_06.webp',
            name: 'pro_06.webp',
            originalname: '케로로 MP3 플레이어.webp',
          },
        ],
        content: '<h2>한정판매! 케로로 MP3 플레이어!</h2><br><p>한정 수량! 지금이 아니면 못삽니다</p>',
        createdAt: '2025.08.08 10:54:54',
        updatedAt: '2025.10.12 10:54:54',
        extra: {
          goalAmount: 100,
          goalPercent: 0,
          funding: {
            startDate: new Date('2025-08-08T00:00:00.000Z'),
            endDate: new Date('2025-10-12T00:00:00.000Z'),
            deliveryDate: new Date('2025-10-12T00:00:00.000Z'),
          },
          category: 'technology',
          status: 'upcomming',
          likeCount: 700,
        },
        seller: {
          _id: 3,
          email: 'cutie_11@gmail.com',
          name: '(주)1더하기1은귀요미',
          phone: '01055556666',
          address: '서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층',
          image: 'files/febc13-final11-emjf/user_keroro.webp',
        },
      },
    ],

    // 주문
    order: [
      {
        _id: await nextSeq('order'),
        user_id: 2,
        state: 'OS020',
        products: [
          {
            _id: 2,
            state: 'OS020',
            name: '개구리 중사 케로케로케로 힘차게 케로케로케로 티셔츠',
            image: {
              path: `files/${clientId}/pro-01-thumbnail.jpg`,
              name: 'pro-01-thumbnail.jpg',
              originalname: '케로케로케로 티셔츠.jpg',
            },
            quantity: 1,
            price: 500000,
            review_id: 0,
          },
        ],
        cost: {
          products: 500000,
          shippingFees: 0,
          discount: {
            products: 0,
            shippingFees: 0,
          },
          total: 500000,
        },
        address: {
          name: '회사',
          value: '서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층',
        },
        createdAt: getTime(-1),
        updatedAt: getTime(-1),
      },
    ],

    // 후기
    review: [
      {
        _id: await nextSeq('review'),
        user_id: 4,
        user: {
          _id: 4,
          name: '도로로',
          image: 'user-dororo.webp',
        },
        order_id: 1,
        product_id: 1,
        rating: 3.0,
        createdAt: '2024.05.05 14:00:00',
        content: '사진이랑 달라요. 아쉽습니다.',
        extra: {
          title: '색깔이 생각보다 어둡네요',
          images: [],
        },
      },
      {
        _id: await nextSeq('review'),
        user_id: 4,
        user: {
          _id: 3,
          name: '쿠루루',
          image: 'user-kururu.webp',
        },
        order_id: 1,
        product_id: 1,
        rating: 5.0,
        createdAt: '2024.01..18 10:30:00',
        content: '기대 이상으로 따뜻하고 좋네요.',
        extra: {
          title: '완전 따뜻해요!',
          images: [],
        },
      },
      {
        _id: await nextSeq('review'),
        user_id: 6,
        user: {
          _id: 5,
          name: '기로로',
          image: 'user-kiroro.webp',
        },
        order_id: 1,
        product_id: 1,
        rating: 5.0,
        createdAt: '2023.01.13 09:15:00',
        content: '상품이 좋아요',
        extra: {
          title: '대만족 합니다.',
          images: [`files/${clientId}/reviewProucut.jpg`],
        },
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
        userId: 2,
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
