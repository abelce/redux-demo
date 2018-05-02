import * as React from 'react';
import Carousel from '../../common/carousel';
import "./style.scss";
import ListContainer from './listContainer';

class News extends React.Component {
    images = [
        'https://pic.36krcnd.com/201805/02004639/n6metsvzz57rvkpp!heading',
        'https://pic.36krcnd.com/201805/02005254/yt4g8mny3wvm9w6d!heading',
        'https://pic.36krcnd.com/201805/02004639/n6metsvzz57rvkpp!heading',
    ]
  render () {
      return (
        <div className="news">
          {/* <Carousel images={this.images}/> */}
          <ListContainer/>
        </div>
      )
  }
}

export default News;