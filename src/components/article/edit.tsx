import * as _ from 'lodash';
import * as React from 'react';
import {
  Input,
  Button,
  Form,
} from 'antd'
import { connect } from 'react-redux';
import RenderMarked from './renderMarked';
import * as style from './style.scss';
import Modals from '../common/modals';
import OptionsModal from './optionsModal';
import {Article} from '../../types';

class Edit extends React.Component {

  constructor(props) {
    super(props);
    const {getFieldDecorator} = this.props.form;
    getFieldDecorator('tags');
  }

  render() {
    const { article, onShowOptions, onTitleChange, onSave, onMarkdownChange, form: { getFieldDecorator, getFieldValue } } = this.props;
    return (
      <Form className={style.edit}>
        <header>
          <div className="header">
              {
                getFieldDecorator('title')(
                  <Input placeholder="请输入标题"/>
                )
              }
            <Button onClick={() => onSave(this.props.form)}>保存</Button>
          </div>
        </header>
        <div className="content">
          <div className="editor">
            {
              getFieldDecorator('markdowncontent')(
                <Input.TextArea/>
              )
            }
          </div>
          <div className="preview">
            <RenderMarked markdowncontent={getFieldValue('markdowncontent')}/>
          </div>
        </div>
      </Form>
    )
  }
}

export default Form.create({
  mapPropsToFields: ({article}) => {
    const {tags, ...others} = article;
    let val = {};
    for (let key of Object.keys(others)) {
      val[key] = Form.createFormField({value: article[key]});
    }
    val.tags = Form.createFormField({value: tags.split(',')});
    return val;
  }
})(Edit);