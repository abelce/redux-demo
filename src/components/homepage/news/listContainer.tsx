import * as React from 'react';
import * as style from "./style.scss";
import Tabs from './tab';
import Article from './article';

interface Tag {
  url: string;
  name: string;
}

interface IArticle {
  id: string;
  title: string;
  imgUrl: string;
  abstract: string;
  username: string;
  time:string;
  tags: Array<Tag>;
}

class ListContainer extends React.Component {
  state = {
    articles: [
      {
        id: '213',
        title: '阿里收购先声互联，未来将建2个声学实验室',
        imgUrl: 'https://pic.36krcnd.com/201805/03072727/ionkrqynvm5q4985!heading',
        abstract: '人工智能领域的巨头竞赛。',
        username: '路人甲',
        time: '2018-05-03 18:00',
        tags: [
          {
            id: '1',
            url: '#',
            name: '大公司'
          }
        ]
      }
    ]
  }
  render () {
    const { articles } = this.state;
      return (
        <div className={style.newContainer}>
          <Tabs/>
          {articles.map( article => <Article key={article.id} {...article}/>)}
        </div>
      )
  }
}

export default ListContainer;