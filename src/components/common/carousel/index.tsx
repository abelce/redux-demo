import * as React from 'react';
import { Carousel } from 'antd';
import { CarouselProps } from 'antd/lib/carousel';
import "./style.scss";

interface IMyCarousel extends CarouselProps{
  images: Array<string>
}

// autoplay
class MyCarousel extends React.Component<IMyCarousel, {}> {
  render() {
    const { images } = this.props;
      return (
        <Carousel effect="fade" >
          {/* {images.map(url => <div><a href="#" style={{backgroundImage: `url("${url}")`}}/></div>)} */}
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      )
  }
}

export default MyCarousel;