import React from 'react';
import productData from '../db/productData';
import detailData from '../db/productDetailData';
import '../App.css';

const MainReview = () => {
  // 1. 사진이 있는 리뷰들만 모으기
  const reviewsWithImages = [];

  Object.entries(detailData).forEach(([title, data]) => {
    data.reviews.forEach((rev) => {
      if (rev.images && rev.images.length > 0) {
        // 해당 리뷰의 상품 정보를 productData에서 찾음 (썸네일용)
        const product = Object.values(productData).flat().find(p => p.id === data.id);
        
        reviewsWithImages.push({
          ...rev,
          productTitle: title,
          productContent: product ? product.content : "",
          productImg: product ? product.imgUrl[0] : "",
          reviewCount: data.reviews.length
        });
      }
    });
  });

  // 2. 상위 4개만 노출
  const displayReviews = reviewsWithImages.slice(0, 4);

  return (
    <section className="review_sec">
      <div className="review_title">
        <h2>Customer Reviews <span>고객 리뷰</span></h2>
      </div>

      <div className="review_container">
        {displayReviews.map((rev, idx) => (
          <div key={idx} className="review_card">
            {/* 큰 리뷰 사진 */}
            <div className="rev_main_img">
              <img src={rev.images[0]} alt="리뷰사진" />
              {rev.images.length > 1 && <span className="img_count">{rev.images.length}</span>}
            </div>

            {/* 상품 간략 정보 */}
            <div className="rev_prod_info">
              <img src={rev.productImg} alt="상품썸네일" className="prod_thumb" />
              <div className="prod_text">
                <p className="prod_name">{rev.productContent}</p>
                <p className="prod_meta">
                  <span className="star">★{rev.rating.toFixed(1)}</span>
                  <span>리뷰 {rev.reviewCount}</span>
                </p>
              </div>
            </div>

            {/* 리뷰 본문 */}
            <p className="rev_content">{rev.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainReview;