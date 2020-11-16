import * as React from 'react';
import './index.css';
import { Button, Card, Col, Input, Modal, Row } from 'antd';
import { inject, observer } from 'mobx-react';
import AppComponentBase from '../../components/AppComponentBase';
import { L } from '../../lib/abpUtility';
import Stores from '../../stores/storeIdentifier';
import blogStore from '../../stores/blogStore';
import { EntityDto } from '../../services/dto/entityDto';


export interface IBlogProps {
    blogStore: blogStore;
}

export interface IBlogState {
  modalVisible: boolean;
  maxResultCount: number;
  skipCount: number;
  blogId: number;
  filter: string;
}

const Search = Input.Search;
const confirm = Modal.confirm;

@inject(Stores.BlogStore)
@observer
class Blogs extends AppComponentBase<IBlogProps, IBlogState> {
  formRef: any;
  state = {
    modalVisible: false,
    maxResultCount: 10,
    skipCount: 0,
    blogId: 0,
    filter: '',
  };

  async componentDidMount() {
    await this.getAll();
  }
  async getAll() {
    await this.props.blogStore.getAll({ maxResultCount: this.state.maxResultCount, skipCount: this.state.skipCount, keyword: this.state.filter });
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
      this.props.blogStore.CreateBlog();
    } else {
      await this.props.blogStore.get(entityDto);
    }
    this.setState({ blogId: entityDto.id });
    this.Modal();

    if (entityDto.id !== 0) {
      this.formRef.props.form.setFieldsValue({
        ...this.props.blogStore.blogModel,
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
        self.props.blogStore.delete(input);
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
        if (this.state.blogId === 0) {
          await this.props.blogStore.create(values);
        } else {
          await this.props.blogStore.update({ id: this.state.blogId, ...values });
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
    //console.log((this.props.blogStore.blog.items.map(value => value.id)));
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
              <h2>{L('Blog')}</h2>
            </Col>
            <Col
              xs={{ span: 14, offset: 0 }}
              sm={{ span: 15, offset: 0 }}
              md={{ span: 15, offset: 0 }}
              lg={{ span: 1, offset: 21 }}
              xl={{ span: 1, offset: 21 }}
              xxl={{ span: 1, offset: 21 }}
            >
              <Button type="primary" shape="circle" icon="plus"  onClick={() => this.createOrUpdateModalOpen({ id: 0 })}/>
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
            </Col>
          </Row>
        </Card>
      </React.Fragment>
    );
  }
}

export default Blogs;
