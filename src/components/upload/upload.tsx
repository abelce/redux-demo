import * as React from 'react';
import { Upload, Icon, message } from 'antd';
const Dragger = Upload.Dragger;

interface ImyUpload {
  onSuccess: Function;
  onFailed: Function;
}

class MyUpload extends React.Component<ImyUpload> {

  config = {
    name: 'file',
    action: 'http://111.231.192.70:9010/upload',
    onChange: (info: any) => {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        this.props.onSuccess && this.props.onSuccess(info);
        message.success(`${info.file.name} 上传成功`);
      } else if (status === 'error') {
        this.props.onFailed && this.props.onFailed(info);
        message.error(`${info.file.name} 上传失败`);
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
