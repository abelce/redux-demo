import * as React from 'react';
import Item from './item';
import * as style from './style';

class Image extends React.Component {

  images: Array<string>

  constructor(props: any){
    super(props);
    this.images = ["http://static.tangzhengxiong.com/80952aee-ccdc-4a3a-9c16-975afebcee45"];
  }

  render() {
    return (
      <div>
        {
          this.images.map((img, index) => <Item key={index} url={img}/>)
        }
      </div>
    )
  }
}

export default Image;