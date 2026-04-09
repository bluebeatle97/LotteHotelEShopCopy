import React, { useState, useEffect, useCallback } from "react";
import sliderData from "../db/sliderData";

function MainSlider() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const totalSlides = sliderData?.length || 0;
  const duration = 40000;

  // nextSlide를 useCallback으로 감싸서 안정화
const nextSlide = useCallback(() => {
  // 마지막 인덱스(6)에서 다시 0으로 [cite: 2026-03-25]
  setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  setProgress(0);
}, [totalSlides]);

const prevSlide = () => {
  // 0에서 다시 마지막 인덱스(6)로 [cite: 2026-03-25]
  setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  setProgress(0);
}
  useEffect(() => {
    // 1. 게이지가 100이 되면 다음 슬라이드로
    if (progress >= 100) {
      nextSlide();
      return;
    }

    // 2. 0.1초마다 게이지 상승
    const interval = setInterval(() => {
      setProgress((prev) => prev + 0.25);
    }, 100);

    return () => clearInterval(interval);
  }, [progress, nextSlide]);
  if (!sliderData || sliderData.length === 0) return <div>로딩 중...</div>;
const currentSlide = sliderData[current];

  return (
    <div className="mainSlider">
      <div className="mainSliderCont">
<div className="mainSliderContBox">
          {/* 이미지를 밀어주는 트랙 */}
          <div 
            className="slideTrack" 
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {sliderData.map((slide, idx) => (
              <div
                key={idx}
                className="slideItem"
                style={{ backgroundImage: `url(${slide.imgUrl})` }}
              >
                {/* 필요 시 텍스트 추가 */}
              </div>
            ))}
          </div>
        </div>
        <div className="mainSliderCtrl">
          <div className="ctrlInner">
            <div className="ctrlLayout">
              <span className="pageNums">
                {String(current + 1).padStart(2, "0")}
              </span>
              <div className="barContainer">
                <div
                  className="barFill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="pageNums">
                {String(totalSlides).padStart(2, "0")}
              </span>
              <div className="arrowGroup">
                <button className="arrowBtn" onClick={prevSlide}>
                  &lt;
                </button>
                <button className="arrowBtn" onClick={nextSlide}>
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default MainSlider;
