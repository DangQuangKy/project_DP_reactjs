import React from 'react';
import "./LogIn.scss";

const Login = ({ closeModal }) => {
  return (
    <div className="login">
      <h2>Đăng nhập</h2>
      <form>
        <div>
          <label>Tên đăng nhập:</label> &nbsp;
          <input type="text" placeholder='Email'/>
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input className='input' type="password" placeholder='Password'/>
        </div>
        <button type="submit">Đăng nhập</button>
        <button type="button" onClick={closeModal}>Đóng</button>
      </form>
    </div>
  );
};

export default Login;