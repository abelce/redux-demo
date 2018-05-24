import * as React from 'react';
// import { 
//   Tag 
// } from 'antd';
import { article } from '../../types'
// import * as style from './style.scss';
import * as Marked from 'marked'

interface Idetail {
  article: article;
}

class Detail extends React.Component<Idetail> {


  render() {
    const input = [
      '# Live demo\n\nChanges are automatically rendered as you type.\n\n* Follows the ',
      '[CommonMark](http://commonmark.org/) spec\n* Renders actual, "native" React DOM ',
      'elements\n* Allows you to escape or skip HTML (try toggling the checkboxes above)',
      '\n* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n',
      '\n## HTML block below\n\n<blockquote>\n    This blockquote will change based ',
      'on the HTML settings above.\n</blockquote>\n\n## How about some code?\n',
      '```js\nvar React = require(\'react\');\nvar Markdown = require(\'react-markdown\');',
      '\n\nReact.render(\n    <Markdown source="# Your markdown here" />,\n    document.',
      'getElementById(\'content\')\n);\n```\n\nPretty neat, eh?\n\n', '## More info?\n\n',
      'Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)\n\n',
      '---------------\n\n',
      'A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal'
  ].join('');
  return (
    <div dangerouslySetInnerHTML={{__html: Marked.parse(input)}}></div>
  )
    
  }
}

export default Detail;