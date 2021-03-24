import css from "./../components/admin.module.css";
import { FormEmail, FormPassword, FormRemember, FormButton } from "./../components/form.js";
import {$isAuth, $loginError, checkAdmin, login} from '../store/admin';
import { useStore } from 'effector-react';
import {Error} from "../components/Error";

const onFinish = (e) => {
  e.preventDefault();
  const values = {
    email: e.target.email.value,
    password: e.target.pswrd.value,
    remember: e.target.remember.checked,
  };
  login(values);
}

const AdminLogin = () => {
  const error = useStore($loginError);
  const isAuthorized = useStore($isAuth);

  return(
    <div>
      {
        !isAuthorized &&
        <form
        className={css.admin_form}
        id="form"
        onSubmit={ onFinish }
        >
          <FormEmail />
          <FormPassword />
          <FormRemember />
          {error && <Error>{error}</Error>}
          <FormButton />
        </form>
      }
      {isAuthorized && <div>Вы уже авторизованы</div>}
      <button onClick={checkAdmin} >Send check admin</button>
    </div>
  );
};

export default AdminLogin;
