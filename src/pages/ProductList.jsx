import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productData from '../db/productData';
import ProductCard from '../components/ProductCard';
import "../App.css";

const Product = () => {
  const { category,subcategory } = useParams();
  const [mainCat, setMainCat] = useState('food');
  const [subCat, setSubCat] = useState('전체');
  const [input, setInput] = useState("");
  const [sortType, setSortType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // 5줄 (한 줄에 4개 기준)
  const currentCategoryData = productData[mainCat] || [];


  
  useEffect(() => {
    if (category && productData[category]) {
      setMainCat(category);
      // 2. URL에 subcategory가 있으면 해당 값으로, 없으면 '전체'로 설정
      if (subcategory) {
        setSubCat(decodeURIComponent(subcategory)); // 한글 깨짐 방지
      } else {
        setSubCat('전체');
        if (!productData[mainCat]) {
  return <div className="error-msg">해당 카테고리를 찾을 수 없어!</div>;
}
      }
    }
  }, [category, subcategory]);// subcategory가 바뀔 때도 실행

  // [중요] 방어 코드: 데이터가 없을 경우 빈 배열을 기본값으로 할당


  // 1. 카테고리/검색어 변경 시 페이지 1로 리셋
  useEffect(() => {
    setCurrentPage(1);
  }, [mainCat, subCat, input]);
useEffect(() => {
  window.scrollTo(0, 0);
}, [currentPage]);
  // 카테고리 매핑
  const catNames = {
    food: { ko: "푸드", en: "Food" },
    living: { ko: "리빙", en: "Living" },
    alcohol: { ko: "주류", en: "Alcohol" },
    hotel: { ko: "호텔이용권", en: "Hotel Gift Voucher" }
  };

  const subCategories = ['전체', ...new Set(productData[mainCat].map(item => item.title))];

  // 2. 필터링 + 검색 로직
  let filteredProducts = productData[mainCat].filter(item => {
    const isSubCatMatch = subCat === '전체' || item.title === subCat;
    const isSearchMatch = item.content.toLowerCase().includes(input.toLowerCase());
    return isSubCatMatch && isSearchMatch;
  });

  // 3. 정렬 로직
  if (sortType === "name") {
    filteredProducts.sort((a, b) => a.content.localeCompare(b.content));
  } else if (sortType === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // 4. 페이지네이션 계산 (최종 결과인 filteredProducts를 자름)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
if (!productData[mainCat]) {
    return <div className="error-msg">해당 카테고리를 찾을 수 없어!</div>;
  }
  return (
    <div className="product-page">
      {/* 브레드크럼 */}
      <div className="breadcrumb">
        <span>홈</span> &gt; <span>{catNames[mainCat].ko}</span>
        {subCat !== '전체' && (<>&gt; <span>{subCat}</span>
    </>
  )}
      </div>

      {/* 타이틀 */}
      <div className="category-header">
        <h2>
          {catNames[mainCat].ko} 
          <span className="en-title">{catNames[mainCat].en}</span>
        </h2>
      </div>

      {/* 소분류 탭 */}
      <div className="sub-nav">
        <ul className="sub-navbox">
          {subCategories.map(tab => (
            <li 
              key={tab} 
              className={`sub-navOn ${subCat === tab ? 'on' : ''}`}
              onClick={() => {
                setSubCat(tab);
                setSortType(""); 
              }}
            >
              <span className={subCat === tab ? 'active' : ''}>{tab}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 컨트롤 영역 (정렬/검색) */}
      <div className="item-box">
        <p className="item-count">상품 {filteredProducts.length}개</p>
        
        <div className="item-controls">
          <div className="sort-group">
            <button className={sortType === "name" ? "on" : ""} onClick={() => setSortType("name")}>상품명순</button>
            <button className={sortType === "low" ? "on" : ""} onClick={() => setSortType("low")}>낮은가격순</button>
            <button className={sortType === "high" ? "on" : ""} onClick={() => setSortType("high")}>높은가격순</button>
          </div>
          
          <div className="search-wrap">
            <input 
              type="text" 
              placeholder="상품명을 입력하세요" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="search-btn">
              <img src="/img/ico_search.png" alt="검색" /> 
            </button>
          </div>
        </div>
      </div>

      {/* 상품 그리드 (중복 제거됨!) */}
      <div className="product-grid">
        {currentItems.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      {/* 페이지네이션 버튼 */}
      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;