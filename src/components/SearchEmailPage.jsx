import React, { useState } from 'react';
import { Button, Form, Input, Space, Modal, FloatButton } from 'antd';

const { Search } = Input;

function SearchEmailPage(props) {
  return <SearchEmail />;
}

function SearchEmail() {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          name="Lecture"
          label="강의명"
          rules={[
            { required: true, message: '강의명을 입력해주세요' },
            {
              pattern: /^[\uAC00-\uD7A3]+$/,
              message: '강의명은 한글만 입력 가능합니다.',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Professor"
          label="교수명"
          rules={[
            { required: true, message: '교수명을 입력해주세요' },
            {
              pattern: /^[\uAC00-\uD7A3]+$/,
              message: '교수명은 한글만 입력 가능합니다.',
            },
          ]}
        >
          <Search
            placeholder="교수 이름을 입력하세요"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={showModal}
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="이메일"
          rules={[
            { required: true, message: '이메일을 입력해주세요' },
            { type: 'email', message: '이메일 형식에 맞게 입력해주세요.' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Space>
            <SubmitButton form={form}>메일 생성하기</SubmitButton>
            <Button htmlType="reset">초기화</Button>
          </Space>
        </Form.Item>
      </Form>

      <Modal
        title="이메일 검색 결과"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/*
            props로 받은 이메일 값을 표시하기!
            동명 이인이 아닌 경우 : 이메일만 표시
            동명 이인이 존재하는 경우: 이메일 + 학과 표시
        */}
        <p>검색 결과를 여기에 표시할 수 있습니다.</p>
      </Modal>
      <FloatButton tooltip={<div>Documents</div>} />
    </>
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

export default SearchEmailPage;
