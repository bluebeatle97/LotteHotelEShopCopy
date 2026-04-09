import React from "react";
import { Link } from 'react-router-dom';
import quickMenuData from "../db/quickMenuData"; // 데이터 경로 확인해

const QuickMenu = () => {
  return (
    <section className="main_quick_menu">
      {/* PC 버전 리스트 */}
      <ul className="pc">
        {quickMenuData.map((item) => (
          <li key={item.id}>
            <Link to={`/${item.mainCat}/${item.title}`}>
              <div className="image">
                <img src={item.imgUrl} alt={item.title} />
              </div>
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile 버전 리스트 (CSS에서 1024px 이하일 때 display: grid 처리됨) */}
      <ul className="mo">
        {quickMenuData.map((item) => (
          <li key={item.id}>
            <Link to={`/${item.mainCat}/${item.title}`}>
              <div className="image">
                <img src={item.imgUrl} alt={item.title} />
              </div>
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default QuickMenu;
