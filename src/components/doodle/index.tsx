import * as React from 'react';
import 'css-doodle';

import * as style from './style.scss';
import Draw from './draw';

const Demo1 = () => {
  return (
    <div className={style.cssDoodle} dangerouslySetInnerHTML={{__html: `
        <css-doodle>
        :doodle { 
          @grid: 1x10 / 100%; 
          position: relative;
        }
      
        @place-cell: center; 
        @size: calc(@index() * 10%);
        
        border-radius: 50%;
        border-style: dashed;
        border-width: calc(@index() * 3px); 
        border-color: hsla(
          calc(20 * @index()), 70%, 68%, 
          calc(3 / @index() * .8)
        );
        
        --d: @rand(20s, 40s); 
        --rf: @rand(360deg);
        --rt: calc(var(--rf) + @pick(1turn, -1turn));
      
        animation: spin var(--d) linear infinite;
        @keyframes spin {
          from { transform: rotate(var(--rf)) }
          to   { transform: rotate(var(--rt)) }
        }
      </css-doodle>`
    }}>
    </div>
  )
}

const Demo2 = () => {
  return (
    <div style={{width: '100%', height: '100%'}} dangerouslySetInnerHTML={{__html: 
    `<css-doodle>
    :doodle {
      @grid: 6 / 100%;
    }
    @size: 1em;
    background: hsla(calc(10 * @index()), 60%, 60%, .2);
    clip-path: polygon( 50% 0, 100% 100%, 0 100%);
    transform:
      rotate(@rand(360deg))
      scale(@rand(.6, 1, .1))
      translate(
        @rand(-10em, 10em),
        @rand(-10em, 10em)
      )
    </css-doodle>
  `}}>
    </div>
  )
}

class DoobleDemo extends React.Component {

  render() {
    return(
      <div className={style.page}>
        <div className={style.main}>
          {/* <div className={style['main-bg']}>
            <Demo2/>
          </div> */}
          {/* <div className={style['main-content']}>
            content
          </div> */}
          <Draw></Draw>
        </div>
        <div className={style.side}>
          <Demo1/>
        </div>
      </div>
    )
  }
}

export default DoobleDemo;