import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Flex, Image } from 'antd';
import fingerPrincess from '../assets/fingerPrincess.png';
import axios from 'axios';
import { useService } from '../context/ServiceContext';

function LandingPage() {
  return (
    <Flex
      style={{ height: '100vh', width: '100vw' }}
      justify="center"
      align="center"
      vertical
    >
      asd
      <ImageContainer />
      <ImageComment />
      <LoginComponent />
    </Flex>
  );
}

// 핑거프린세스 이미지 컴포넌트
function ImageContainer() {
  return <Image width={150} src={fingerPrincess} />;
}

// 핑거프렌세스 코멘트 컴포넌트
function ImageComment() {
  return (
    <div>
      <Button size={'large'} color="pink" variant="filled">
        핑거 프린세스 어서오고~
      </Button>
    </div>
  );
}

// 로그인 창 컴포넌트
function LoginComponent() {
  const serviceContext = useService();
  console.log(serviceContext.user);

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    const res = await axios.post('http://localhost:3001/login', values, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(res);
  };
  return (
    <Form
      name="login"
      initialValues={{
        remember: false,
      }}
      style={{
        maxWidth: 360,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="studentID"
        rules={[
          {
            required: true,
            message: '학번을 입력해주세요',
          },
          {
            pattern: /^\d{9}$/,
            message: '학번은 9자리의 숫자이어야 합니다.',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="학번" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '비밀번호를 입력하세요',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="비밀번호"
        />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        or <a href="/SignupPage">Register now!</a>
      </Form.Item>
    </Form>
  );
}

export default LandingPage;
