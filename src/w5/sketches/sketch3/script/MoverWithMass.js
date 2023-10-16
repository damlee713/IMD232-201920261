class MoverWithMass {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.accDisplay = createVector(0, 0);
    this.mass = mass;
    this.radius = mass ** 0.5 * 10;
  }
  applyforce(force) {
    let forceDividedByMass = createVector(force.x, force.y);
    forceDividedByMass.div(this.mass);
    this.acc.add(forceDividedByMass);
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.accDisplay.set(this.acc);
    this.acc.mult(0);
  }

  checkEdges() {
    if (this.pos.x < 0) {
      // let delta=this.pos.x-0;
      // delta*=-1;
      // this.pos.x=0+delta;
      // this.vel.x*=1;
      this.pos.x -= 0;
      this.pos.x *= -1;
      this.pos.x += 0;
      this.vel.x *= -1;
    } else if (this.pos.x > width - 1) {
      //얼마나 더 나갔나?
      //width-1 에서 팅기므로 x에서 width-1값을 뺌
      this.pos.x -= width - 1;
      //-1 곱함(음수가 됨)
      this.pos.x *= -1;
      //width-1을 더함(양수가 됨)
      this.pos.x += width - 1;
      this.vel.x *= -1;
    }
    if (this.pos.y > height - 1) {
      this.pos.y -= height - 1;
      this.pos.y *= -1;
      this.pos.y += height - 1;
      this.vel.y *= -1;
    }
  }

  display() {
    noStroke();
    fill(0);
    ellipse(this.pos.x, this.pos.y, 2 * this.radius);
  }

  displayVectors() {
    stroke('red');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.vel.x * 10,
      this.pos.y + this.vel.y * 10
    );

    stroke('blue');
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + this.accDisplay.x * 100,
      this.pos.y + this.accDisplay.y * 100
    );
  }
}
