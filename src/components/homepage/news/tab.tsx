import * as React from 'react';
import style from './style.scss';

class Tab extends React.Component {
  tabs = [
    {
      id: '1',
      label: '最新文章',
      value: 'last_article',
    },
    {
      id: '2',
      label: '大公司',
      value: 'big_company',
    },
    {
      id: '3',
      label: '消费',
      value: 'cast',
    },
    {
      id: '4',
      label: '娱乐',
      value: 'yule',
    },
    {
      id: '5',
      label: '前沿技术',
      value: 'last_jishu',
    },
  ]

  state = {
    activeTab: 'last_article'
  }

  handleOnClick = (e: any) => {
    debugger
    const attr = Array.from(e.target.attributes).find((attr: HTMLObjectElement) => attr.name === 'value');
    if (attr) {
      this.setState({
        activeTab: attr['value'],
      })
    }
  }

  render() {
    return (
      <ul className="tabs" onClick={this.handleOnClick}>
        {this.tabs.map( tab => <li key={tab.id} 
          value={tab.value} 
          className={this.state.activeTab === tab.value ? style.active : ""}>
            {tab.label}
          </li>)}
      </ul>
    )
  }
}

export default Tab;