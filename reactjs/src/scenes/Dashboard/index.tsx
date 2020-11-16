import * as React from 'react';
import { Row, Col, Card } from 'antd';
import './index.less';

export class Dashboard extends React.Component<any> {
  componentDidMount() {
    setTimeout(() => this.setState({ cardLoading: false }), 1000);
    setTimeout(() => this.setState({ lineChartLoading: false }), 1500);
    setTimeout(() => this.setState({ barChartLoading: false }), 2000);
    setTimeout(() => this.setState({ pieChartLoading: false }), 1000);
  }
  state = {
    cardLoading: true,
    lineChartLoading: true,
    barChartLoading: true,
    pieChartLoading: true,
  };
  render() {
    const {lineChartLoading, barChartLoading, pieChartLoading } = this.state;
    return (
      <React.Fragment>
        <Row>
          <Card className={'dashboardBox'} title="Visit Statistics" loading={lineChartLoading} bordered={false}>
          </Card>
        </Row>
        <Row gutter={16}>
          <Col span={16}>
            <Card title="Payment Statistics" className={'dashboardBox'} loading={barChartLoading} bordered={false}>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Browser Usage" className={'dashboardBox'} loading={pieChartLoading} bordered={false}>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default Dashboard;
