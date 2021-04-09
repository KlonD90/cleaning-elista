import { FormEmail, FormPassword, FormRemember, FormButton } from "./../components/form.js";
import {$isAuth, $loginError, checkAdmin, login} from '../store/admin';
import { useStore } from 'effector-react';
import {Error} from "../components/Error";
import { Form, Button } from "./../components/admin.js";

const onFinish = (e) => {
  e.preventDefault();
  const values = {
    email: e.target.email.value,
    password: e.target.pswrd.value,
    remember: e.target.remember.checked,
  };
  console.log(values);
  login(values);
}

const AdminLogin = () => {
  const error = useStore($loginError);
  const isAuthorized = useStore($isAuth);

  return(
    <div>
      {
        !isAuthorized &&
        <Form onSubmit={ onFinish } >
          <FormEmail />
          <FormPassword />
          <FormRemember />
          {error && <Error>{error}</Error>}
          <FormButton />
        </Form>
      }
      {isAuthorized && <div>Вы уже авторизованы</div>}
      <Button onClick={checkAdmin} >Send check admin</Button>
    </div>
  );
};

export default AdminLogin;
