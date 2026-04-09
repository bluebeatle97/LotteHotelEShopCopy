import React, { useState, useMemo } from 'react';

const ProductReviews = ({ reviews }) => {
  const [sortType, setSortType] = useState('newest'); // 최신순, 별점순
  const [searchTerm, setSearchTerm] = useState(''); // 검색어
  const [selectedImg, setSelectedImg] = useState(null); // 모달용 이미지

  // 1. 통계 데이터 계산 [cite: 2026-03-25]
  const stats = useMemo(() => {
    if (!reviews.length) return { avg: 0, counts: [0,0,0,0,0], pct5: 0, allPhotos: [] };
    
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    const avg = (sum / reviews.length).toFixed(1);
    const counts = [5, 4, 3, 2, 1].map(num => reviews.filter(r => r.rating === num).length);
    const pct5 = Math.round((reviews.filter(r => r.rating === 5).length / reviews.length) * 100);
    const allPhotos = reviews.flatMap(r => r.images);

    return { avg, counts, pct5, allPhotos };
  }, [reviews]);

  // 2. 정렬 및 검색 로직 [cite: 2026-03-25]
  const filteredReviews = useMemo(() => {
    return reviews
      .filter(r => r.content.includes(searchTerm))
      .sort((a, b) => {
        if (sortType === 'newest') return new Date(b.date) - new Date(a.date);
        if (sortType === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [reviews, sortType, searchTerm]);

  return (
    <div className="product_reviews">
      {/* 리뷰 상단 통계 영역 */}
      <h2>Review</h2>
      <div className="review_summary">
        <div className="score_box">
          <span className="star_big">★</span>
          <span className="score_num">{stats.avg}</span>
          <p>{stats.pct5}%가 <strong>아주 좋아요</strong> 라고 평가했습니다.</p>
          <p className="total_count">리뷰 {reviews.length}개</p>
        </div>
        <div className="graph_box">
          {['아주 좋아요', '맘에 들어요', '보통이에요', '그냥 그래요', '별로예요'].map((label, idx) => (
            <div className="graph_line" key={label}>
              <span>{label}</span>
              <div className="bar"><div className="fill" style={{ width: `${(stats.counts[idx]/reviews.length)*100}%` }}></div></div>
              <span>{stats.counts[idx]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 포토 & 동영상 영역 [cite: 2026-03-25] */}
      <div className="photo_section">
        <div className="section_tit"><h3>포토&동영상</h3> <span className="view_all">전체보기 〉</span></div>
        <div className="photo_list">
          {stats.allPhotos.map((url, i) => (
            <img key={i} src={url} alt="리뷰포토" onClick={() => setSelectedImg(url)} />
          ))}
        </div>
      </div>

      {/* 필터 및 검색바 [cite: 2026-03-25] */}
      <div className="review_filter_bar">
        <div className="sort_btns">
          <button className={sortType === 'newest' ? 'active' : ''} onClick={() => setSortType('newest')}>최신순</button>
          <button className={sortType === 'rating' ? 'active' : ''} onClick={() => setSortType('rating')}>별점순</button>
        </div>
        <div className="search_box">
          <input type="text" placeholder="리뷰 키워드 검색" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <button className="search_icon">🔍</button>
        </div>
      </div>

      {/* 리뷰 리스트 */}
      <div className="review_list">
        {filteredReviews.map((rev, idx) => (
          <div key={idx} className="review_item">
             <div className="review_info">
                <div className="stars">{"★".repeat(rev.rating)}</div>
                <div className="user_date">{rev.user} | {rev.date}</div>
              </div>
              <div className="review_content_box">
                <p className="content">{rev.content}</p>
                <div className="review_imgs">
                  {rev.images.map((img, i) => <img key={i} src={img} alt="리뷰" onClick={() => setSelectedImg(img)} />)}
                </div>
              </div>
          </div>
        ))}
      </div>

      {/* 이미지 모달 [cite: 2026-03-25] */}
      {selectedImg && (
        <div className="img_modal" onClick={() => setSelectedImg(null)}>
          <div className="modal_cont">
            <img src={selectedImg} alt="크게보기" />
            <button className="close_btn">×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductReviews;