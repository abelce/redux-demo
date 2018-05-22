import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout } from 'antd';
import * as style from './style.scss';

class Header extends React.Component {
  render() {
      return(
        <Layout.Header className={style.header}>
          <div className={style.menu}>
            <NavLink exact activeClassName="activeClassName" to="/article">blog</NavLink>
            <NavLink exact activeClassName="activeClassName" to="/">首页</NavLink>
            <NavLink exact activeClassName="activeClassName" to="/upload">上传</NavLink>
            <NavLink exact activeClassName="activeClassName" to="/contact">联系我们</NavLink>
          </div>
          <div>
            登陆
          </div>
        </Layout.Header>
      )
  }
}

export default Header;