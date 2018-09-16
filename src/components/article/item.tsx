import * as moment from 'moment';
import * as React from 'react';
import { 
  Icon,
  Button,
} from 'antd';
import { Link } from 'react-router-dom';
import { article } from '../../types';
import RenderMarked from './renderMarked';
import * as style from './style.scss';
import { isApp } from '../../utils';


type itemType = {
  article: article;
  onDelete: Function;
}

const Item = ({ article, onDelete }: itemType) => {
  return (
    <div className={style.node}>
      <header>
        <h1>
          <Link to={`/article/${article.id}`}>{ article.attributes.title }</Link>
        </h1>
        <div className="options">
          <div className="createTime">
            {moment.unix(parseInt(article.attributes.createTime)).format('YYYY年MM月DD日 hh:mm:ss')}
          </div>
          <span className="tags">
            <Icon type="tags"/>
            {
              article.attributes.tags.split(',')
              .filter((tag: string) => !!tag)
              .map((tag: string, index: number) => {
                return <a key={index} href={`/article/${article.id}`}>{tag}</a>
              })
            }
          </span>
        </div>
      </header>
      <div className="desription">
        <RenderMarked markdowncontent={article.attributes.markdowncontent}/>
      </div>
      {/* <footer>
        { isApp() ? <a onClick={() => onDelete(article.id)}>删除</a>  : <span/> }
        <Link to={`/article/${article.id}`}>
          <Button size="small" type="dashed">查看全文</Button>
        </Link>
      </footer> */}
    </div>
  )
}

export default Item;