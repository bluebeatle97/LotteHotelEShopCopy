const productData = {
    
  food: [
    {
      id: 1,
      title: "김치",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/1000000171_detail_095.jpg`],
      content: "[셰프 셀렉션] 김치찌개 세가지",
      price: 48000
    },
    {
      id: 2,
      title: "김치",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/92510237_detail_124.jpg`, `${process.env.PUBLIC_URL}/img/product/92510237_detail_047.jpg`],
      content: "롯데호텔 맛김치 (80g*10팩)",
      price: 28000
    },
    {
      id: 3,
      title: "김치",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/1000000107_detail_066.png`],
      content: "롯데호텔 볶음김치 (80g*10팩)",
      price: 28000
    },
    {
      id: 4,
      title: "김치",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9240402_detail_049.jpg`, `${process.env.PUBLIC_URL}/img/product/9240402_detail_173.jpg`],
      content: "롯데호텔 백김치 4kg",
      price: 45000
    },
    {
      id: 5,
      title: "김치",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/1000000171_detail_095.jpg`],
      content: "롯데호텔 배추김치 8kg",
      price: 82000
    },
    {
      id: 6,
      title: "김치",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/1000000171_detail_095.jpg`],
      content: "롯데호텔 나박김치 4kg",
      price: 45000
    },
    {
      id: 7,
      title: "김치",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/1000000171_detail_095.jpg`],
      content: "롯데호텔 석박지 4kg",
      price: 45000
    },
    {
      id: 8,
      title: "김치",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/1000000171_detail_095.jpg`],
      content: "롯데호텔 동치미 4kg",
      price: 45000
    },
    {
      id: 9,
      title: "김치",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/1000000171_detail_095.jpg`],
      content: "롯데호텔 총각김치 3kg",
      price: 45000
    },
    {
      id: 10,
      title: "김치",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/1000000171_detail_095.jpg`],
      content: "롯데호텔 갓김치 4kg",
      price: 88000
    },
    {
      id: 11,
      title: "김치",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/1000000171_detail_095.jpg`],
      content: "롯데호텔 배추김치 1.2kg",
      price: 25000
    },
    {
      id: 12,
      title: "김치",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/1000000171_detail_095.jpg`],
      content: "롯데호텔 총각김치 1kg",
      price: 25000
    },
    {
      id: 13,
      title: "김치",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/92510237_detail_124.jpg`, `${process.env.PUBLIC_URL}/img/product/92510237_detail_047.jpg`],
      content: "롯데호텔 파김치 1kg",
      price: 38000
    },
    {
      id: 14,
      title: "김치",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/92510237_detail_124.jpg`, `${process.env.PUBLIC_URL}/img/product/92510237_detail_047.jpg`],
      content: "롯데호텔 맛김치 850g",
      price: 19000
    },
    {
      id: 15,
      title: "김치",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/92510237_detail_124.jpg`, `${process.env.PUBLIC_URL}/img/product/92510237_detail_047.jpg`],
      content: "롯데호텔 백김치 800g",
      price: 21000
    },
    {
      id: 16,
      title: "베이커리",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9241132_detail_083.jpg`, `${process.env.PUBLIC_URL}/img/product/9241132_Detail1.jpg`, `${process.env.PUBLIC_URL}/img/product/9241132_detail_371.jpg`, `${process.env.PUBLIC_URL}/img/product/9241132_detail_275.jpg`],
      content: "롯데호텔 뉴욕 치즈케이크",
      price: 43000
    },
    {
      id: 17,
      title: "베이커리",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9241133_main_034.jpg`, `${process.env.PUBLIC_URL}/img/product/9241133_add2_01.jpg`],
      content: "롯데호텔 바스크 치즈케이크",
      price: 45000
    },
    {
      id: 18,
      title: "정육",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/6251016_main_04.jpg`, `${process.env.PUBLIC_URL}/img/product/6251016_add2_018.jpg`],
      content: "롯데호텔 프라임 LA 갈비 2kg",
      price: 174000
    },
    {
      id: 19,
      title: "정육",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/6251016_main_04.jpg`, `${process.env.PUBLIC_URL}/img/product/6251016_add2_018.jpg`],
      content: "롯데호텔 초이스 LA 갈비 2kg",
      price: 154000
    },
    {
      id: 20,
      title: "김치",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/92510237_detail_124.jpg`, `${process.env.PUBLIC_URL}/img/product/92510237_detail_047.jpg`],
      content: "롯데호텔 김치찌개 4개입",
      price: 48000
    },
    {
      id: 21,
      title: "김치",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/92510237_detail_124.jpg`, `${process.env.PUBLIC_URL}/img/product/92510237_detail_047.jpg`],
      content: "롯데호텔 섞박지 650g",
      price: 19000
    }
  ],
  living: [
    {
      id: 22,
      title: "침구",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9240307_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9240307_Detail1.jpg`],
      content: "하온 클래식 침구세트",
      price: 3000000
    },
    {
      id: 23,
      title: "침구",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9240307_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9240307_Detail1.jpg`],
      content: "하온 클래식 거위털 이불",
      price: 1400000
    },
    {
      id: 24,
      title: "침구",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9240307_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9240307_Detail1.jpg`],
      content: "하온 클래식 이불 커버 S, Q, K",
      price: 220000
    },
    {
      id: 25,
      title: "침구",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9240307_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9240307_Detail1.jpg`],
      content: "하온 클래식 매트 패드",
      price: 1100000
    },
    {
      id: 26,
      title: "침구",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9240307_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9240307_Detail1.jpg`],
      content: "하온 클래식 매트 패드 (단품)",
      price: 100000
    },
    {
      id: 27,
      title: "침구",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9240307_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9240307_Detail1.jpg`],
      content: "하온 클래식 매트 시트",
      price: 165000
    },
    {
      id: 28,
      title: "침구",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9240307_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9240307_Detail1.jpg`],
      content: "하온 클래식 거위털 베개 | 50x70",
      price: 450000
    },
    {
      id: 29,
      title: "침구",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9240307_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9240307_Detail1.jpg`],
      content: "하온 클래식 베개 커버 | 50x70",
      price: 40000
    },
    {
      id: 30,
      title: "생활용품",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9230625_Detail1.jpg`],
      content: "하온 클래식 배스 로브",
      price: 150000
    },
    {
      id: 31,
      title: "생활용품",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9230634_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9230634_Detail1.jpg`],
      content: "하온 클래식 배스 타월 세트 | 2개입",
      price: 65000
    },
    {
      id: 32,
      title: "생활용품",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9230634_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9230634_Detail1.jpg`],
      content: "하온 클래식 페이스 타월 세트 | 5개입",
      price: 60000
    },
    {
      id: 33,
      title: "침구",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9240307_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9240307_Detail1.jpg`],
      content: "프레미엄 시그니처 거위털 이불 | 커버 별도",
      price: 1350000
    },
    {
      id: 34,
      title: "침구",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9240307_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9240307_Detail1.jpg`],
      content: "프레미엄 시그니처 거위털 이불 커버",
      price: 720000
    },
    {
      id: 35,
      title: "침구",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9240307_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9240307_Detail1.jpg`],
      content: "프레미엄 시그니처 매트 시트",
      price: 340000
    },
    {
      id: 36,
      title: "침구",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9240307_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9240307_Detail1.jpg`],
      content: "프레미엄 시그니처 거위털 베개 | 커버 별도",
      price: 630000
    },
    {
      id: 37,
      title: "침구",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9240307_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9240307_Detail1.jpg`],
      content: "프레미엄 시그니처 베개 커버 | 2개입",
      price: 230000
    },
    {
      id: 38,
      title: "생활용품",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9230634_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9230634_Detail1.jpg`],
      content: "프레미엄 시그니처 배스 로브(L)",
      price: 340000
    },
    {
      id: 39,
      title: "생활용품",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9230634_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9230634_Detail1.jpg`],
      content: "프레미엄 시그니처 라이트 로브(L)",
      price: 240000
    },
    {
      id: 40,
      title: "생활용품",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9230634_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9230634_Detail1.jpg`],
      content: "프레미엄 시그니처 슬리퍼 | 315mm",
      price: 10000
    },
    {
      id: 41,
      title: "뷰티",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9250803_Detail0.jpg`,`${process.env.PUBLIC_URL}/img/product/9250803_Detail1.jpg`],
      content: "인리칭 퍼퓸드 바디워시& 바디로션",
      price: 72000
    },
    {
      id: 42,
      title: "뷰티",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9250805_Detail1.jpg`,`${process.env.PUBLIC_URL}/img/product/9250805_detail_231.jpg`],
      content: "인리칭 크림 트리트먼트 355ml",
      price: 35000
    },
    {
      id: 43,
      title: "뷰티",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9250805_Detail1.jpg`,`${process.env.PUBLIC_URL}/img/product/9250805_detail_231.jpg`],
      content: "인리칭 퍼퓸드 바디로션 355ml",
      price: 37000
    },
    {
      id: 44,
      title: "뷰티",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9250805_Detail1.jpg`,`${process.env.PUBLIC_URL}/img/product/9250805_detail_231.jpg`],
      content: "인리칭 퍼퓸드 바디워시 355ml",
      price: 35000
    },
    {
      id: 45,
      title: "뷰티",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9250805_Detail1.jpg`,`${process.env.PUBLIC_URL}/img/product/9250805_detail_231.jpg`],
      content: "인리칭 퍼퓸드 핸드워시 355ml",
      price: 33000
    },
    {
      id: 46,
      title: "뷰티",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9250805_Detail1.jpg`,`${process.env.PUBLIC_URL}/img/product/9250805_detail_231.jpg`],
      content: "인리칭 어메니티 키트",
      price: 39000
    },
    {
      id: 47,
      title: "뷰티",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9250805_Detail1.jpg`,`${process.env.PUBLIC_URL}/img/product/9250805_detail_231.jpg`],
      content: "리커버리 73 인리칭 5종 세트",
      price: 175000
    },
    {
      id: 48,
      title: "뷰티",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9250805_Detail1.jpg`,`${process.env.PUBLIC_URL}/img/product/9250805_detail_231.jpg`],
      content: "인리칭 퍼퓸드 바디워시 & 바디로션",
      price: 72000
    },
    {
      id: 49,
      title: "뷰티",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9250805_Detail1.jpg`,`${process.env.PUBLIC_URL}/img/product/9250805_detail_231.jpg`],
      content: "인리칭 크림 샴푸 & 트리트먼트",
      price: 70000
    },
    {
      id: 50,
      title: "뷰티",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9250805_Detail1.jpg`,`${process.env.PUBLIC_URL}/img/product/9250805_detail_231.jpg`],
      content: "리바이탈라이징 샴푸 355ml",
      price: 28000
    }
  ],
  alcohol: [
    {
      id: 58,
      title: "위스키",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9254216_detail_083.jpg`],
      content: "Glenmorangie The Nectar 16Y",
      price: 175000
    },
    {
      id: 59,
      title: "위스키",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9254215_detail_048.jpg`],
      content: "Glenmorangie The Lasanta 12Y",
      price: 130000
    },
    {
      id: 60,
      title: "위스키",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9254214_detail_061.jpg`],
      content: "Glenmorangie The Infinita 18Y",
      price: 290000
    },
    {
      id: 61,
      title: "위스키",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9254213_Detail0.jpg`],
      content: "Johnnie Walker 52Y",
      price: 45000000
    },
    {
      id: 62,
      title: "위스키",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9254212_detail_029.jpg`],
      content: "The Balvenie 14Y Caribbean Cask",
      price: 200000
    },
    {
      id: 63,
      title: "위스키",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9254212_detail_029.jpg`],
      content: "The Balvenie 12Y",
      price: 130000
    },
    {
      id: 64,
      title: "와인",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9253115_detail_07.jpg`,`${process.env.PUBLIC_URL}/img/product/9253115_detail_117.jpg`],
      content: "Far Niente Post & Beam, Chardonnay",
      price: 92000
    },
    {
      id: 65,
      title: "와인",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9253115_detail_07.jpg`,`${process.env.PUBLIC_URL}/img/product/9253115_detail_117.jpg`],
      content: "Duval-Leroy, Blanc de Blancs Brut NV",
      price: 110000
    },
    {
      id: 66,
      title: "와인",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9253115_detail_07.jpg`,`${process.env.PUBLIC_URL}/img/product/9253115_detail_117.jpg`],
      content: "Mollydooker, Blue Eyed Boy Shiraz",
      price: 85000
    },
    {
      id: 67,
      title: "와인",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9253115_detail_07.jpg`,`${process.env.PUBLIC_URL}/img/product/9253115_detail_117.jpg`],
      content: "Duckhorn, Paraduxx",
      price: 100000
    },
    {
      id: 68,
      title: "와인",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9253115_detail_07.jpg`,`${process.env.PUBLIC_URL}/img/product/9253115_detail_117.jpg`],
      content: "Gaja, Ca'Marcanda Promis",
      price: 100000
    },
    {
      id: 69,
      title: "와인",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9253115_detail_07.jpg`,`${process.env.PUBLIC_URL}/img/product/9253115_detail_117.jpg`],
      content: "Clos Quebrada de Macul Domus Aurea, Cabernet Sauvignon",
      price: 140000
    },
    {
      id: 70,
      title: "와인",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9253115_detail_07.jpg`,`${process.env.PUBLIC_URL}/img/product/9253115_detail_117.jpg`],
      content: "Clos Quebrada de Macul Stella Aurea, Cabernet Sauvignon",
      price: 85000
    },
    {
      id: 71,
      title: "와인",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9253115_detail_07.jpg`,`${process.env.PUBLIC_URL}/img/product/9253115_detail_117.jpg`],
      content: "Napa Highlands, Cabernet Sauvignon",
      price: 75000
    },
    {
      id: 72,
      title: "와인",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9253115_detail_07.jpg`,`${process.env.PUBLIC_URL}/img/product/9253115_detail_117.jpg`],
      content: "Favia, Carbone Cabernet Sauvignon",
      price: 125000
    },
    {
      id: 73,
      title: "와인",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9253115_detail_07.jpg`,`${process.env.PUBLIC_URL}/img/product/9253115_detail_117.jpg`],
      content: "Ayala, Brut Majeur",
      price: 95000
    },
    {
      id: 74,
      title: "와인",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9253115_detail_07.jpg`,`${process.env.PUBLIC_URL}/img/product/9253115_detail_117.jpg`],
      content: "Pierre Vessigaud Macon Fuisse 'Les Taches'",
      price: 65000
    },
    {
      id: 75,
      title: "와인",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9253115_detail_07.jpg`,`${process.env.PUBLIC_URL}/img/product/9253115_detail_117.jpg`],
      content: "Famille Hugel, Riesling Grossi Laue",
      price: 150000
    },
    {
      id: 76,
      title: "와인",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9253115_detail_07.jpg`,`${process.env.PUBLIC_URL}/img/product/9253115_detail_117.jpg`],
      content: "Famille Perrin Chateauneuf-du-Pape",
      price: 135000
    },
    {
      id: 77,
      title: "와인",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9253115_detail_07.jpg`,`${process.env.PUBLIC_URL}/img/product/9253115_detail_117.jpg`],
      content: "Domaine Cordier Pouilly-Fuisse",
      price: 105000
    }
  ],
  hotel: [
    {
      id: 78,
      title: "레스토랑 바우처",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/1000000135_detail_094.png`],
      content: "HELLO KITTY Strawberry WORLD : Afternoon Tea Set",
      price: 115000
    },
    {
      id: 79,
      title: "레스토랑 바우처",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/1000000132_detail_045.png`],
      content: "HELLO KITTY Strawberry WORLD : BUFFET",
      price: 120000
    },
    {
      id: 80,
      title: "레스토랑 바우처",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9211031_detail_061.jpg`],
      content: "모모야마 비즈니스 스시 오마카세 디너 1인",
      price: 285000
    },
    {
      id: 81,
      title: "레스토랑 바우처",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9211031_detail_061.jpg`],
      content: "모모야마 비즈니스 스시 오마카세 런치 1인",
      price: 195000
    },
    {
      id: 82,
      title: "레스토랑 바우처",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/1000000159_detail_037.jpg`],
      content: "모모야마 스시 오마카세 런치 1인 [주말 및 공휴일 점심]",
      price: 230000
    },
    {
      id: 83,
      title: "레스토랑 바우처",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/1000000159_detail_037.jpg`],
      content: "모모야마 키즈나 코스 1인 [주말 및 공휴일 점심/저녁]",
      price: 230000
    },
    {
      id: 84,
      title: "레스토랑 바우처",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/1000000156_detail_062.jpg`],
      content: "모모야마 미오 코스 1인 [주중 점심/저녁]",
      price: 260000
    },
    {
      id: 85,
      title: "레스토랑 바우처",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/1000000156_detail_062.jpg`],
      content: "모모야마 미오 코스 1인 [주말 및 공휴일 점심/저녁]",
      price: 260000
    },
    {
      id: 86,
      title: "픽업상품",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9212007_Detail0.jpg`, `${process.env.PUBLIC_URL}/img/product/9212007_Detail1.jpg`],
      content: "델리카한스 텀블러",
      price: 45000
    },
    {
      id: 87,
      title: "픽업상품",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9220035_detail_042.jpg`],
      content: "패스트리 살롱 오페라 케이크",
      price: 85000
    },
    {
      id: 88,
      title: "픽업상품",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9220043_detail_075.jpg`, `${process.env.PUBLIC_URL}/img/product/9220043_detail_274.jpg`],
      content: "패스트리 살롱 녹차 파운드 케이크",
      price: 56000
    },
    {
      id: 89,
      title: "픽업상품",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9220041_detail_029.jpg`],
      content: "패스트리 살롱 잔두야 파운드 케이크",
      price: 53000
    },
    {
      id: 90,
      title: "픽업상품",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9220043_detail_075.jpg`, `${process.env.PUBLIC_URL}/img/product/9220043_detail_274.jpg`],
      content: "패스트리 살롱 시그니엘 드립백 커피",
      price: 10000
    },
    {
      id: 91,
      title: "픽업상품",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9220043_detail_075.jpg`, `${process.env.PUBLIC_URL}/img/product/9220043_detail_274.jpg`],
      content: "패스트리 살롱 프리미엄 딸기 케이크",
      price: 125000
    },
    {
      id: 92,
      title: "픽업상품",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9220043_detail_075.jpg`, `${process.env.PUBLIC_URL}/img/product/9220043_detail_274.jpg`],
      content: "델리카한스 블루베리 치즈 케이크",
      price: 75000
    },
    {
      id: 93,
      title: "픽업상품",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9220043_detail_075.jpg`, `${process.env.PUBLIC_URL}/img/product/9220043_detail_274.jpg`],
      content: "델리카한스 바나나 호두 파운드",
      price: 43000
    },
    {
      id: 94,
      title: "픽업상품",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9220043_detail_075.jpg`, `${process.env.PUBLIC_URL}/img/product/9220043_detail_274.jpg`],
      content: "델리카한스 밤 파운드",
      price: 48000
    },
    {
      id: 95,
      title: "픽업상품",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9220043_detail_075.jpg`, `${process.env.PUBLIC_URL}/img/product/9220043_detail_274.jpg`],
      content: "패스트리 살롱 피스타치오 초콜릿 무스",
      price: 84000
    },
    {
      id: 96,
      title: "픽업상품",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9220043_detail_075.jpg`, `${process.env.PUBLIC_URL}/img/product/9220043_detail_274.jpg`],
      content: "패스트리 살롱 블루 아주아(L)",
      price: 72000
    },
    {
      id: 97,
      title: "픽업상품",
      imgUrl: [`${process.env.PUBLIC_URL}/img/product/9220043_detail_075.jpg`, `${process.env.PUBLIC_URL}/img/product/9220043_detail_274.jpg`],
      content: "델리카한스 클럽 샌드위치 박스",
      price: 55000
    }
  ]
  
};

export default productData;