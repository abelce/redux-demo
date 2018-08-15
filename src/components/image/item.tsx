import * as React from 'react';
import * as style from './style.scss';

type Item = {
  url: string
}

const Item = ({url}) => {
  return (
    <div className={style.imageContainer}>
      <img src={url} />
    </div>
  )
}
export default Item;