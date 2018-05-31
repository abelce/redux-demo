import * as React from 'react';
import * as Marked from 'marked'
import * as markedstyle from './markedstyle.scss';

interface IrenderMarked {
  markdowncontent: string;
}

const RenderMarked = ({markdowncontent = ''}: IrenderMarked) => {
  return (
    <div className={markedstyle.marked} dangerouslySetInnerHTML={{__html: Marked.parse(markdowncontent)}}></div>
  )
}

export default RenderMarked;