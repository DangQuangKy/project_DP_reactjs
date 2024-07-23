import { Route } from "react-router-dom";
import Main from "../Layout/main/Main";
import SanPham from "../Pages/SanPham/SanPham";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import GioiThieu from "../Pages/GioiThieu/GioiThieu";
import TinTuc from "../Pages/TinTuc/TinTuc";
import LienHe from "../Pages/LienHe/LienHe";
import Cart from "../Pages/Cart/Cart";
import Error from "../Layout/Error";
import Checkout from "../Pages/CheckOut/CheckOut";
export const PublicRoute = (
  <>
    <Route path="/" element={<Main />} />
    <Route path="/SanPham">
      <Route path="" element={<SanPham />} />
      <Route path="/SanPham/:id" element={<ProductDetail />} />
    </Route>
    <Route path="/Cart" element={<Cart />}></Route>
    <Route path="/CheckOut" element={<Checkout />} />
    <Route path="/GioiThieu" element={<GioiThieu />} />
    <Route path="/TinTuc" element={<TinTuc />} />
    <Route path="/LienHe" element={<LienHe />} />
    <Route path="*" element={<Error />} />
  </>
);
