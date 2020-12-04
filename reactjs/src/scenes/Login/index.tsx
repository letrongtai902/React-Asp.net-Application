import './index.less';

import * as React from 'react';

import { Button, Checkbox, Divider, Form, Input } from 'antd';
import { inject, observer } from 'mobx-react';

import AccountStore from '../../stores/accountStore';
import AuthenticationStore from '../../stores/authenticationStore';
import { FormComponentProps } from 'antd/lib/form';
import { L } from '../../lib/abpUtility';
import { Redirect } from 'react-router-dom';
import SessionStore from '../../stores/sessionStore';
import Stores from '../../stores/storeIdentifier';
import rules from './index.validation';
import imageFormLogin from '../../images/user.png';

const FormItem = Form.Item;
declare var abp: any;

export interface ILoginProps extends FormComponentProps {
  authenticationStore?: AuthenticationStore;
  sessionStore?: SessionStore;
  accountStore?: AccountStore;
  history: any;
  location: any;
}

@inject(Stores.AuthenticationStore, Stores.SessionStore, Stores.AccountStore)
@observer
class Login extends React.Component<ILoginProps> {
  handleSubmit = async (e: any) => {
    e.preventDefault();
    const { loginModel } = this.props.authenticationStore!;
    await this.props.form.validateFields(async (err: any, values: any) => {
      if (!err) {
        await this.props.authenticationStore!.login(values);
        sessionStorage.setItem('rememberMe', loginModel.rememberMe ? '1' : '0');
        const { state } = this.props.location;
        window.location = state ? state.from.pathname : '/';
      }
    });
  };
  public render() {
    let { from } = this.props.location.state || { from: { pathname: '/' } };
    if (this.props.authenticationStore!.isAuthenticated) return <Redirect to={from} />;

    const { loginModel } = this.props.authenticationStore!;
    const { getFieldDecorator, getFieldValue } = this.props.form;
    return (
       <div className="container">
           <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-12 col-md-9" style={{paddingTop:'5%'}}>
                  <div className="card o-hidden border-0 shadow-lg my-5"  >
                      <div className="card-body p-0" >
                          <div className="row">
                              <div className="col-lg-6 d-none d-lg-block bg-login-image" style={{backgroundImage:imageFormLogin}}></div>
                              <div className="col-lg-6">
                                  <div className="p-5">
                                      <div className="text-center">
                                          <h1 className="h4 text-gray-900 mb-4">Chào mừng trở lại!</h1>
                                      </div>
                                      <Form className="user" onSubmit={this.handleSubmit}>
                                          <div className="form-group" >
                                              <FormItem>
                                              {getFieldDecorator('userNameOrEmailAddress', { rules: rules.userNameOrEmailAddress })(
                                                    <Input className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..."
                                                        />
                                              )}
                                              </FormItem>
                                          </div>
                                          <div className="form-group">
                                              <FormItem>
                                              {getFieldDecorator('password', { rules: rules.password })(
                                                  <Input type="password" className="form-control form-control-user"
                                                      id="exampleInputPassword" placeholder="Password"/>
                                              )}
                                              </FormItem>
                                          </div>
                                          <div className="form-group">
                                              <div className="custom-control custom-checkbox small">
                                                  <Checkbox checked={loginModel.rememberMe} onChange={loginModel.toggleRememberMe} style={{ paddingRight: 8 }}  />
                                                    {L('RememberMe')}
                                              </div>
                                          </div>
                                          <a href="index.html" className="btn btn-primary btn-user btn-block">
                                              <Button style={{ backgroundColor: 'transparent', color: 'white', borderRadius:'8px',height:'0px', borderColor:'transparent' }} htmlType={'submit'}>
                                                  Login
                                              </Button>
                                          </a>
                                          
                                          <Divider> Phương thức đăng nhập khác </Divider>

                                          <a href="index.html" className="btn btn-google btn-user btn-block">
                                              <i className="fab fa-google fa-fw"></i> Login with Google
                                          </a>
                                      </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
           </div>
    );
  }
}
export default Form.create()(Login);
