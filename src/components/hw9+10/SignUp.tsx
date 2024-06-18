import React, { useState } from "react";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionSignUp } from "../../action";
export default function SignUp() {
  // state lưu trữ thông tin người dùng nhập vào
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");

  let changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  let changePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  //get==================================================
  let accounts: any = useSelector((state: any) => {
    return state.signupReducer;
  });

  //navigation để chuyển trang và truyền dữ liệu
  let navigation = useNavigate();

  //dispatch
  let dispatch = useDispatch();

  let handleSignup = () => {
    navigation("/login");
    dispatch(
      actionSignUp("SIGNUP", {
        id: Math.ceil(Math.random() * 1000),
        email: email,
        pass: pass,
      })
    );
  };
  return (
    <div>
      <div className="container-all">
        <h2 className="title-form">Đăng ký</h2>
        <input
          className="input-form"
          type="text"
          placeholder="Email..."
          onChange={changeEmail}
        />
        <input
          className="input-form"
          type="text"
          placeholder="Password..."
          onChange={changePass}
        />
        <button className="btn-form" onClick={handleSignup}>
          Đăng ký
        </button>
      </div>
    </div>
  );
}
