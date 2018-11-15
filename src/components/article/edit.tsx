import * as React from 'react';
import { Input, Button, Form } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { Article } from '../../types';

import * as style from './style.scss';

interface Iedit {
  article: Article;
  onShowOptions: Function;
  onTitleChange: Function;
  onSave: Function;
  onMarkdownChange: Function;
  form: WrappedFormUtils;
}

class Edit extends React.Component<Iedit> {
  constructor(props: Iedit) {
    super(props);
    const { getFieldDecorator } = this.props.form;
    getFieldDecorator('tags');
  }

  testEditor = null;

  componentDidMount() {
    const { getFieldValue, getFieldDecorator } = this.props.form;
    getFieldDecorator('markdowncontent');
    this.testEditor = editormd('test-editormd', {
      width: '100%',
      height: '100%',
      path: '../../assets/plugins/editor/lib/',
      theme: 'dark',
      previewTheme: 'dark',
      editorTheme: 'pastel-on-dark',
      markdown: getFieldValue('markdowncontent'),
      codeFold: true,
      //syncScrolling : false,
      saveHTMLToTextarea: true, // 保存 HTML 到 Textarea
      searchReplace: true,
      //watch : false,                // 关闭实时预览
      htmlDecode: true, // 开启 HTML 标签解析，为了安全性，默认不开启
      //toolbar  : false,             //关闭工具栏
      //previewCodeHighlight : false, // 关闭预览 HTML 的代码块高亮，默认开启
      emoji: true,
      taskList: true,
      tocm: true, // Using [TOCM]
      tex: true, // 开启科学公式TeX语言支持，默认关闭
      flowChart: true, // 开启流程图支持，默认关闭
      sequenceDiagram: true, // 开启时序/序列图支持，默认关闭,
      //dialogLockScreen : false,   // 设置弹出层对话框不锁屏，全局通用，默认为true
      //dialogShowMask : false,     // 设置弹出层对话框显示透明遮罩层，全局通用，默认为true
      //dialogDraggable : false,    // 设置弹出层对话框不可拖动，全局通用，默认为true
      //dialogMaskOpacity : 0.4,    // 设置透明遮罩层的透明度，全局通用，默认值为0.1
      //dialogMaskBgColor : "#000", // 设置透明遮罩层的背景颜色，全局通用，默认为#fff
      imageUpload: true,
      imageFormats: ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'],
      imageUploadURL: './php/upload.php',
      onload: () => {
        // console.log('onload', this);
        //this.fullscreen();
        //this.unwatch();
        //this.watch().fullscreen();
        //this.setMarkdown("#PHP");
        //this.width("100%");
        //this.height(480);
        //this.resize("100%", 640);
      },
    });
  }

  handleSave = () => {
    let markdowncontent = this.testEditor.getMarkdown();
    this.props.form.setFieldsValue({ markdowncontent });
    setTimeout(() => {
      this.props.onSave(this.props.form);
    }, 10);
  };
  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <div className={style.edit}>
        <header>
          <div className="header">
            {getFieldDecorator('title')(<Input placeholder="请输入标题" />)}
            <Button onClick={this.handleSave}>保存</Button>
          </div>
        </header>
        <div className="content">
          <div id="test-editormd" />
        </div>
      </div>
    );
  }
}

export default Form.create({
  mapPropsToFields: ({ article }) => {
    const { tags, ...others } = { id: article.id, ...article.attributes };
    let val = {};
    for (let key of Object.keys(others)) {
      val[key] = Form.createFormField({ value: others[key] });
    }
    val.tags = Form.createFormField({ value: tags.split(',') });
    return val;
  },
})(Edit);
