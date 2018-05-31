import * as React from 'react';
import {
  Input,
  Button,
} from 'antd'
import RenderMarked from './renderMarked';
import * as style from './style.scss';


class Edit extends React.Component {
  state = {
    markdowncontent: ''
  }

  handleMarkdownChange = (e: any) => {
    this.setState({
      markdowncontent: e.target.value,
    });
  }

  render() {
    return (
      <div className={style.edit}>
        <header>
          <div className="header">
            <Input placeholder="请输入标题"/>
            <Button>保存</Button>
          </div>
        </header>
        <div className="content">
          <div className="editor">
            <Input.TextArea defaultValue={this.state.markdowncontent} onChange={this.handleMarkdownChange}/>
          </div>
          <div className="divider"></div>
          <div className="preview">
            <RenderMarked markdowncontent={this.state.markdowncontent}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Edit;