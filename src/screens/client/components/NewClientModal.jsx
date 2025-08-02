import React, { useState } from "react";
import { Modal, Form, Input, Select, Button, Row, Col, message } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const NewClientModal = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Country codes for dropdown
  const countryCodes = [
    { code: "+1", country: "US" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "IN" },
    { code: "+86", country: "CN" },
    { code: "+81", country: "JP" },
    { code: "+49", country: "DE" },
    { code: "+33", country: "FR" },
    { code: "+39", country: "IT" },
    { code: "+61", country: "AU" },
    { code: "+7", country: "RU" },
  ];

  // Sample countries
  const countries = [
    "United States",
    "United Kingdom",
    "India",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "China",
    "Brazil",
  ];

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();

      // Retrieve token from localStorage (or your preferred storage)
    const token = localStorage.getItem('token'); // Adjust based on where your token is stored

    if (!token) {
        message.error('Please log in to continue.');
        navigate("/signin")
        return;
      }

      // API call to store data in the backend
      const response = await fetch("http://localhost:5000/api/client", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
          },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to create client");
      }

      message.success("Client created successfully!");
      form.resetFields();
      onClose();
    } catch (error) {
      console.error("Error creating client:", error);
      message.error("Failed to create client. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title={
        <div style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937" }}>
          <UserOutlined style={{ marginRight: "8px", color: "#3b82f6" }} />
          Create New Client
        </div>
      }
      open={visible}
      onCancel={handleCancel}
      footer={null}
      width={650}
      centered
      maskClosable={true}
      destroyOnClose={true}
      styles={{
        body: { padding: "32px" },
        header: { borderBottom: "1px solid #f0f0f0", marginBottom: "24px" },
      }}
    >
      <Form
        form={form}
        layout="horizontal"
        requiredMark={false}
        autoComplete="off"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        labelAlign="left"
      >
        <Form.Item
          label={
            <span style={{ fontWeight: "500", color: "#374151" }}>
              Full Name
            </span>
          }
          name="name"
          rules={[
            { required: true, message: "Please enter client name" },
            { min: 2, message: "Name must be at least 2 characters" },
            { max: 50, message: "Name cannot exceed 50 characters" },
            {
              pattern: /^[a-zA-Z\s]+$/,
              message: "Name can only contain letters and spaces",
            },
          ]}
          style={{ marginBottom: "20px" }}
        >
          <Input
            prefix={<UserOutlined style={{ color: "#9ca3af" }} />}
            placeholder="Enter full name"
            size="large"
            style={{ borderRadius: "8px" }}
          />
        </Form.Item>

        <Form.Item
          label={
            <span style={{ fontWeight: "500", color: "#374151" }}>
              Email Address
            </span>
          }
          name="email"
          rules={[
            { required: true, message: "Please enter email address" },
            { type: "email", message: "Please enter a valid email address" },
          ]}
          style={{ marginBottom: "20px" }}
        >
          <Input
            prefix={<MailOutlined style={{ color: "#9ca3af" }} />}
            placeholder="Enter email address"
            size="large"
            style={{ borderRadius: "8px" }}
          />
        </Form.Item>

        <Form.Item
          label={
            <span style={{ fontWeight: "500", color: "#374151" }}>
              Country Code
            </span>
          }
          name="countryCode"
          rules={[{ required: true, message: "Select country code" }]}
          style={{ marginBottom: "20px" }}
        >
          <Select
            placeholder="Select country code"
            size="large"
            style={{ borderRadius: "8px" }}
            showSearch
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {countryCodes.map((item) => (
              <Option key={item.code} value={item.code}>
                {item.code} ({item.country})
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label={
            <span style={{ fontWeight: "500", color: "#374151" }}>
              Mobile Number
            </span>
          }
          name="mobile"
          rules={[
            { required: true, message: "Please enter mobile number" },
            {
              pattern: /^[0-9]{10,15}$/,
              message: "Please enter a valid mobile number (10-15 digits)",
            },
          ]}
          style={{ marginBottom: "20px" }}
        >
          <Input
            prefix={<PhoneOutlined style={{ color: "#9ca3af" }} />}
            placeholder="Enter mobile number"
            size="large"
            style={{ borderRadius: "8px" }}
            maxLength={15}
          />
        </Form.Item>

        <Form.Item
          label={
            <span style={{ fontWeight: "500", color: "#374151" }}>Country</span>
          }
          name="country"
          rules={[{ required: true, message: "Please select country" }]}
          style={{ marginBottom: "20px" }}
        >
          <Select
            placeholder="Select country"
            size="large"
            style={{ borderRadius: "8px" }}
            showSearch
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {countries.map((country) => (
              <Option key={country} value={country}>
                {country}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label={
            <span style={{ fontWeight: "500", color: "#374151" }}>State</span>
          }
          name="state"
          rules={[
            { required: true, message: "Please enter state" },
            { min: 2, message: "State must be at least 2 characters" },
          ]}
          style={{ marginBottom: "20px" }}
        >
          <Input
            prefix={<EnvironmentOutlined style={{ color: "#9ca3af" }} />}
            placeholder="Enter state"
            size="large"
            style={{ borderRadius: "8px" }}
          />
        </Form.Item>

        <Form.Item
          label={
            <span style={{ fontWeight: "500", color: "#374151" }}>
              PIN Code
            </span>
          }
          name="pincode"
          rules={[
            { required: true, message: "Please enter PIN code" },
            {
              pattern: /^[0-9]{5,10}$/,
              message: "Please enter a valid PIN code (5-10 digits)",
            },
          ]}
          style={{ marginBottom: "20px" }}
        >
          <Input
            placeholder="Enter PIN code"
            size="large"
            style={{ borderRadius: "8px" }}
            maxLength={10}
          />
        </Form.Item>

        <Row gutter={16} style={{ marginTop: "32px" }}>
          <Col span={24}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "12px",
              }}
            >
              <Button
                size="large"
                onClick={handleCancel}
                style={{
                  borderRadius: "8px",
                  fontWeight: "500",
                  minWidth: "100px",
                }}
              >
                Cancel
              </Button>
              <Button
                type="primary"
                size="large"
                loading={loading}
                onClick={handleSubmit}
                style={{
                  borderRadius: "8px",
                  fontWeight: "500",
                  minWidth: "100px",
                  background: "#3b82f6",
                  borderColor: "#3b82f6",
                }}
              >
                Create Client
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default NewClientModal;