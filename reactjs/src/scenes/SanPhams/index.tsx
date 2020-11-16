import * as React from 'react';

import { Button, Card, Col, Dropdown, Input, Menu, Modal, Row, Table } from 'antd';
import { inject, observer } from 'mobx-react';

import AppComponentBase from '../../components/AppComponentBase';
import CreateOrUpdateSanPham from './component/CreateOrUpdateSanPham';
import { EntityDto } from '../../services/dto/entityDto';
import { L } from '../../lib/abpUtility';
import Stores from '../../stores/storeIdentifier';
import SanPhamStore from '../../stores/sanphamStore';
export interface ISanPhamProps {
  sanphamStore: SanPhamStore;
}

export interface ISanPhamState {
  modalVisible: boolean;
  maxResultCount: number;
  skipCount: number;
  sanphamId: number;
  filter: string;
}

const confirm = Modal.confirm;
const Search = Input.Search;

@inject(Stores.SanPhamStore)
@observer
class SanPhams extends AppComponentBase<ISanPhamProps, ISanPhamState> {
  formRef: any;

  state = {
    modalVisible: false,
    maxResultCount: 10,
    skipCount: 0,
    sanphamId: 0,
    filter: '',
  };

  async componentDidMount() {
    await this.getAll();
  }

  async getAll() {
    await this.props.sanphamStore.getAll({ maxResultCount: this.state.maxResultCount, skipCount: this.state.skipCount, keyword: this.state.filter });
  }

  handleTableChange = (pagination: any) => {
    this.setState({ skipCount: (pagination.current - 1) * this.state.maxResultCount! }, async () => await this.getAll());
  };

  Modal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  async createOrUpdateModalOpen(entityDto: EntityDto) {
    if (entityDto.id === 0) {
      this.props.sanphamStore.CreateSanPham();
    } else {
      await this.props.sanphamStore.get(entityDto);
      //console.log(entityDto.id);
    }

    this.setState({ sanphamId: entityDto.id });
    this.Modal();

    if (entityDto.id !== 0) {
      this.formRef.props.form.setFieldsValue({
        ...this.props.sanphamStore.sanphamModel,
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
        self.props.sanphamStore.delete(input);
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
        if (this.state.sanphamId === 0) {
          await this.props.sanphamStore.create(values);
        } else {
          await this.props.sanphamStore.update({ id: this.state.sanphamId, ...values });
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
    const { sanpham } = this.props.sanphamStore;
    const columns = [
      { title: L('Name'), dataIndex: 'ten', key: 'ten', width: 150, render: (text: string) => <div>{text}</div> },
      { title: L('MoTa'), dataIndex: 'moTa', key: 'moTa', width: 150, render: (text: string) => <div>{text}</div> },
      { title: L('HinhAnh'), dataIndex: 'hinhAnh', key: 'hinhAnh', width: 150, render: (text: string) => <div>< img  width="80px" height="60px" src={text} alt=''/></div> },
      { title: L('LoaiId'), dataIndex: 'loaiId', key: 'loaiId', width: 150, render: (text: number) => <div>{text}</div> },
      {
        title: L('Actions'),
        width: 150,
        render: (text: string, item: any) => (
          <div>
            <Dropdown
              trigger={['click']}
              overlay={
                <Menu>
                  <Menu.Item onClick={() => this.createOrUpdateModalOpen({ id: item.id })}>{L('Edit')}</Menu.Item>
                  <Menu.Item onClick={() => this.delete({ id: item.id })}>{L('Delete')}</Menu.Item>
                </Menu>
              }
              placement="bottomLeft"
            >
              <Button type="primary" icon="setting">
                {L('Actions')}
              </Button>
            </Dropdown>
          </div>
        ),
      },
    ];

    return (
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
            <h2>{L('Product')}</h2>
          </Col>
          <Col
            xs={{ span: 14, offset: 0 }}
            sm={{ span: 15, offset: 0 }}
            md={{ span: 15, offset: 0 }}
            lg={{ span: 1, offset: 21 }}
            xl={{ span: 1, offset: 21 }}
            xxl={{ span: 1, offset: 21 }}
          >
            <Button type="primary" shape="circle" icon="plus" onClick={() => this.createOrUpdateModalOpen({ id: 0 })} />
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
            <Table
              rowKey="id"
              size={'default'}
              bordered={true}
              pagination={{ pageSize: this.state.maxResultCount, total: sanpham === undefined ? 0 : sanpham.totalCount, defaultCurrent: 1 }}
              columns={columns}
              loading={sanpham === undefined ? true : false}
              dataSource={sanpham === undefined ? [] : sanpham.items}
              onChange={this.handleTableChange}
            />
          </Col>
        </Row>
        <CreateOrUpdateSanPham
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.modalVisible}
          onCancel={() =>
            this.setState({
              modalVisible: false,
            })
          }
          modalType={this.state.sanphamId === 0 ? 'edit' : 'create'}
          onCreate={this.handleCreate}
        />
      </Card>
    );
  }
}

export default SanPhams;
