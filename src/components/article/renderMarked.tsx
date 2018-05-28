import * as React from 'react';
import * as Marked from 'marked'
import * as markedstyle from './markedstyle.scss';

interface IrenderMarked {
  content: string;
}

const RenderMarked = ({content = ''}: IrenderMarked) => {
  return (
    <div className={markedstyle.marked} dangerouslySetInnerHTML={{__html: Marked.parse(content)}}></div>
  )
}

export default RenderMarked;