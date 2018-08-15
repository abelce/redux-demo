import * as React from 'react';
import News from './news';
import NewsFlash from './newsFlash';
import * as style from './style.scss';

class Homepage extends React.Component {
  render () {
      return(
          <div className={style.homepage}>
            <News/>
            {/* <NewsFlash/> */}
          </div>
      )
  }
}

export default Homepage;