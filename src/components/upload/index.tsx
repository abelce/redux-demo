import * as React from 'react';
import MyUpload from './upload';
import { Icon, message, Table } from 'antd';
import * as style from './style.scss';

interface File {
  id: string;
  fileName: string;
  type: string;
  createDate: string;
  path: string;
}

class Upload extends React.Component {
  state = {
    data:[{
      id: '123',
      fileName: '1.jpg',
      type: 'jpg',
      createDate: '2018-5-15',
      path: '/data/upload_files'
    }]
  }

  render() {
    return (
      <div className={style.container}>
        <div className="upload">
          <MyUpload/>          
        </div>
        <div className="table">
          <Table 
            dataSource={this.state.data}
            columns={this.columns}
          />
        </div>
      </div>
    )
  }

  columns = [
    {
      dataIndex: 'id',
      title:'编号',
      key: 'id',
    },{
      dataIndex: 'fileName',
      title:'文件名',
      key: 'fileName',
    },{
      dataIndex: 'type',
      title:'类型',
      key: 'type',
    },{
      dataIndex: 'createDate',
      title:'创建时间',
      key: 'createDate',
    },{
      dataIndex: 'createDate',
      title:'创建时间',
      key: 'createDate',
    },{
      dataIndex: 'path',
      title:'',
      key: 'path',
    },
  ]
}

export default Upload
