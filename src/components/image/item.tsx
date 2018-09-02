import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as style from './style.scss';

class Item extends React.Component {

  state = {
    loaded: false,
  }

  ref: any
  
  componentDidMount() {
    let div = ReactDOM.findDOMNode(this.ref);
    let observer = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio > 0) {
        let img = new Image()
        img.src = this.props.image.attributes.url;
        img.onload = () => {
          this.setState({
            loaded: true
          })
          observer.disconnect();
        }
      }
    })

    observer.observe(div);
  }

  setRef = (r: any) => {
    this.ref = r;
  }

  getSVGUrl = () => {
    return this.props.image.attributes.svgurl ? this.props.image.attributes.svgurl : '';
  }

  render() {
    const {attributes: {url, width, height }} = this.props.image;
    const { loaded } = this.state
    return (
      <div ref={this.setRef} className={style.imageContainer} style={{width: `${width * 200/ height}px`, flexGrow: width * 200 / height}}>
        <img style={{display: loaded ? 'block' : 'none'}} origin-url={url} src={ loaded ? url : this.getSVGUrl()} />
        <div style={{paddingBottom: `${height / width * 100}%`, display: loaded ? 'none' : 'block'}}></div>
      </div>
    )
  }
}

export default Item;