"use client";
import { Button, Form, Input, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useRouter } from "next/navigation";
import React from "react";


type FormType = {
  name: string;
  password: string;
};

const Signin = () => {
  const [form] = useForm();
  const router = useRouter();

  const handleFormSubmit = (val: FormType) => {
    const userFromLocal = localStorage.getItem("users") || "";

    const parsedData = userFromLocal ? JSON.parse(userFromLocal) : [];
    const findUser = parsedData.filter((data: any) => data.name == val.name);
    console.log({ parsedData, findUser, val });
    if (findUser[0]?.password == val.password) {
      if (findUser[0].isAdmin) {
        console.log("aDming true");
        router.push("/admin");
      } else {
        router.push("/welcome");
      }
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      <div className="">
        <h1 className="text-2xl">SignIn Page</h1>

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

          <Form.Item>
            <Button htmlType="submit"> SignIn </Button>
          </Form.Item>
        </Form>
      </div>
      {/* <Button onClick={redirect("/signin")}>Sign In</Button> */}
    </>
  );
};

export default Signin;
