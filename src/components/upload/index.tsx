import * as React from 'react';
import MyUpload from './upload';
import { Icon, message, Table } from 'antd';
import { connect, DispatchProp } from 'react-redux';
import { requestFileList } from '../../actions/articleAction';
import { requestImageCreate } from '../../actions/imageAction';

import * as style from './style.scss';

interface File {
  id: string;
  fileName: string;
  type: string;
  createDate: string;
  path: string;
}

const mapStateToProps = ({files}: any) => {
  return {
    files: files.list,
    total: files.total,
  }
}

@connect(mapStateToProps)
class Upload extends React.Component {


  pageSize=10
  pageNum=1;

  componentDidMount() {
    this.queryFiles({});
  }

  get pagination() {
    return {
      current: this.pageNum,
      defaultCurrent: 1,
      total: this.props.total,
      pageSize: this.pageSize,
    }
  }

  queryFiles = ({pageSize = 10, pageNum = 1}) => {
    this.props.dispatch(requestFileList({url: '/files', params: {pageSize, pageNum}}));
  }


  handleOnSuccess = ({file:{response, type}}: any) => {
    let imgs: Array<string>;
    imgs = ['image/jpg', 'image/png', 'image/jpeg']; 
    this.queryFiles({});
    // if (imgs.includes(type)) {
      // this.props.dispatch(requestImageCreate({url: '/image', params: {url:  response.url}}));
    // }
  }
  
  handleOnFailed = () => {

  }

  handlePaginationChange = ({pageSize, current: pageNum}, filter, sort) => {
    this.pageSize = pageSize;
    this.pageNum = pageNum;
    this.queryFiles({pageSize, pageNum});
  }

  render() {
    return (
      <div className={style.container}>
        <div className="upload">
          <MyUpload onSuccess={this.handleOnSuccess} onFailed={this.handleOnFailed}/>
        </div>
        <div className="table">
          <Table
            bordered
            dataSource={this.props.files}
            columns={this.columns}
            pagination={this.pagination}
            onChange={this.handlePaginationChange} 
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
      dataIndex: 'path',
      title:'路径',
      key: 'path',
    },
  ]
}

export default Upload
