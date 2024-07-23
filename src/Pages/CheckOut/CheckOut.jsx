import React, { useEffect, useState } from "react";
import "./CheckOut.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Login from "../LogIn/LogIn";

Modal.setAppElement("#root");
const Checkout = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(
        JSON.parse(storedCart).map((item) => ({
          ...item,
          quantity: item.quantity || 1,
        }))
      );
    }
  }, []);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <>
      <nav className="nav-checkout">
      <Link to="/">Trang chủ</Link> &nbsp; <FontAwesomeIcon icon={faAngleRight} /> <Link to="/CheckOut" className="active">Thông tin giỏ hàng</Link>
      </nav>
      <div className="checkout-container">
        <div className="cart-list">
          <h2>Thông tin đặt hàng</h2>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-quantity">Số lượng đặt: {item.quantity}</p>
                <p className="item-price">
                  Giá tiền:{" "}
                  {item.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
                <p className="item-total">
                  Tổng tiền:{" "}
                  {(item.price * item.quantity).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="total">
          <div className="total-1">
            <div>Đơn giá</div>
            <div className="red">
              {calculateTotal().toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </div>
          </div>
          <div className="line"></div>
          <div className="total-1">
            <div>Thành tiền</div>
            <div className="red">
              {calculateTotal().toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </div>
          </div>
          <div className="btn-buy">Thanh toán</div>
          <div className="come-back">
            <Link to="/cart">
              <FontAwesomeIcon icon={faArrowLeftLong} /> &nbsp;Quay lại giỏ hàng
            </Link>
          </div>
          <div className="order-info">
            <div className="order-title">
              <div className="title-1">Địa chỉ nhận hàng</div>
              <div className="title-2">
                Bạn đã có tài khoản? <span onClick={openModal}>Đăng nhập</span>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Đăng nhập"
                  className="modal"
                  overlayClassName="overlay"
                >
                  <Login closeModal={closeModal} />
                </Modal>
              </div>
            </div>
            <form action="">
              <div className="form-group">
                <input type="text" name="full_name" placeholder="Họ và tên" />
              </div>
              <div className="form-group flex">
                <input
                  className="flex-2"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <input
                  className="flex-1"
                  type="text"
                  name="phone"
                  placeholder="Số điện thoại"
                />
              </div>
              <div className="form-group">
                <input type="text" name="address" placeholder="Số nhà" />
              </div>
              <div className="form-group flex">
                <input
                  className="flex-2"
                  type="text"
                  name="address"
                  placeholder="--Tỉnh thành--"
                />
                <input
                  className="flex-1"
                  type="text"
                  name="address"
                  placeholder="--Quận huyện--"
                />
                <input
                  className="flex-1"
                  type="text"
                  name="address"
                  placeholder="--Phường xã--"
                />
              </div>
            </form>
            <div className="inner">
              <label>Ghi chú</label>
              <textarea name="note" rows={2} cols={10}></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
