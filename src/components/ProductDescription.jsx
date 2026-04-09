import React, { useState } from 'react';

const ProductDescription = ({ detailImg }) => {
  const [isExpanded, setIsExpanded] = useState(false); // 더보기 상태

  return (
    <div className={`detail_desc_container ${isExpanded ? 'expanded' : ''}`}>
      <div className="detail_image_box">
        {detailImg ? (
          <img src={detailImg} alt="상품 상세 설명" />
        ) : (
          <div className="no_data">상세 설명 이미지가 없습니다.</div>
        )}
      </div>

      {/* 더보기 버튼 (확장되지 않았을 때만 표시) [cite: 2026-03-25] */}
      {!isExpanded && (
        <div className="more_btn_wrap">
          <button className="view_more_btn" onClick={() => setIsExpanded(true)}>
            상품 정보 더보기 <span className="arrow">∨</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;