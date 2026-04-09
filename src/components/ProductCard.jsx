import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // 1. useDispatch 추가 [cite: 2026-03-25]
import { addItem } from '../store/cartSlice'; // 2. addItem 추가 [cite: 2026-03-25]

const ProductCard = ({ item, category }) => {
  const dispatch = useDispatch(); // 3. dispatch 선언 [cite: 2026-03-25]
  const activeCat = item.mainCat || category || 'food';

  // 장바구니 담기 함수 [cite: 2026-03-25]
  const handleCart = (e) => {
    e.preventDefault(); // 부모 요소인 Link로 클릭 이벤트가 퍼지는 걸 막음 [cite: 2026-03-25]
    
    dispatch(addItem({
      id: item.id,
      title: item.title,
      content: item.content,
      price: item.price,
      img: item.imgUrl[0],
      count: 1 // 카드에서는 기본 1개 담기 [cite: 2026-03-25]
    }));
    
    alert('장바구니에 담겼습니다.');
  };

  return (
    <div className="item_cont">
      <div className="item_photo_box">
        <Link to={`/${activeCat}/detail/${item.id}`}>
          <img src={item.imgUrl[0]} alt={item.content} />
          {item.imgUrl[1] && <img src={item.imgUrl[1]} alt={item.content} className="hover-img" />}
        </Link>
        <div className="btns">
          <button className="btn_basket_get" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/ico_wish.png')` }}>
            <span>찜하기</span>
          </button>
          {/* 4. onClick 연결 [cite: 2026-03-25] */}
          <button 
            className="btn_basket_cart" 
            style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/ico_cart.png')` }}
            onClick={handleCart}
          >
            <span>장바구니</span>
          </button>
        </div>
      </div>
      <div className="item_info_cont">
        <Link to={`/${activeCat}/detail/${item.id}`}>
          <div className="item_brand">
            <strong>{item.title}</strong>
          </div>
          <div className="item_name">{item.content}</div>
          <div className="item_money_box">
            <span className="item_price">{item.price.toLocaleString()}원</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;