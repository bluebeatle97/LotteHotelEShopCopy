import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // 리덕스 연결 도구 [cite: 2026-03-25]
import { updateCount, deleteItem } from '../store/cartSlice'; // 아까 만든 액션들 [cite: 2026-03-25]

const Cart = () => {
  // 1. 리덕스 스토어에서 카트 데이터 실시간으로 가져오기 [cite: 2026-03-25]
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // 2. 총 금액 계산 (리덕스 데이터를 기반으로 계산) [cite: 2026-03-25]
  const totalAmount = cartItems.reduce((acc, cur) => acc + (cur.price * cur.count), 0);

  return (
    <div className="cart_page">
      <h2>장바구니</h2>
      {cartItems.length === 0 ? (
        <p className="no_data">장바구니가 비어있어.</p>
      ) : (
        <div className="cart_content">
          <ul className="cart_list">
            {cartItems.map(item => (
              <li key={item.id} className="cart_item">
                <img src={item.img} alt={item.content} />
                <div className="info">
                  <p className="brand">{item.title}</p>
                  <p className="name">{item.content}</p>
                </div>
                <div className="count_control">
                  {/* 3. 리덕스에 수량 변경 요청 (id와 변경할 양 전달) [cite: 2026-03-25] */}
                  <button onClick={() => dispatch(updateCount({ id: item.id, amount: -1 }))}>-</button>
                  <span>{item.count}</span>
                  <button onClick={() => dispatch(updateCount({ id: item.id, amount: 1 }))}>+</button>
                </div>
                <p className="price">{(item.price * item.count).toLocaleString()}원</p>
                {/* 4. 리덕스에 삭제 요청 [cite: 2026-03-25] */}
                <button className="btn_delete" onClick={() => dispatch(deleteItem(item.id))}>×</button>
              </li>
            ))}
          </ul>
          <div className="total_box">
            <p>총 상품금액: <strong>{totalAmount.toLocaleString()}원</strong></p>
            <button className="btn_order">주문하기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;