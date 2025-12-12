const validateUsername = (username) => {
  const regex = /^[a-zA-Z\d_]{4,16}$/;
  const result = regex.test(username);
  return result;
};

const validatePassword = (password) => {
  const regex = /^.{6,20}$/;
  const result = regex.test(password);
  return result;
};

const validateForm = (username, password) => {
  const usernameResult = validateUsername(username);
  const passwordResult = validatePassword(password);
  if (usernameResult && passwordResult) {
    return true;
  } else if (!usernameResult){
alert("نام کاربری معتبر نیست .")

  } else if (!passwordResult) {
    alert("رمز عبور باید شامل خداقل ۶ کاراکتر باشد .")
  }
};

export default validateForm;
