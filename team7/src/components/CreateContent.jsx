import { Button, Form, Input, InputNumber } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

function CreateContent() {
  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);

  return (
    <Form
      {...formItemLayout}
      form={form}
      variant={'underlined'}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="Input" name="Input" rules={[{}]}>
        <Input />
      </Form.Item>

      <Form.Item label="InputNumber" name="InputNumber" rules={[{}]}>
        <InputNumber
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item label="TextArea" name="TextArea" rules={[{}]}>
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Button type="link" htmlType="submit">
          대신 보낼까요?
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CreateContent;
