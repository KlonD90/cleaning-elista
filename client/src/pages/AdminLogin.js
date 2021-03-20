import { Form, Input, Button, Checkbox } from 'antd';
import {$isAuth, $loginError, checkAdmin, login} from '../store/admin'
import { useStore } from 'effector-react'
import {Error} from "../components/Error";

const AdminLogin = () => {
  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 19,
    },
  };
  
  const tailLayout = {
    wrapperCol: {
      offset: 4,
      span: 16,
    },
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    login(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const error = useStore($loginError)

  const isAuthorized = useStore($isAuth)

  return (
    <div>
      {!isAuthorized &&
      <Form
          {...layout}
          className="admin_login_form"
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
      >

        <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        {error && <Error>{error}</Error>}

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      }
      {isAuthorized && <div>Вы уже авторизованы</div>}
      <Button onClick={checkAdmin} >Send check admin</Button>
    </div>
  );
};

export default AdminLogin;
