import * as React from 'react';
import * as style from "./style.scss";
import Tabs from './tab';

class ListContainer extends React.Component {
  
  render () {
      return (
        <div className={style.newContainer}>
          <Tabs/>
          
        </div>
      )
  }
}

export default ListContainer;