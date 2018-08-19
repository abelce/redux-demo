import * as React from 'react';
import * as style from './style.scss';

class Item extends React.Component {

  state = {
    loaded: false,
  }
  
  componentDidMount() {
    let img = new Image()
    img.src = this.props.image.attributes.url;
    img.onload = () => {
      this.setState({
        loaded: true
      })
    }
  }

  render() {
    const {attributes: {url, width, height }} = this.props.image;
    const { loaded } = this.state
    return (
      <div className={style.imageContainer} style={{width: `${width * 200/ height}px`, flexGrow: width * 200 / height}}>
        <img style={{display: loaded ? 'block' : 'none'}} origin-url={url} src={url} />
        <div style={{paddingBottom: `${height / width * 100}%`, display: loaded ? 'none' : 'block'}}></div>
      </div>
    )
  }
}

export default Item;