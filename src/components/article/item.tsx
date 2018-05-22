import * as React from 'react';
import { 
  Tag 
} from 'antd';
import { article } from '../../types'

type itemType = {
  article: article;
}

const Item = ({ article }: itemType) => {
  return (
    <div>
      <h3>{ article.title }</h3>
      <p>{article.description}</p>
      <div>
        <Tag>{article.createTime}</Tag>
      </div>
    </div>
  )
}

export default Item;