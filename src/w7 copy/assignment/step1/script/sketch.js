class Emitter {
  constructor(emittingPosX, emittingPosY) {
    this.emittingPos = createVector(emittingPosX, emittingPosY);
    this.balls = [];
  }

  createBall() {
    this.balls.push(new Ball(random(width), 0, 1, random(360), 100, 50));
  }

  applyGravity(gravity) {
    this.balls.forEach((each) => {
      const scaledG = p5.Vector.mult(gravity, each.mass);
      each.applyForce(scaledG);
    });
  }

  applyForce(force) {
    this.balls.forEach((each) => {
      each.applyForce(force);
    });
  }

  update() {
    this.balls.forEach((each) => {
      each.update();
    });
  }

  display() {
    this.balls.forEach((each) => {
      each.display();
    });
    console.log(this.balls.length);
  }
  dead() {
    for (let i = this.balls.length - 1; i >= 0; i--) {
      const ball = this.balls[i];
      if (ball.pos.y - ball.rad > height) {
        this.balls.splice(i, 1);
      }
    }
  }
}

class Ball {
  constructor(posX, posY, mass, h, s, v) {
    this.pos = createVector(posX, posY);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.rad = this.mass * 5;
    this.color = color(h, s, v);
    this.angle = 0;
    this.rotationSpeed = random(10);
  }

  applyForce(force) {
    const calcedAcc = p5.Vector.div(force, this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(1);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.angle += radians(this.rotationSpeed);
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    fill(this.color);
    noStroke();
    rectMode(CENTER);
    rect(0, 0, 2 * this.rad);
    pop();
  }
}

let emitter;
let balls = [];
let gravity;

function setup() {
  setCanvasContainer('canvasGoesHere', 2, 1, true);

  colorMode(HSL, 360, 100, 100);

  emitter = new Emitter(width / 2, 0);

  gravity = createVector(0, 0.1);

  background(255);
}

function draw() {
  background(255);
  balls.forEach((each) => {
    const scaledG = p5.Vector.mult(gravity, each.mass);
    each.applyForce(scaledG);
    each.update();
    each.display();
  });
  emitter.createBall();
  emitter.applyGravity(gravity);
  emitter.update();
  emitter.display();
  emitter.dead();
}
