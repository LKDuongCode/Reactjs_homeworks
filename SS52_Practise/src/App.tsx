import React from "react";
import ProductList from "./components/ProductList";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ProductDetail from "./components/ProductList/ProductDetail";
import NotFound from "./components/NotFound";
import Cart from "./components/cart/Cart";

export default function App() {
  let navigate = useNavigate();
  return (
    <div>
      {/* 
    Tạo một danh sách sản phẩm trong cpn có tên product list
    Tạo cpn product từng sản phẩm
     + nút xem chi tiết. 
    Tạo cpn product detail.


    *Các bước làm.
    
    */}
      <div onClick={() => navigate("/cart")}>Cart</div>
      <Routes>
        <Route path="/" element={<ProductList></ProductList>}>
          <Route
            path="product-detail/:productId"
            element={<ProductDetail></ProductDetail>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}
