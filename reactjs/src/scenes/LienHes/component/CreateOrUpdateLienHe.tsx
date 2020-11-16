import * as React from 'react';

import { Form, Input, Modal } from 'antd';

import { FormComponentProps } from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';
import { L } from '../../../lib/abpUtility';
import rules from './createOrUpdateLienHe.validation';

export interface ICreateOrUpdateLienHeProps extends FormComponentProps {
  visible: boolean;
  modalType: string;
  onCreate: () => void;
  onCancel: () => void;
}

class CreateOrUpdateLienHe extends React.Component<ICreateOrUpdateLienHeProps> {
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
      <Modal visible={visible} onCancel={onCancel} onOk={onCreate} title={L('LienHe')} width={550}>
        <Form>
          <FormItem label={L('DiaChi')} {...formItemLayout}>
            {getFieldDecorator('diaChi', { rules: rules.diaChi })(<Input />)}
            
          </FormItem>
          <FormItem label={L('Phone')} {...formItemLayout}>
            {getFieldDecorator('sdt', { rules: rules.sdt })(<Input />)}
          </FormItem>
          <FormItem label={L('Email')} {...formItemLayout}>
            {getFieldDecorator('email')(<Input />)}
          </FormItem>
          <FormItem label={L('FaceBook')} {...formItemLayout}>
            {getFieldDecorator('trangFaceBook')(<Input />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default Form.create<ICreateOrUpdateLienHeProps>()(CreateOrUpdateLienHe);