import * as React from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

class Slider extends React.Component {
  
  state = {
    selectedKey: 'images',
  }

  constructor(props: any) {    
    super(props);
  }

  handleMenuChange = ({key} : any) => {
    this.setState({
      selectedKey: key,
    })
  }

  render() {
    return (
      <div>
        <div className="logo" />
        <Menu 
        theme="light" 
        mode="inline" 
        defaultSelectedKeys={[this.state.selectedKey]}
        onSelect={this.handleMenuChange}>
            <Menu.Item key="images">
              <NavLink exact to="/images">
              <Icon type="book" />
                <span className="nav-text">图片</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="upload">
              <NavLink to="/upload">
                <Icon type="cloud-upload" />
                <span className="nav-text">文件上传</span>
              </NavLink>
            </Menu.Item>
          <Menu.Item key="article">
            <NavLink to="/article">
              <Icon type="upload" />
              <span className="nav-text">文章</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="doodle">
            <NavLink to="/doodle">
              <Icon type="upload" />
              <span className="nav-text">css-doodle</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default Slider;