import * as React from 'react';
import "./style.scss";
import Tabs from './tab';

class ListContainer extends React.Component {
  
  render () {
      return (
        <div className="newContainer">
        <Tabs/>
          
        </div>
      )
  }
}

export default ListContainer;