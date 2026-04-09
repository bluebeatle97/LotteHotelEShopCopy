import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Autoplay 추가 [cite: 2026-03-25]
import 'swiper/css';
import 'swiper/css/navigation';
import productData from '../db/productData';
import ProductCard from './ProductCard';

const MainBestItem = () => {
  const [bestItems, setBestItems] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const allItems = Object.entries(productData).flatMap(([cat, items]) => 
      items.map(item => ({ ...item, category: cat }))
    );
    // 8개 랜덤 추출 [cite: 2026-03-25]
    const shuffled = allItems.sort(() => 0.5 - Math.random()).slice(0, 8);
    setBestItems(shuffled);
  }, []);

  return (
    <section className="best_item_sec">
      <div className="best_title">
        <h2>Best Item <span>인기 상품</span></h2>
      </div>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]} // Autoplay 활성화 [cite: 2026-03-25]
        slidesPerView={4}
        spaceBetween={20}
        loop={true} // 무한 반복 [cite: 2026-03-25]
        autoplay={{
          delay: 4000, // 4초마다 이동 [cite: 2026-03-25]
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => {
          // 루프 모드일 때는 realIndex를 사용해야 정확해 [cite: 2026-03-25]
          const current = swiper.realIndex;
          const total = bestItems.length - 1; 
          setProgress((current / total) * 100);
        }}
        className="best_swiper"
      >
        {bestItems.map((item, idx) => (
          <SwiperSlide key={`${item.id}-${idx}`}>
            <ProductCard item={item} category={item.category} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="progress_container">
        <div className="progress_bar" style={{ width: `${progress}%` }}></div>
      </div>
    </section>
  );
};

export default MainBestItem;