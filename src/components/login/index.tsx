import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Style from './style';
import cn from 'classnames';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  username = null;

  password = null;

  constructor(props: any) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleBlur = type => {
    const { getFieldValue } = this.props.form;
    console.log(getFieldValue(type));
    if (getFieldValue(type)) {
      let after = window.getComputedStyle(this[type].current, ':after');
      console.log(after.getPropertyValue('top'));
      after.setProperty('top', '-20');
    }
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    return (
      <div className={Style.login}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem className={cn({ 'has-val': !!getFieldValue('username') })}>
            {getFieldDecorator('username', {
              // rules: [{ required: true, message: 'Please input your username!' }],
            })(<Input type="text" name="username" autoComplete="off" />)}
            <span
              ref={this.username}
              className="palceholder"
              data-placeholder="Username"
            />
          </FormItem>
          <FormItem className={cn({ 'has-val': !!getFieldValue('password') })}>
            {getFieldDecorator('password', {
              // rules: [{ required: true, message: 'Please input your Password!' }],
            })(<Input type="password" />)}
            <span
              ref={this.password}
              className="palceholder"
              data-placeholder="Password"
            />
          </FormItem>
          <FormItem>
            {/* {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a> */}
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Log in
            </Button>
            {/* Or <a href="">register now!</a> */}
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(NormalLoginForm);
