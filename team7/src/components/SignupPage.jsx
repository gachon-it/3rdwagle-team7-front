import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Space } from 'antd';

function SignupPage() {
  return <SignupComponent />;
}

function SignupComponent() {
  const [form] = Form.useForm();
  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
      <Form.Item
        name="name"
        label="이름"
        rules={[
          {
            required: true,
            message: '이름을 입력해주세요',
          },
          {
            pattern: /^[\uAC00-\uD7A3]+$/,
            message: '이름은 한글만 입력 가능합니다.',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="비밀번호"
        rules={[
          {
            required: true,
            message: '비밀번호를 입력해주세요',
          },
          {
            pattern: /^(?=.*[a-z]).{6,}$/,
            message:
              '비밀번호는 소문자 영어를 포함하여 6글자 이상이어야 합니다.',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="studentId"
        label="학번"
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
        <Input maxLength={9} />
      </Form.Item>

      <Form.Item
        name="email"
        label="이메일"
        rules={[
          {
            required: true,
            message: '이메일을 입력해주세요',
          },
          {
            type: 'email',
            message: '이메일 형식에 맞게 입력해주세요.',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="department"
        label="학과"
        rules={[
          {
            required: true,
            message: '학과를 입력해주세요',
          },
          {
            pattern: /^[\uAC00-\uD7A3]+$/,
            message: '학과명은 한글만 입력 가능합니다.',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Space>
          <SubmitButton form={form}>회원가입</SubmitButton>
          <Button htmlType="reset">초기화</Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

function SubmitButton({ form, children }) {
  const [submittable, setSubmittable] = React.useState(false);
  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
}

export default SignupPage;
