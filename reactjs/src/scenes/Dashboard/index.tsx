import { DatePicker,Button,message, Calendar, Badge, Card} from 'antd';
import React, { useState } from 'react'

function Dashboard(props) {
  const [datefrom,setdatefrom] = useState(null);
  const [dateto,setdateto] = useState(null);
  const handleChangefrom = value => {
    message.info(`Đã chọn ngày bắt đầu: ${value?value.format('YYYY-MM-DD'):'None'}`);
    setdatefrom(value);
    console.log(value.d);
  };
  const handleChangeto = value =>{
    message.info(`Đã chọn ngày kết thúc: ${value?value.format('YYYY-MM-DD'):'None'}`);
    setdateto(value);
    console.log(value);
  };
  const handlesubmit = () =>{
    console.log('Đã submit ngày tháng');
  }
  const getListData = (value) =>{
      let listData;
      switch (value.date()) {
        case 8:
          listData = [
            { type: 'success', content: 'This is usual event.' },
          ];
          break;
        case 10:
          listData = [
            { type: 'success', content: 'This is usual event.' },
          ];
          break;
        case 15:
          listData = [
            { type: 'warning', content: 'This is warning event' },
          ];
          break;
        default:
      }
    return listData || [];
  }
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const monthCellRender = (value) => {
    const num = 1394;
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
  return (
      <div>
        <Card style={{borderRadius:'8px'}}>
             From <DatePicker onChange={handleChangefrom}/> To <DatePicker onChange={handleChangeto}/>
            <Button type="primary" style={{ marginLeft: 8, marginTop: 20}} onClick={handlesubmit}>
                  Chọn Ngày
            </Button>
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
        </Card>
      </div>
  )
}
export default Dashboard;

