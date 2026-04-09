
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Navibar from './components/Navibar';
import Main from './pages/Main';
import Product from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Footer from './components/Footer';
import Cart from './pages/Cart';


function App() {
  return (
    <div>
      {/* 상단 네비바는 고정 */}
      <Navibar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop/:category/:subcategory?" element={<Product />} />
        <Route path="/shop/:category/detail/:id" element={<ProductDetail />} />
        <Route path="*" element={<div>404: 없는 페이지야!</div>} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
