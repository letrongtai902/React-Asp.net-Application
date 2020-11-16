import * as React from 'react';

import { Button, Card, Col, Input, Row, Modal} from 'antd';
import { observer,inject } from 'mobx-react';
import './index.css';
import AppComponentBase from '../../components/AppComponentBase';
import { L } from '../../lib/abpUtility';
import Stores from '../../stores/storeIdentifier';
import gioithieuStore from '../../stores/gioithieuStore';
import { EntityDto } from '../../services/dto/entityDto';
import TextEditor from './components/TextEditor'

export interface IGioiThieuProps {
  gioithieuStore: gioithieuStore;
}

export interface IGioiThieuState {
  modalVisible: boolean;
  maxResultCount: number;
  skipCount: number;
  gioithieuId: number;
  filter: string;
}


const Search = Input.Search;
const confirm = Modal.confirm;

@inject(Stores.GioiThieuStore)
@observer
class GioiThieus extends AppComponentBase<IGioiThieuProps, IGioiThieuState> {
  formRef: any;
  state = {
    modalVisible: false,
    maxResultCount: 10,
    skipCount: 0,
    gioithieuId: 0,
    filter: '',
  };

  async componentDidMount() {
    await this.getAll();
  }
  async getAll() {
    await this.props.gioithieuStore.getAll({ maxResultCount: this.state.maxResultCount, skipCount: this.state.skipCount, keyword: this.state.filter });
  }

  handleTableChange = (pagination: any) => {
    this.setState({ skipCount: (pagination.current - 1) * this.state.maxResultCount! }, async () => await this.getAll());
  };
  Modal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };
  async createOrUpdateModalOpen(entityDto: EntityDto<number>) {
    if (entityDto.id === 0) {
      this.props.gioithieuStore.CreateGioiThieu();
    } else {
      await this.props.gioithieuStore.get(entityDto);
    }
    this.setState({ gioithieuId: entityDto.id });
    this.Modal();

    if (entityDto.id !== 0) {
      this.formRef.props.form.setFieldsValue({
        ...this.props.gioithieuStore.gioithieuModel,
      });
    } else {
      this.formRef.props.form.resetFields();
    }
  }
  delete(input: EntityDto) {
    const self = this;
    confirm({
      title: 'Do you Want to delete these items?',
      onOk() {
        self.props.gioithieuStore.delete(input);
      },
      onCancel() {},
    });
  }
  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields(async (err: any, values: any) => {
      if (err) {
        return;
      } else {
        if (this.state.gioithieuId === 0) {
          await this.props.gioithieuStore.create(values);
        } else {
          await this.props.gioithieuStore.update({ id: this.state.gioithieuId, ...values });
        }
      }

      await this.getAll();
      this.setState({ modalVisible: false });
      form.resetFields();
    });
  };   
  saveFormRef = (formRef: any) => {
    this.formRef = formRef;
  };
  handleSearch = (value: string) => {
    this.setState({ filter: value }, async () => await this.getAll());
  };

  public render() {
    //const { gioithieu } = this.props.gioithieuStore;
    
    return (
      <React.Fragment>
        <Card>
          <Row>
            <Col
              xs={{ span: 4, offset: 0 }}
              sm={{ span: 4, offset: 0 }}
              md={{ span: 4, offset: 0 }}
              lg={{ span: 2, offset: 0 }}
              xl={{ span: 2, offset: 0 }}
              xxl={{ span: 2, offset: 0 }}
            > 
              <h2>{L('Introduction')}</h2>
            </Col>
            <Col
              xs={{ span: 14, offset: 0 }}
              sm={{ span: 15, offset: 0 }}
              md={{ span: 15, offset: 0 }}
              lg={{ span: 1, offset: 21 }}
              xl={{ span: 1, offset: 21 }}
              xxl={{ span: 1, offset: 21 }}
            >
              <Button type="primary" shape="circle" icon="plus"  />
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 10, offset: 0 }}>
              <Search placeholder={this.L('Filter')} onSearch={this.handleSearch} />
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col
              xs={{ span: 24, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              md={{ span: 24, offset: 0 }}
              lg={{ span: 24, offset: 0 }}
              xl={{ span: 24, offset: 0 }}
              xxl={{ span: 24, offset: 0 }}
            >
              <div className="editor">
                
              <TextEditor
                  
                />
              </div>
            </Col>
          </Row>
        </Card>
      </React.Fragment>
    );
  }
}

export default GioiThieus;
