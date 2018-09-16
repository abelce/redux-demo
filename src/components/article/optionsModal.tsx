import * as React from 'react';
// import { injectIntl, FormattedMessage } from 'react-intl';
import {
  Modal,
  Form,
  Checkbox,
} from 'antd';
const CheckboxGroup = Checkbox.Group;

import { tags } from '../../utils';
import * as style from './style.scss';

class OptionsModal extends React.Component {

  state = {
    tags: [],
  }

  constructor(props) {
    super(props);
    this.state.tags = this.props.tags;
  }

  handleSubmit = () => {
    this.props.onOk && this.props.onOk({
      tags: this.state.tags,
    });
  }

  handleOnChange = (tags: Array<string>) => {
    this.setState({
      tags,
    });
  }

  render() {
    return (
      <Modal
        {...this.props}
        title="文章信息"
        onOk={this.handleSubmit}
      >
        <Form layout="horizontal">
          <Form.Item label='个人分类'>
            <div className={style.tagList}>
              <CheckboxGroup
                options={tags}
                onChange={this.handleOnChange} 
                value={this.state.tags}/>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    )
  } 
}

export default OptionsModal;