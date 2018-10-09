import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as style from './style.scss';
import { Image } from '../../domain';
import Img from 'react-lazy-imager';

interface PItem {
  image: Image
}

interface SItem {
  loaded: boolean
}

class Item extends React.Component<PItem, SItem> {

  static defaultProps = {
    image: {}
  }

  state = {
    loaded: false,
  }

  ref: any

  setRef = (r: any) => {
    this.ref = r;
  }

  onLoad = () => {
    this.setState({
      loaded: true,
    })
  }

  render() {
    const {attributes: {url, width, height, svgurl }} = this.props.image;
    const { loaded } = this.state

    return (
      <div ref={this.setRef}
      className={style.imageContainer} 
      style={{width: `${width * 200/ height}px`, flexGrow: width * 200 / height}}>
        <Img src={url} thumbSrc={svgurl} onLoad={this.onLoad}/>
        <div className="placeholder" style={{paddingBottom: `${height / width * 100}%`, display: loaded ? 'none' : 'block'}}></div>
      </div>
    )
  }
}

export default Item;