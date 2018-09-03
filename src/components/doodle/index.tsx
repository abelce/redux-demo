import * as React from 'react';
import 'css-doodle';

import * as style from './style';
import './index.css';

const Demo1 = () => {
  return (
    <css-doodle use="var(--svg-example)"></css-doodle>
  )
}

class DoobleDemo extends React.Component {

  render() {
    return(
      <div>
        <Demo1/>
      </div>
    )
  }
}

export default DoobleDemo;