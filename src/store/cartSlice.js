import { createSlice } from '@reduxjs/toolkit';

// 초기 데이터: 로컬스토리지에 저장된 게 있으면 가져오고 없으면 빈 배열 [cite: 2026-03-25]
const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 1. 장바구니 담기 [cite: 2026-03-25]
    addItem(state, action) {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index].count += action.payload.count; // 이미 있으면 수량 추가 [cite: 2026-03-25]
      } else {
        state.push(action.payload); // 없으면 새로 추가 [cite: 2026-03-25]
      }
      localStorage.setItem('cart', JSON.stringify(state)); // 로컬스토리지 동기화 [cite: 2026-03-25]
    },
    // 2. 삭제 [cite: 2026-03-25]
    deleteItem(state, action) {
      const newState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    },
    // 3. 수량 변경 [cite: 2026-03-25]
    updateCount(state, action) {
      const { id, amount } = action.payload;
      const index = state.findIndex((item) => item.id === id);
      if (index !== -1) {
        state[index].count += amount;
        if (state[index].count < 1) state[index].count = 1;
      }
      localStorage.setItem('cart', JSON.stringify(state));
    }
  }
});

export const { addItem, deleteItem, updateCount } = cartSlice.actions;
export default cartSlice.reducer;