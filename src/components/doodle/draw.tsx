import * as React from 'react';
import * as style from './style.scss';
import Noise from '../../assets/script/noise.js';
import { x } from '../article/markedstyle.scss';


const WIDTH = 600;
const HEIGHT = 600;
let scl = 20;
let cols = Math.floor(WIDTH / scl);
let rows = Math.floor(HEIGHT / scl);
let inc = 0.09;
let zoff = 0.01;

// const point = (x, y) => {
//   this.x = x;
//   this.y = y;
// }

const createVector = function(x, y) {
  this.x = x;
  this.y = y;
  this.add = function(obj) {
    this.x += obj.x;
    this.y += obj.y;
  }
  this.mult = function(val) {
    this.x *= val;
    this.y *= val;
  }
}

const Particle = function() {
  this.pos = new createVector(Math.random() * WIDTH, Math.random() * HEIGHT);
  this.vel = new  createVector(Math.random()*(Math.random() > 0.5 ? 1 : -1) * 10, Math.random()*(Math.random()>0.5?1:-1) * 10);
  this.acc = new createVector(0, 0);

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.edges = function() {
    if (this.pos.x < 0) this.pos.x = WIDTH;
    if (this.pos.x > WIDTH) this.pos.x = 0;
    if (this.pos.y < 0) this.pos.y = HEIGHT;
    if (this.pos.y > HEIGHT) this.pos.y = 0;

  }

}

const particles = [];

var flowField = []

class Draw extends React.Component {
  refCanvas = null
  ctx = null;

  componentDidMount() {


    flowField = new Array(rows * cols);

    for(let i = 0; i < 100; i++) {
      particles[i] = new Particle();
    }
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

  show = () => {
    for(let i = 0; i < 100; i++) {
      this.ctx.beginPath();
      particles[i].update();
      this.ctx.arc(particles[i].pos.x, particles[i].pos.y, 4, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
      particles[i].edges();
    }
  }

  draw = () => {
    this.beginDraw();
    let yoff = 0;
    for(let x = 0; x < cols; x++) {
      let xoff = 0;
      for(let y = 0; y < rows; y++) {
        xoff += inc;
        // this.rect(x * scl, y * scl, scl, scl);
        var index = (x + y * cols);
        let angle = Noise.perlin3(xoff, yoff, zoff) * Math.PI * 2;
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
      // zoff += 0.001;

    }
    this.show();
    // this.endDraw();

    setTimeout(() => {
      this.ctx.clearRect(0,0,WIDTH, HEIGHT);
      this.draw();
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