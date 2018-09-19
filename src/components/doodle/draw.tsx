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
  this.copy = function() {
    return {x: this.x, y: this.y};
  }
}

let speed = 4
const Particle = function() {
  this.pos = new createVector(Math.random() * WIDTH, Math.random() * HEIGHT);
  // this.vel = new  createVector(Math.random()*(Math.random() > 0.5 ? 1 : -1) * 10, Math.random()*(Math.random()>0.5?1:-1) * 10);
  this.vel = new  createVector(0, 0);
  this.acc = new createVector(0, 0);

  this.prevPos = this.pos.copy();
  this.update = function() {
    this.vel.add(this.acc);
    if (this.vel.x > speed) this.vel.x = speed;
    if (this.vel.y > speed) this.vel.y = speed;
    if (this.vel.x < -speed) this.vel.x = -speed;
    if (this.vel.y < -speed) this.vel.y = -speed;
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.edges = function() {
    if (this.pos.x < 0) {
      this.pos.x = WIDTH
      this.updatePrev();
    };
    if (this.pos.x > WIDTH) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = HEIGHT;
      this.updatePrev();
    }
    if (this.pos.y > HEIGHT) {
      this.pos.y = 0;
      this.updatePrev();
    } 

  }

  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  this.fellow = function(forces) {
    let x = Math.floor(this.pos.x / scl);
    let y = Math.floor(this.pos.y / scl);
    let index = x + y * cols;
    if (index >= 900) index = 899;
    let v = forces[index];
    this.applyForce(v);
  }



}

const particles = [];

var flowField = []

class Draw extends React.Component {
  refCanvas = null
  ctx = null;

  componentDidMount() {


    flowField = new Array(rows * cols);

    for(let i = 0; i < rows * cols; i++) {
      particles[i] = new Particle();
    }
    this.beginDraw();
    this.draw();
  }

  setRef = (target: any) => {
    this.refCanvas = target;
  }

  beginDraw = () => {
    let cvs = this.refCanvas;
    this.ctx = cvs.getContext("2d");
    // this.ctx.globalAlpha = 0.2;
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
    for(let i = 0; i < 400; i++) {
      this.ctx.beginPath();
      particles[i].fellow(flowField)
      particles[i].update();
      // this.ctx.arc(particles[i].pos.x, particles[i].pos.y, 1, 0, 2 * Math.PI);
      this.ctx.moveTo(particles[i].prevPos.x, particles[i].prevPos.y);
      this.ctx.lineTo(particles[i].pos.x, particles[i].pos.y);
      this.ctx.strokeStyle = "rgba(0,31,35,0.1)";
      this.ctx.stroke();
      this.ctx.closePath();
      particles[i].updatePrev();
      particles[i].edges();
    }
  }

  draw = () => {
    let yoff = 0;
    let len = 2;
    for(let x = 0; x < cols; x++) {
      let xoff = 0;
      for(let y = 0; y < rows; y++) {
        xoff += inc;
        // this.rect(x * scl, y * scl, scl, scl);
        var index = x + y * cols;
        let angle = Noise.perlin3(xoff, yoff, zoff) * Math.PI * 4;
        let v = {
          x: Math.cos(angle) * len,
          y: Math.sin(angle) * len,
        }
        flowField[index] = v;
        // this.fill(r)
        // this.ctx.save();
        // this.ctx.beginPath();
        // this.ctx.translate(x * scl, y * scl);
        // this.ctx.rotate(angle);
        // this.ctx.moveTo(0,0);
        // this.ctx.lineTo(scl, 0);
        // this.ctx.stroke();
        // this.ctx.closePath();
        // this.ctx.restore();
        // this.ctx.translate(-x * scl, -y * scl);        
      }
      yoff += inc;
      zoff += 0.001;

    }
    this.show();
    // this.endDraw();

    setTimeout(() => {
      // this.ctx.clearRect(0,0,WIDTH, HEIGHT);
      this.draw();
      // this.ctx = null;

    }, 100);
  }

  render() {
    return (
      <div className={style.draw}>
        <canvas ref={this.setRef} width={WIDTH} height={HEIGHT} style={{width: WIDTH + 'px', height: HEIGHT + 'px'}}></canvas>
        <div>撸代码中</div>
      </div>
    )
  }
}

export default Draw;