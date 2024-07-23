import { useEffect, useState } from "react";
import "./SanPham.scss";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../Redux/slice/cartSlice"
function SanPham() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [isRotated, setIsRotated] = useState(false);
  const [isListVisible, setIsListVisible] = useState(false);
  const dispatch = useDispatch();
  const CartProducts = useSelector(state => state.cart.CartArr)
 
  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setSortedProducts(data);
      });

  }, []);
  
  const handleClick = () => {
    setIsRotated(!isRotated);
    setIsListVisible(!isListVisible);
  };
  const handleProductClick = (id) => {
    window.location.href = `/SanPham/${id}`;
  };
  const sortByPriceAscending = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
    setIsListVisible(false);
  };
  const sortByName = () => {
    const sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));
    setSortedProducts(sorted);
    setIsListVisible(false); 
  };
  const sortByPriceDescending = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setSortedProducts(sorted);
    setIsListVisible(false); 
  };
  return (
    <div className="sanpham">
      <div className="wrapper">
        <img
          src="https://cdn1332.cdn-template-4s.com/media/category/bg-1.jpg"
          alt="wrapper"
        />
      </div>
      <div className="product">
        <div className="product-nav">
          <div className="title">
            <a href="/">Trang chủ</a> &nbsp;
            <FontAwesomeIcon icon={faAngleRight} />
            &nbsp;
            <a href="/SanPham" className="active">
              Sản phẩm
            </a>
          </div>
          <div className="section">
            <div className="section-1">
              <span>Hiển thị:</span>
              <a href="/">12</a>
              <span>/</span>
              <a href="/">24</a>
              <span>/</span>
              <a href="/">36</a>
            </div>
            <div className="section-2">
              <span onClick={handleClick} className="click">
                Sắp xếp: &nbsp;&nbsp;{" "}
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className={`arrow ${isRotated ? "rotated" : ""}`}
                />
                {isListVisible && (
                  <ul className="list">
                    <li><a onClick={sortByName}>Sắp xếp theo tên</a></li>
                    <li><a onClick={sortByPriceAscending}>Giá từ thấp đến cao</a></li>
                    <li><a onClick={sortByPriceDescending}>Giá từ cao đến thấp</a></li>
                  </ul>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="main-product">
          <div className="main-left">
            <ul>
              <li><a href="/SanPham">Shirts</a></li>
              <li><a href="/SanPham">Bottoms</a></li>
              <li><a href="/SanPham">Outerwear</a></li>
              <li><a href="/SanPham">Knits</a></li>
              <li><a href="/SanPham">Accessories</a></li>
              <li><a href="/SanPham">Footwear</a></li>
            </ul>
          </div>
         <div className="main-right">
            <ul>
              {sortedProducts.map((product) => (
                <li key={product.id} >
                  <img src={product.image} alt={product.name} onClick={() => handleProductClick(product.id)}/>
                  <h4>{product.name}</h4>
                  <p>Giá sản phẩm: {product.price.toLocaleString('vi-VN')} VND</p>
                  
                  <div className="btn" onClick={() => dispatch(addProduct(product))}>Thêm giỏ hàng</div>
                </li>
              ))}
            </ul>
         </div>
        </div>
      </div>
    </div>
  );
}

export default SanPham;
