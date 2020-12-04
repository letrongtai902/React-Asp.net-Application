import './index.less';
import * as React from 'react';
import { Avatar, Badge, Col, Dropdown, Icon, Menu, Row } from 'antd';
import { L } from '../../lib/abpUtility';
import { Link } from 'react-router-dom';
import profilePicture from '../../images/user.png';

export interface IHeaderProps {
  collapsed?: any;
  toggle?: any;
}

const userDropdownMenu = (
  <Menu>
    <Menu.Item key="2" style={{marginTop: '5px'}}>
      <Link to="/">
        <Icon type="profile" />
        <span> {L('My Profile')}</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="2" style={{marginTop: '5px'}}>
      <Link to="/logout" >
        <Icon type="logout" />
        <span> {L('Logout')}</span>
      </Link>
    </Menu.Item>
  </Menu>
);

export class Header extends React.Component<IHeaderProps> {
  render() {
    return (
      <Row className={'header-container'} style={{backgroundColor:'#0C1353'}}>
        <Col style={{ textAlign: 'left' }} span={12}>
          <Icon className="trigger" type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.props.toggle} />
        </Col>
        <Col style={{ padding: '0px 15px 0px 15px', textAlign: 'right' }} span={12}>
          <Dropdown overlay={userDropdownMenu} trigger={['click']}>
            <Badge style={{}} count={0}>
              <Avatar style={{ height: 50, width: 50 }} shape="circle" alt={'profile'} src={profilePicture} />
            </Badge>
          </Dropdown>
        </Col>
      </Row>
    );
  }
}

export default Header;
