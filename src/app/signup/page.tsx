"use client";
import { Button, Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useRouter } from "next/navigation";
import React from "react";

export type FormType = {
  name: string;
  password: string;
  isAdmin: boolean;
};

const SignupForm = () => {
  const [form] = useForm();
  const router = useRouter();

  const handleFormSubmit = (val: FormType) => {
    console.log({ val });
    const userFromLocal = localStorage.getItem("users") || "";
    const parsedData = userFromLocal ? JSON.parse(userFromLocal) : [];
    console.log(userFromLocal);
    const users = [val, ...parsedData];
    console.log("users", { users, parsedData, userFromLocal });
    localStorage.setItem("users", JSON.stringify(users));
    router.push("/signin");
  };
  return (
    <>
      <div className="">
        <h1 className="text-2xl">Signup Page</h1>
        <Form form={form} onFinish={handleFormSubmit}>
          <Form.Item
            name="name"
            label="User Name"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input name="name" type="text" />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Input name="password" type="password" />
          </Form.Item>
          <Form.Item
            label="Admin"
            name="isAdmin"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Select>
              <Select.Option value={true}>yes</Select.Option>
              <Select.Option value={false}>No</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit"> Signup </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default SignupForm;
