import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Form, Input, Button } from 'antd';
import cn from 'classnames';
import { requestLogin } from '../../actions/userAction';
import Style from './style';

const FormItem = Form.Item;

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  };
};

type LoginParams = {
  username: string;
  password: string;
};

@connect(mapStateToProps)
class NormalLoginForm extends React.Component {
  constructor(props: any) {
    super(props);
  }

  componentWillReceiveProps(nextProps: any) {
    if (
      _.get(nextProps, 'user.id') &&
      _.get(nextProps, 'user.id') !== _.get(this.props, 'user.id')
    ) {
      window.location.href = '/';
    }
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: LoginParams) => {
      if (!err) {
        this.props.dispatch(requestLogin({ url: '/auth/login', data: values }));
      }
    });
  };

  handleBlur = type => {
    const { getFieldValue } = this.props.form;
    if (getFieldValue(type)) {
      let after = window.getComputedStyle(this[type].current, ':after');
      after.setProperty('top', '-20');
    }
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    return (
      <div className={Style.login}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem className={cn({ 'has-val': !!getFieldValue('email') })}>
            {getFieldDecorator('email', {
              // rules: [{ required: true, message: 'Please input your username!' }],
            })(<Input type="text" name="username" autoComplete="off" />)}
            <span className="palceholder" data-placeholder="Username" />
          </FormItem>
          <FormItem className={cn({ 'has-val': !!getFieldValue('password') })}>
            {getFieldDecorator('password', {
              // rules: [{ required: true, message: 'Please input your Password!' }],
            })(<Input type="password" />)}
            <span className="palceholder" data-placeholder="Password" />
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Log in
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(NormalLoginForm);
