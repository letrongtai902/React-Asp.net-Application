import * as React from 'react';

import { Form, Input, Modal } from 'antd';

import { FormComponentProps } from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';
import { L } from '../../../lib/abpUtility';
import rules from './createOrUpdateMenu.validation';

export interface ICreateOrUpdateMenuProps extends FormComponentProps {
  visible: boolean;
  modalType: string;
  onCreate: () => void;
  onCancel: () => void;
}

class CreateOrUpdateMenu extends React.Component<ICreateOrUpdateMenuProps> {
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 6 },
        sm: { span: 6 },
        md: { span: 6 },
        lg: { span: 6 },
        xl: { span: 6 },
        xxl: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 18 },
        sm: { span: 18 },
        md: { span: 18 },
        lg: { span: 18 },
        xl: { span: 18 },
        xxl: { span: 18 },
      },
    };


    const { getFieldDecorator } = this.props.form;
    const { visible, onCancel, onCreate } = this.props;

    return (
      <Modal visible={visible} onCancel={onCancel} onOk={onCreate} title={L('Menu')} width={550}>
        <Form>
          <FormItem label={L('Name')} {...formItemLayout}>
            {this.props.form.getFieldDecorator('ten', { rules: rules.ten })(<Input />)}
            
          </FormItem>
          <FormItem label={L('MenuType')} {...formItemLayout}>
            {getFieldDecorator('menuTypeId', { rules: rules.menuTypeId })(<Input />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default Form.create<ICreateOrUpdateMenuProps>()(CreateOrUpdateMenu);
