import React from "react";
import "./form.css";
export default function Login() {
  let handleCheckLogin = () => {};
  return (
    <div>
      <div className="container-all">
        <h2 className="title-form">Đăng nhập</h2>
        <input className="input-form" type="text" placeholder="Email..." />
        <input className="input-form" type="text" placeholder="Password..." />
        <button className="btn-form" onClick={handleCheckLogin}>
          Đăng nhập
        </button>
      </div>
    </div>
  );
}
