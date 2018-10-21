import * as React from 'react';
import * as style from './style.scss';
import { Image } from '../../domain';
import Img from 'react-lazy-imager';
import cn from 'classnames';

interface PItem {
  image: Image;
}

interface SItem {
  loaded: boolean;
}

class Item extends React.Component<PItem, SItem> {
  static defaultProps = {
    image: {},
  };

  state = {
    loaded: false,
  };

  ref: any;

  setRef = (r: any) => {
    this.ref = r;
  };

  onLoad = () => {
    this.setState({
      loaded: true,
    });
  };

  render() {
    const {
      attributes: { url, width, height, svgurl },
    } = this.props.image;
    const { loaded } = this.state;

    return (
      <div
        ref={this.setRef}
        className={style.imageContainer}
        style={{
          width: `${(width * 200) / height}px`,
          flexGrow: (width * 200) / height,
        }}>
        <Img
          src={url}
          thumbSrc={svgurl}
          onLoad={this.onLoad}
          className={cn({ unload: !loaded })}
        />
        <div
          className="placeholder"
          style={{
            paddingBottom: `${(height / width) * 100}%`,
            display: loaded ? 'none' : 'block',
          }}
        />
      </div>
    );
  }
}

export default Item;
