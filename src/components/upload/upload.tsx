import * as React from 'react';
import { Upload, Icon, message } from 'antd';
const Dragger = Upload.Dragger;
import { url } from '../../config';

console.log('upload.tsx')
import { test } from './test'
// import Table from '../common/table/table';

interface IState {

}



class MyUpload extends React.Component {

  config = {
    name: 'file',
    action: 'http://111.231.192.70:9010/upload',
    onChange(info: any) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  }

  render() {

    return (
        <Dragger {...this.config}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
        </Dragger>
      
    )
  }



}

export default MyUpload;