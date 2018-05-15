import * as React from 'react';
import { 
  Upload,
  Icon, 
  message,
  Select,
  Table,
 } from 'antd';
const Dragger = Upload.Dragger;
const Option = Select.Option;

console.log('upload.tsx')
import { test } from './test';
console.log(test())

class MyUpload extends React.Component {

  props = {
    name: 'file',
    // multiple: true,
    action: '//jsonplaceholder.typicode.com/posts/',
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
  };

  options = [
    {
      id: '1',
      name: 'javascript'
    }, {
      id: '2',
      name: 'jp(e)g',
    }, {
      id: '3',
      name: 'html',
    }, 
  ]

  render() {
    return (
      <div>
        <div>
          <Select>
            {this.options.map(p => <Option value={p.id}>{p.name}</Option>)}
          </Select>
        </div>
        <Dragger {...this.props}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
        </Dragger>

        <div>

        </div>
      </div>
      
    )
  }
}

export default MyUpload;