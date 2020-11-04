import React, { Component } from "react";
import "../style/login.scss";
import { InputItem, Button } from "antd-mobile";
import { createForm } from "rc-form";

class Login extends Component {
  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
      } else {
        console.log("Validation failed");
      }
    });
  };

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="login">
        <InputItem
          {...getFieldProps("username")}
          clear
          placeholder="请输入账号"
        >
          账号：
        </InputItem>
        <InputItem
          {...getFieldProps("password")}
          type="password"
          placeholder="请输入密码"
        >
          密码：
        </InputItem>
        <Button onClick={this.onSubmit}>提交</Button>
      </div>
    );
  }
}

export default createForm()(Login);
