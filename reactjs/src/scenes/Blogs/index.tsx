import React from 'react';
import { Avatar, Button, Card, Col, Divider, List, Row} from 'antd';
import { L } from '../../lib/abpUtility';
import Meta from 'antd/lib/card/Meta';


const data = [
    {
      title: 'Bài viết thứ nhất',
    },
  ];

const handleOnclick = () => {
    console.log("đã click")
}

function blog(props) {
    return (
        <div>
            <Card style={{borderRadius:'8px'}}>
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
                        <Button type="primary" shape="circle" icon="plus"/>
                    </Col>
                </Row>
                <Divider> Danh Sách bài viết của tôi </Divider>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Card
                                    style={{ width: '50%', borderRadius:'4px', position:'relative', marginTop:'20px', marginLeft:'25%' }}
                                    cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                    }
                                    onClick={handleOnclick}>
                                    <Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={item.title}
                                            description="mô tả bài biết"
                                    />
                            </Card>
                        </List.Item>
                    )}
                />
            </Card>
        </div>
    )
}
export default blog;

