import styles from "./module/LoginPage.module.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigete = useNavigate();

  const goRegiserPageHandler = () => {
    navigete("/register");
  };

  const loginHandler = () => {};

  return (
    <div className={styles.login_form}>
      <img src="src/assets/Union.png" alt="Botostart Logo" />
      <h1>فرم ورود </h1>
      <div>
        <input type="text" placeholder="نام کاربری" />
        <input type="password" placeholder="رمز عبور" />
        <button onClick={loginHandler}>ورود</button>
      </div>
      <span onClick={goRegiserPageHandler}>
        <a href="#">ایجاد حساب کاربری!</a>
      </span>
    </div>
  );
}

export default LoginPage;
