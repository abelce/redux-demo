import * as React from 'react';
import * as style from './style.scss';
const Noise = require('../../assets/script/noise.js');


const WIDTH = 600;
const HEIGHT = 600;
let scl = 20;
let cols = Math.floor(WIDTH / scl);
let rows = Math.floor(HEIGHT / scl);
let inc = 0.09;

class Draw extends React.Component {
  refCanvas = null
  ctx = null;

  componentDidMount() {
    this.draw();
  }

  setRef = (target: any) => {
    this.refCanvas = target;
  }

  beginDraw = () => {
    let cvs = this.refCanvas;
    this.ctx = cvs.getContext("2d");
  }

  endDraw = () => {
    this.ctx = null;
  }

  rect = (sx: number, sy: number, fx: number, fy: number) => {
    this.ctx.beginPath();
    this.ctx.rect(sx, sy, fx, fy);
  }

  fill = (c = 255) => {
    this.ctx.fillStyle = `rgb(${c}, ${c}, ${c})`;
    this.ctx.fill();
    // this.ctx.closePath();
  }
  stroke = (c=0) => {
    this.ctx.strokeStyle = `rgb(${c},${c},${c})`
    this.ctx.stroke();
  }

  draw = () => {
    this.beginDraw();
    let yoff = 0;
    for(let x = 0; x < cols; x++) {
      let xoff = 0;
      for(let y = 0; y < rows; y++) {
        xoff += inc;
        // this.rect(x * scl, y * scl, scl, scl);
        let angle = Noise.generator.noise2d(xoff, yoff) * Math.PI * 2;
        // this.fill(r)
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.translate(x * scl, y * scl);
        this.ctx.rotate(angle);
        this.ctx.moveTo(0,0);
        this.ctx.lineTo(scl, 0);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore();
        // this.ctx.translate(-x * scl, -y * scl);
        
      }
      yoff += inc;
    }
    // this.endDraw();

    setTimeout(() => {
      // this.ctx.clearRect(0,0,WIDTH, HEIGHT);
      // this.draw();
      // this.ctx = null;

    }, 100);
  }

  render() {
    return (
      <div className={style.draw}>
        <canvas ref={this.setRef} width={WIDTH} height={HEIGHT} style={{width: WIDTH + 'px', height: HEIGHT + 'px'}}></canvas>
      </div>
    )
  }
}

export default Draw;