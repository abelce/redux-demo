import * as React from 'react';
import News from './news';
import NewsFlash from './newsFlash';
import './style.scss';

class Homepage extends React.Component {
  render () {
      return(
          <div className="homepage">
            <News/>
            <NewsFlash/>
          </div>
      )
  }
}

export default Homepage;