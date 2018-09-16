import * as React from 'react';
import {
  Input,
  Button,
  Form,
} from 'antd'
import { WrappedFormUtils } from 'antd/lib/form/Form'
import RenderMarked from './renderMarked';
import {Article} from '../../types';

import * as style from './style.scss';

interface Iedit {
  article: Article;
  onShowOptions: Function;
  onTitleChange: Function;
  onSave: Function;
  onMarkdownChange: Function;
  form: WrappedFormUtils
}


class Edit extends React.Component<Iedit> {

  constructor(props: Iedit) {
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
    const { tags, ...others} = {id: article.id, ...article.attributes};
    let val = {};
    for (let key of Object.keys(others)) {
      val[key] = Form.createFormField({value: others[key]});
    }
    val.tags = Form.createFormField({value: tags.split(',')});
    return val;
  }
})(Edit);