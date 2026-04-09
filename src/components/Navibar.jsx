import { useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import productData from "../db/productData";

function Navibar() {
  const [isHover, setIsHover] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("food"); // 기본값 설정
  
  let navigate = useNavigate();
  let location = useLocation();
  let cart = useSelector((state) => state.cart);
  const isMainPage = location.pathname === "/";
  // 수정: 메뉴 호버 시 카테고리 상태 변경 로직
  const handleMenuHover = (category) => {
    setActiveCategory(category);
    setIsMenuOpen(true);
  };
  

const isDark = !isMainPage || isHover || isScrolled;
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
const totalCount = cart.reduce((acc, cur) => acc + cur.count, 0);
  // 수정: 선택된 카테고리의 중복 제거된 title 배열 생성
  const subTitles = [...new Set(productData[activeCategory]?.map((item) => item.title))];
console.log("현재 리덕스 카트 상태:", cart);
  return (
    <div 
      className={`navibar ${isDark ? "active" : ""} ${isScrolled ? "shrink" : ""}`}
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => { setIsHover(false); setIsMenuOpen(false); }}>
      
    <div className="navibarCont">
      <div className="brandLogo" onClick={() => navigate("/")}>
        {/* 3. 로고: isDark가 true면 검정 로고, false면 흰색 로고 */}
        <img src={isDark ? "{process.env.PUBLIC_URL}/img/logo.svg" : "{process.env.PUBLIC_URL}/img/logow.svg"} alt="로고" />
      </div>
        {/* 수정: 각 li에 handleMenuHover 연결 (데이터 매칭 핵심) */}
        <ul className="navMenu">
          <li onMouseEnter={() => handleMenuHover("food")}>
            <a className="navLink" onClick={() => navigate("/food")}>푸드</a>
          </li>
          <li onMouseEnter={() => handleMenuHover("living")}>
            <a className="navLink" onClick={() => navigate("/living")}>리빙</a>
          </li>
          <li onMouseEnter={() => handleMenuHover("alcohol")}>
            <a className="navLink" onClick={() => navigate("/alcohol")}>주류</a>
          </li>
          <li onMouseEnter={() => handleMenuHover("hotel")}>
            <a className="navLink" onClick={() => navigate("/hotel")}>호텔이용권</a>
          </li>
          <li onMouseEnter={() => handleMenuHover("exchange")}>
            <a className="navLink" onClick={() => navigate("/exchange")}>상품교환권</a>
          </li>

          <li className="barItem"><span className="bar"></span></li>

          <li className="brandLogo" onClick={() => navigate("/")}>
            <img src={isDark ? "{process.env.PUBLIC_URL}/img/top_hotel_logo2.png" : "{process.env.PUBLIC_URL}/img/top_hotel_logo_white.png"} alt="브랜드로고" />
          </li>
        </ul>

        <ul className="iconMenu">
         <li onClick={() => navigate("/")}>
          <img src={isDark ? "{process.env.PUBLIC_URL}/img/ico_search.png" : "{process.env.PUBLIC_URL}/img/ico_search_white.png"} alt="검색" />
        </li>
        <li onClick={() => navigate("/")}>
          <img src={isDark ? "{process.env.PUBLIC_URL}/img/ico_mypage.png" : "{process.env.PUBLIC_URL}/img/ico_mypage_white.png"} alt="로그인" />
        </li>
        <li onClick={() => navigate("/")}>
          <img src={isDark ? "{process.env.PUBLIC_URL}/img/ico_resent.png" : "{process.env.PUBLIC_URL}/img/ico_resent_w.png"} alt="최근본상품" />
        </li>
        <li onClick={() => navigate("/cart")} className="cartLi">
          <img src={isDark ? "{process.env.PUBLIC_URL}/img/pc_ico_cart_white_b.png" : "{process.env.PUBLIC_URL}/img/pc_ico_cart_white_w.png"} alt="장바구니" />
            {totalCount > 0 &&<span className="cartBadge">{totalCount}</span>}
        </li>
        </ul>
      </div>

{/* 드롭다운 영역: 전체 배경 */}
<div className={`dropdownBox ${isMenuOpen ? "show" : ""}`}>
  {/* 중앙 1640px 제한 컨테이너 */}
  <div className="dropdownContBox">
    
    {/* 1구역: 서브 메뉴 리스트 (33.3%) */}
    <div className="dropdownSection">
      <ul className="subTitles">
        {subTitles.map((title, i) => (
          <a key={i} onClick={() => navigate(`/${activeCategory}`)}>
            <span>{title}</span>
          </a>
        ))}
      </ul>
    </div>

    {/* 2구역: 중간 빈 구역 혹은 텍스트 (33.3%) */}
    <div className="dropdownSection middleSection">
      {/* 나중에 여기에 카테고리 설명 등을 넣어도 좋아 */}
    </div>

    {/* 3구역: 이미지 영역 (33.3%) */}
    <div className="dropdownSection imgCont">
      <img src="{process.env.PUBLIC_URL}/img/top-b.png" alt="드롭박스이미지" />
    </div>

    {/* 닫기 버튼 */}
    <button className="closeBtn" onClick={() => setIsMenuOpen(false)}>✕</button>
  </div>
</div>
  </div>
  );
}

export default Navibar;