import React from 'react';
import "../App.css"; 
const LifestyleEvent = () => {
  return (
    <div className="event_wrap">
      <div className="event_wrap_container">
        
        {/* 왼쪽: 고정 정보 영역 (sticky 적용) [cite: 2026-03-25] */}
        <div className="event_info">
          <div>
            <h2>
              Lifestyle <span>라이프스타일</span>
            </h2>
            <p className="pc">
              머무는 순간의 감동, 이제 일상에서도 느껴보세요. <br />
              호텔에서 당신의 일상으로, 일상에서 호텔로 이어지는<br />
              품격있는 라이프스타일을 경험해보세요.
            </p>
            <p className="mo">
              머무는 순간의 감동, 이제 일상에서도 느껴보세요. <br />
              품격있는 라이프스타일을 경험해보세요.
            </p>
            
            <div className="imgage pc">
              <img src="https://godomall-storage.cdn-nhncommerce.com/e9f3698822f4752682e9e476d8056c3d/board/event/goods/0/3d0152c69c8d53f3823" alt="Lifestyle PC" />
            </div>
            <div className="imgage mo">
              <img src="https://godomall-storage.cdn-nhncommerce.com/e9f3698822f4752682e9e476d8056c3d/board/event/goods/0/63a8274db3128bcc885" alt="Lifestyle MO" />
            </div>
          </div>
        </div>

        {/* 오른쪽: 스크롤되는 이벤트 리스트 [cite: 2026-03-25] */}
        <div className="event_scroll_cont">
          <div className="event_scroll_cont__inner">
            
            {/* 상품 1 */}
            <div className="event_box pc">
              <a href="#"><img src="https://eshop01.cdn-nhncommerce.com/data/skin/front/lottehotel/img/banner/bfed045f987b623cdcbfc0d077ebcdac_65420.png" alt="Trevi Club" /></a>
              <div>
                <h3>Trevi Club</h3>
                <p>삶의 여유와 가치를 추구하는 프리미엄 멤버십.<br />롯데호텔에서 최상의 서비스와 품격있는 시간을 누려보세요.</p>
                <a href="#" className="link_more">더보기</a>
              </div>
            </div>

            {/* 상품 2 */}
            <div className="event_box pc">
              <a href="#"><img src="https://eshop01.cdn-nhncommerce.com/data/skin/front/lottehotel/img/banner/7953ad99f709572d50143b1beec308bf_11271.png" alt="L.SOMM" /></a>
              <div>
                <h3>L.SOMM 와인 셀렉션</h3>
                <p>최고의 소믈리에가 엄선한 L.SOMM와인 셀렉션으로<br />특별한 미식 경험을 선사합니다.</p>
                <a href="#" className="link_more">상품보기</a>
              </div>
            </div>

            {/* 상품 3 */}
            <div className="event_box pc">
              <a href="#"><img src="https://eshop01.cdn-nhncommerce.com/data/skin/front/lottehotel/img/banner/0300a47a8da98c79fa935ca342a00936_56934.png" alt="Winter Bliss" /></a>
              <div>
                <h3>Winter Bliss 프로모션</h3>
                <p>고요한 겨울 밤, 포근한 여유<br />따뜻한 휴식이 있는 객실에서 특별한 순간을 경험하세요.</p>
                <a href="#" className="link_more">더보기</a>
              </div>
            </div>

            {/* 모바일 전용 박스 (CSS에서 mo 처리됨) [cite: 2026-03-25] */}
            <div className="event_box mo">
               {/* 여기에 모바일용 이미지를 넣으면 돼 */}
               <img src="https://eshop01.cdn-nhncommerce.com/data/skin/front/lottehotel/img/banner/e8ce29975207ca68b42c5b7e9bf77516_12137.png" alt="Mobile Event" />
               <div>
                  <h3 className="ko">Trevi Club</h3>
                  <p>프리미엄 멤버십 서비스를 경험해보세요.</p>
                  <a href="#" className="link_more">더보기</a>
               </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LifestyleEvent;