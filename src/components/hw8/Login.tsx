import React, { useState } from "react";
import { Combine, UserLoginType } from "../../model/interface";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { saveUserInfo } from "../../store/reducers/loginReducer";

export default function Login() {
  let user: UserLoginType = {
    id: 1,
    name: "Duong",
    pass: "123",
    email: "duong@gmail.com",
  };
  //get data
  let loginUsers: UserLoginType[] = useSelector((state: Combine) => {
    return state.loginUsers;
  });
  console.log(loginUsers);

  let [loginData, setLoginData] = useState({
    email: "",
    pass: "",
  });

  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //nameInput và valueInput
    let { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let handleCheck = () => {
    loginData.email === user.email
      ? loginData.pass === user.pass
        ? () => {
            alert("Login Successful");
            dispatch(saveUserInfo(loginData));
            navigate("/home");
          }
        : alert("Email or pass is false !")
      : alert("Email or pass is false !");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-72 border-2 border-solid flex flex-col gap-2 p-4">
        <h2>Login Form</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Email:</label>
          <input
            type="text"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="">Passwords:</label>
          <input
            type="text"
            name="pass"
            value={loginData.pass}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleCheck}>Login</button>
      </div>
    </div>
  );
}
