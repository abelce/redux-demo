import React from 'react';
import { Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { isApp } from '../../utils';
import Style from './style.scss';

@withRouter
class Header extends React.PureComponent {
  historyFactory = type => {
    return () => this.props.history[`go${type}`]();
  };

  handleBack = this.historyFactory('Back');

  handleForward = this.historyFactory('Forward');

  render() {
    return (
      <div className={Style.header}>
        <div className="btn-group">
          <a className="btn" onClick={this.handleBack}>
            <Icon type="left" />
          </a>
          <a className="btn" onClick={this.handleForward}>
            <Icon type="right" />
          </a>
        </div>
        {isApp() ? (
          <div className={Style.create}>
            <Link to="/article/edit/new">写博客</Link>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Header;
