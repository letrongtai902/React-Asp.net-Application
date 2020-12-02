import * as React from 'react';

import { Checkbox, Form, Input, Modal, Tabs } from 'antd';

import CheckboxGroup from 'antd/lib/checkbox/Group';
import { FormComponentProps } from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';
import { L } from '../../../lib/abpUtility';

const TabPane = Tabs.TabPane;
export interface ICreateOrUpdateRoleProps extends FormComponentProps {
    roleStore: RoleStore;
    visible: boolean;
    onCancel: () => void;
    modalType: string;
    onOk: () => void;
    permissions: GetAllPermissionsOutput[];
  }

function createblog() {
    return (
        <div>
            <Modal visible={visible} cancelText={L('Cancel')} okText={L('OK')} onCancel={onCancel} onOk={onCreate} title={'User'}>
            <Tabs defaultActiveKey={'userInfo'} size={'small'} tabBarGutter={64}>
            <TabPane tab={'User'} key={'user'}>
                <FormItem label={L('Name')} {...formItemLayout}>
                {getFieldDecorator('name', { rules: rules.name })(<Input />)}
                </FormItem>
                <FormItem label={L('Surname')} {...formItemLayout} style={{}}>
                {getFieldDecorator('surname', { rules: rules.surname })(<Input />)}
                </FormItem>
                <FormItem label={L('UserName')} {...formItemLayout} style={{}}>
                {getFieldDecorator('userName', { rules: rules.userName })(<Input />)}
                
                </FormItem>
                <FormItem label={L('Email')} {...formItemLayout} style={{}}>
                {getFieldDecorator('emailAddress', { rules: rules.emailAddress })(<Input />)}
                </FormItem>
                {this.props.modalType === 'edit' ? (
                <FormItem label={L('Password')} {...formItemLayout}>
                    {getFieldDecorator('password', {
                    rules: [
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                        {
                        validator: this.validateToNextPassword,
                        },
                    ],
                    })(<Input type="password" />)}
                </FormItem>
                ) : null}
                {this.props.modalType === 'edit' ? (
                <FormItem label={L('Confirm')} {...formItemLayout}>
                    {getFieldDecorator('confirm', {
                    rules: [
                        {
                        required: true,
                        message: L('ConfirmPassword'),
                        },
                        {
                        validator: this.compareToFirstPassword,
                        },
                    ],
                    })(<Input type="password" />)}
                </FormItem>
                ) : null}
                <FormItem label={L('IsActive')} {...tailFormItemLayout}>
                {getFieldDecorator('isActive', { valuePropName: 'checked' })(<Checkbox>Aktif</Checkbox>)}
                </FormItem>
            </TabPane>
            <TabPane tab={L('Roles')} key={'rol'}>
                <FormItem {...tailFormItemLayout}>
                {getFieldDecorator('roleNames', { valuePropName: 'value' })(<CheckboxGroup options={options} />)}
                </FormItem>
            </TabPane>
            </Tabs>
      </Modal>
        </div>
    )
}
export default createblog;
