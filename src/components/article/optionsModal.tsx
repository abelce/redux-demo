import * as React from 'react';
import {
  Modal,
  Form,
  Select,
} from 'antd';

const types = [{
  
}]

class OptionsModal extends React.Component {
  render() {
    const { form: { getFieldDecorator } } = this.props;
    return (
      <Modal
        {...this.props}
        title="文章信息"
      >
        <Form>
          <Form.Item>
            {getFieldDecorator('type')(
              <Select>

              </Select>
            )}
          </Form.Item>
        </Form>
      </Modal>
    )
  } 
}

const proccessFields = (obj) => {
  return Reflect.ownKeys(obj).map(key => Form.createFormField({value: obj[key]}))
}

export default Form.create({
  mapPropsToFields: ({ article: { type, tags } }) => {
    // const val = {};
    let ret = {
      type, tags
    }
    return proccessFields(ret);
  }
})(OptionsModal);