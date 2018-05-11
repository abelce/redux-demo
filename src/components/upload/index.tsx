import * as React from 'react';
import MyUpload from './upload';
import * as style from './style.scss';

class Upload extends React.Component {

  render() {
    return (
      <div className={style.container}>
        <MyUpload/>
      </div>
    )
  }
}

export default Upload