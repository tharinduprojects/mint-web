'use client'

import { Modal, Form, Input, Button, Select, Checkbox } from "antd";

const ContactOurSalesPopup = ({ isModalOpen, handleOk, handleCancel }) => {

  const { TextArea } = Input;
  const { Option } = Select;

  return (
    <Modal footer={null} title="Contact our Sales team" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p>Tell us how we can help and a member of our team will be in touch soon.</p>
      <Form layout="vertical" className="mt-14 contact-popup">
        <Form.Item label="Full name" required tooltip="This is a required field">
          <Input placeholder="Enter your full name" />
        </Form.Item>
        <Form.Item label="Email" required tooltip="This is a required field">
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item label="Company name" required tooltip="This is a required field">
          <Input placeholder="Enter your company name" />
        </Form.Item>
        <Form.Item label="Country" required tooltip="This is a required field">
          <Select placeholder="Select your country">
            {/* Options should be populated dynamically */}
            <Option value="country1">Country 1</Option>
            <Option value="country2">Country 2</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Company size" required tooltip="This is a required field">
          <Select placeholder="Select company size">
            {/* Options should be populated dynamically */}
            <Option value="small">Small</Option>
            <Option value="medium">Medium</Option>
            <Option value="large">Large</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Your message" required tooltip="This is a required field">
          <TextArea rows={4} placeholder="Write your message here" />
        </Form.Item>
        <Form.Item>
          <Checkbox>
            You agree to our friendly Privacy policy.
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send message
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ContactOurSalesPopup;