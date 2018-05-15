import * as React from 'react';
import * as style from './style.scss';
import { Link } from 'react-router-dom';


interface Tag {
  url: string;
  name: string;
}

interface IArticle {
  key: string,
  id: string;
  title: string;
  imgUrl: string;
  abstract: string;
  username: string;
  time:string;
  tags: Array<Tag>;
}
// https://pic.36krcnd.com/201805/03072727/ionkrqynvm5q4985!heading
class Article extends React.Component<IArticle> {

  render() {
    return (
      <div className={style.article}>
        <Link to={this.props.id}>
          <div className="img_box">
            <div>
              <img src={this.props.imgUrl} />
            </div>
          </div>
          <div className="intro">
            <h3>{this.props.title}</h3>
            <div className="abstract">{this.props.abstract}</div>
          </div>
          <div className="info">
            <div className="info-list">
              <div className="user-info">
                {this.props.username}
                <span>.</span>
              </div>
              <div className="time-div">
              <span className="time" title={this.props.time}> {"小时前"}</span>
            </div>
            </div>
            
          <div className="tags-list">
            {
              this.props.tags.map((tag, index) => (
                <span >
                  <a href={tag.url}>{tag.name}</a>
                  {
                    index !== this.props.tags.length - 1 && <span>， </span>
                  }
                </span>
              ))
            }
          </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default Article;