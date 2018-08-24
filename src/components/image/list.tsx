import * as React from 'react';
import Item from './item';
import * as style from './style';
import {connect} from 'react-redux'
import {requestImageList} from '../../actions/imageAction'

const mapStateToProps = (state: any) => {
  return {
    images: state.images.ids.map((id: string) => state.images.all[id]) || []
  }
}
@connect(mapStateToProps)
class Image extends React.Component {

  mountedIndex = 0;
  constructor(props: any){
    super(props);
  }

  componentDidMount() {
    this.queryImages();
  }

  queryImages = () => {
    this.props.dispatch(requestImageList('/image'));
  }

  
  
  render() {
    return (
      <div className={style.list}>
        {
          this.props.images.map((img, index) => <Item key={img.id} image={img}/>)
        }
      </div>
    )
  }
}

export default Image;