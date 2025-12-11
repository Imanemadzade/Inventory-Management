import { useState } from "react";
import styles from "./module/RegisterPage.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/httpReqest";

function RegisterPage() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    userName: "",
    password: "",
    checkPassword: "",
  });

  const goLoginPageHandler = () => {
    navigate("/login");
  };

  const inputHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = () => {
    const username = input.userName;
    const password = input.password;
    try {
      axios
        .post(`${BASE_URL}/auth/register`, {
          username: username,
          password: password,
        })
        .then(() => navigate("/login"));
    } catch (error) {
      console.log(`Error : ${error}`);
    }
  };

  return (
    <div>
      <div className={styles.register_form}>
        <img src="src/assets/Union.png" alt="Botostart Logo" />
        <h1>فرم ثبت‌ نام</h1>
        <div>
          <input
            type="text"
            placeholder="نام کاربری"
            name="userName"
            value={input.userName}
            onChange={inputHandler}
          />
          <input
            type="number"
            placeholder="رمز عبور"
            name="password"
            value={input.password}
            onChange={inputHandler}
          />
          <input
            type="number"
            placeholder="تکرار رمز عبور"
            name="checkPassword"
            value={input.checkPassword}
            onChange={inputHandler}
          />
          <button onClick={submitHandler}>ثبت نام</button>
        </div>
        <span onClick={goLoginPageHandler}>
          <a href="#">حساب کاربری دارید؟</a>
        </span>
      </div>
    </div>
  );
}

export default RegisterPage;
