import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import detailData from '../db/productDetailData';
import ProductDescription from '../components/ProductDescription'; 
import ProductReviews from '../components/ProductReviews';
import Qna from '../components/ProductQna';
import productData from '../db/productData'; 
import '../App.css'; 
import { useDispatch } from 'react-redux'; // 리덕스 전송 도구 [cite: 2026-03-25]
import { addItem } from '../store/cartSlice';

const ProductDetail = () => {
const { category, id } = useParams();
const dispatch = useDispatch();


  const [activeIndex, setActiveIndex] = useState(0); 
  const [count, setCount] = useState(1);
  const [activeTab, setActiveTab] = useState('detail');

  // 1. 모든 상품 데이터에서 현재 ID와 일치하는 상품을 직접 찾음
  // 이렇게 하면 URL의 category 이름(food, living 등)이 데이터 키와 달라도 ID로 정확히 찾아감
  const allProducts = Object.values(productData).flat(); 
  const item = allProducts.find(p => p.id === Number(id));

  // 2. 상품을 찾았다면, 그 상품의 title('김치', '베이커리', '생활용품' 등)로 상세 데이터를 가져옴
  // 별도의 categoryMap이나 복잡한 비교 로직이 필요 없음
  const categoryName = item ? item.title : "";
  const currentDetail = item && detailData[item.title] 
    ? detailData[item.title] 
    : { detail: "", reviews: [] };
  // 데이터 로딩 체크
  if (!item) return <div className="no_data">상품 정보를 찾을 수 없습니다.</div>;
  // 3. 가격 계산
  const totalPrice = item.price * count;
  const rewardsPrice = Math.floor(item.price * 0.95);
  console.log(`${categoryName} 상세 데이터 로드 성공:`, currentDetail);
  const handleCart = () => {
    dispatch(addItem({
      id: item.id,
      title: item.title,
      content: item.content,
      price: item.price,
      img: item.imgUrl[0],
      count: Number(count)
    }));
    alert('장바구니에 담겼습니다.');
}
  return (
    <div id="contents">
      <div className="detail_wrapper">
        <div className="location_wrap" style={{padding: '20px 0 50px 0', fontSize: '13px', color: '#888'}}>
            홈 {'>'} {category.toUpperCase()} {'>'} {item.title} {'>'} <strong>{item.content}</strong>
          </div>
        <div className="item_photo_info_sec">
          

          <div className="item_photo_view">
            {/* 좌측 썸네일 영역 */}
            <div className="item_photo_slide">
              <ul className="slider_goods_nav">
                {item.imgUrl.map((url, idx) => (
                  <li 
                    key={idx} 
                    className={activeIndex === idx ? "slick-current" : ""}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <a href="#!" onClick={(e) => e.preventDefault()}>
                      <img src={url} alt={`thumb${idx}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 중앙 메인 슬라이드 이미지 영역 */}
            <div className="item_photo_big">
              <div 
                className="big_wrap_slider" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {item.imgUrl.map((url, idx) => (
                  <div key={idx} className="slide_item">
                    <img src={url} alt={item.content} />
                  </div>
                ))}
              </div>
            </div>

            {/* 우측 정보 섹션 */}
            <div className="item_info_box">
              <div className="item_tit_detail_cont">
                <div className="item_detail_tit">
                  <p className="item_brand">{item.title}</p>
                  <div className="tit_box">
                    <h1>{item.content}</h1>
                    <div className="btn-box">
                      <button className="btn_add_wish"><img src="/img/ico_wish.png" alt="찜" /></button>
                      <button className="btn_gray_mid"><img src="/img/ico-view-share.png" alt="공유" /></button>
                    </div>
                  </div>
                </div>
                <div className="top_detail_price">
                  <div className="top_detail_price__inner">
                    <span className="price"><strong>{item.price.toLocaleString()}</strong>원</span>
                  </div>
                  <div className="member_price">
                    <span>리워즈 회원가 <strong>{rewardsPrice.toLocaleString()}</strong>원</span>
                  </div>
                </div>
              </div>

              <div className="item_detail_list">
                <dl><dt>배송비</dt><dd>무료</dd></dl>
                <dl><dt>배송방법</dt><dd>택배배송</dd></dl>
              </div>

              <div className="item_choice_list">
                <div className="count_box">
                  <div className="count">
                    <button onClick={() => count > 1 && setCount(count - 1)}>-</button>
                    <input type="text" value={count} readOnly className="text" />
                    <button onClick={() => setCount(count + 1)}>+</button>
                  </div>
                  <div className="item_choice_price">
                    <strong>{totalPrice.toLocaleString()}</strong>원
                  </div>
                </div>
              </div>

              <div className="item_tatal_box">
                <dl className="total_amount">
                  <dt>총 상품금액</dt>
                  <dd><strong>{totalPrice.toLocaleString()}</strong>원</dd>
                </dl>
              </div>

              <div className="btn_choice_box">
                <button className="btn_add_gift_order">선물하기</button>
                <button 
      className="btn_add_cart" onClick={handleCart}>
      <span>장바구니</span>
</button>
                <button className="btn_add_order">바로 구매</button>
              </div>
            </div>
          </div>
        </div>


        <div className="item_goods_Box">
      <div className="item_goods_tab">
  <ul>
    <li className={activeTab === 'detail' ? 'on' : ''}>
      <button onClick={() => setActiveTab('detail')}><h2>상품 설명</h2></button>
    </li>
    <li className={activeTab === 'exchange' ? 'on' : ''}>
      <button onClick={() => setActiveTab('exchange')}><h2>배송/반품/환불</h2></button>
    </li>
    <li className={activeTab === 'reviews' ? 'on' : ''}>
      <button onClick={() => setActiveTab('reviews')}><h2>상품 리뷰</h2></button>
    </li>
    <li className={activeTab === 'qna' ? 'on' : ''}>
      <button onClick={() => setActiveTab('qna')}><h2>상품 문의</h2></button>
    </li>
  </ul>
</div>

{/* 3. 탭별 내용 영역 */}
<div className="item_goods_sec">
  {activeTab === 'detail' && (
          <ProductDescription detailImg={currentDetail.detail} />
        )}
  {activeTab === 'exchange' && <div id="exchange"><div className="product_exchange_wrap">
      <h3>배송/반품/환불</h3>
      
      <div className="admin_msg custom_admin_msg">
        <dl>
          <dt>배송 정보</dt>
          <dd>
            <p>유효기간: 제품 별도 표기일까지</p>
            <p>상품은 주문일로부터 3 영업일 내 순차 발송 진행됩니다.</p>
            <p>제주도 및 도서산간 지역은 배송이 불가할 수 있습니다.</p>
          </dd>
        </dl>
        <dl>
          <dt>취소/환불</dt>
          <dd>
            <p>본 상품은 식품 특성상 상품 출고 이후 단순 변심에 의한 취소가 불가합니다.</p>
            <p>취소는 주문 당일부터 배송 출고 전까지 가능합니다.</p>
            <p>롯데호텔 이숍 홈페이지 취소/환불 규정 참조</p>
            <p>본 제품은 공정거래위원회 고시 소비자 분쟁 해결 기준에 의거 교환 또는 보상 받을 수 있습니다.</p>
          </dd>
        </dl>
        <dl>
          <dt>판매자 정보</dt>
          <dd>
            <p>판매자: ㈜호텔롯데 롯데호텔 이숍</p>
            <p>소비자 상담 관련 전화번호: 02-759-7700</p>
          </dd>
        </dl>
        <dl>
          <dt>유의사항</dt>
          <dd>
            <p>소비자분쟁해결 기준(공정거래위원회 고시)에 따라 피해를 보상받을 수 있습니다.</p>
            <p>A/S는 판매자에게 문의하시기 바랍니다.</p>
          </dd>
        </dl>
      </div>
    </div></div>}
  {activeTab === 'reviews' && (
          <ProductReviews reviews={currentDetail.reviews} />
        )}
  {activeTab === 'qna' && <Qna/> }
</div>
</div>


      </div>
    </div>
  );
};

export default ProductDetail;