import React, { Component } from "react";
import "../style/login.scss";
import { InputItem, Button, WingBlank, WhiteSpace } from "antd-mobile";
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
        <WingBlank>
          <InputItem
            {...getFieldProps("username")}
            labelNumber="3"
            placeholder="请输入账号"
          >
            账号：
          </InputItem>
          <WhiteSpace />
        </WingBlank>
        <WingBlank>
          <InputItem
            {...getFieldProps("password")}
            labelNumber="3"
            type="password"
            placeholder="请输入密码"
          >
            密码：
          </InputItem>
          <WhiteSpace />
        </WingBlank>
        <Button className="login-submit" onClick={this.onSubmit}>提交</Button>
      </div>
    );
  }
}

export default createForm()(Login);
