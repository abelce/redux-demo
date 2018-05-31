import * as React from 'react';
import { 
  Tag 
} from 'antd';
import { Link } from 'react-router-dom';
import { article } from '../../types'
import * as style from './style.scss';


type itemType = {
  article: article;
}

const Item = ({ article }: itemType) => {
  return (
    <div className={style.node}>
      <h1>
        <Link to={`/article/${article.id}`}>{ article.title }</Link>
      </h1>
      <div className="header">
        <div className="submitted"></div>
        <div className="tags"></div>
      </div>
      <p>{article.description}</p>
      <div>
        <Tag>{article.createTime}</Tag>
      </div>
    </div>
  )
}

export default Item;