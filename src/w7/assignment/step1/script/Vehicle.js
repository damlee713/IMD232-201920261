class Vehicle {
  // Vehicle 클래스 선언
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    // 초기속성 설정
    this.pos = createVector(x, y);
    // 초기위치 x, y 받음
    this.vel = p5.Vector.random2D();
    // 초기속도 무작위로 받음
    this.acc = createVector();
    // 초기가속도 0
    this.mass = mass;
    // 질량 mass에서 받아옴
    this.rad = rad;
    // 반지름 rad에서 받아옴
    this.speedMx = speedMx;
    // 속도 한계 speedMx에서 받아옴
    this.forceMx = forceMx;
    // 최대 힘 forceMx에서 받아옴
    this.neighborhooodRad = 50;
    // 이웃 반지름 50
    this.color = color;
    // 색 color에서 받아옴
  }

  cohesion(others) {
    // cohesion함수 others에서 정보 받아옴
    let cnt = 0;
    // cnt변수 만들고 0으로 설정
    const steer = createVector(0, 0);
    // steer 변수 생성후 0,0설정
    others.forEach((each) => {
      // others 반복문
      if (each !== this) {
        // each가 this 와 다를경우 아래 진행
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        // 둘 사이의 거리 비교
        if (distSq < this.neighborhooodRad ** 2) {
          // 둘 사이의 거리가 neighborhooodRad제곱보다 작다면 아래 진행
          steer.add(each.pos);
          // steer에 each.pos 더함
          cnt++;
          // cnt에 1더함
        }
      }
    });
    if (cnt > 0) {
      // cnt가 0보다 크면
      steer.div(cnt);
      // steer를 cnt로 나눔
      steer.sub(this.pos);
      // steer에서 this.pos 뺌
      steer.setMag(this.speedMx);
      // steer에 this.speedMx로 설정
      steer.sub(this.vel);
      // steer에서 this.vel 뺌
      steer.limit(this.forceMx);
      // steer최대를 this.forceMx로 설정
    }
    return steer;
    // steer재설정
  }

  align(others) {
    // align함수 others에서 받아옴
    let cnt = 0;
    // cnt변수 만들고 0으로 설정
    const steer = createVector(0, 0);
    // steer 변수 생성후 0,0설정
    others.forEach((each) => {
      // others 반복문
      if (each !== this) {
        // each가 this 와 다를경우 아래 진행
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        // 둘 사이의 거리 비교
        if (distSq < this.neighborhooodRad ** 2) {
          // distSq가 neighborhooodRad제곱보다 작다면 아래 진행
          steer.add(each.pos);
          // steer에 each.pos 더함
          cnt++;
          // cnt에 1더함
        }
      }
    });
    if (cnt > 0) {
      // cnt가 0보다 크면
      steer.div(cnt);
      // steer를 cnt로 나눔
      steer.sub(this.pos);
      // steer에서 this.pos 뺌
      steer.setMag(this.speedMx);
      // steer최대를 this.speedMx로 설정
      steer.sub(this.vel);
      // steer에서 this.vel 뺌
      steer.limit(this.forceMx);
      // steer최대를 this.forceMx로 설정
    }
    return steer;
    // steer재설정
  }

  separate(others) {
    //separate함수 others에서 받아옴
    let cnt = 0;
    // cnt변수 만들고 0으로 설정
    const steer = createVector(0, 0);
    // steer 변수 생성후 0,0설정
    others.forEach((each) => {
      // others 반복문
      if (each !== this) {
        // each가 this 와 다를경우 아래 진행
        const dist = this.pos.dist(each.pos);
        // dist 설정후 this.pos.dist(each.pos)넣기
        if (dist > 0 && this.rad + each.rad > dist) {
          // dist가 0보다 크고,this.rad + each.rad보다 작으면
          const distNormal = dist / (this.rad + each.rad);
          // distNormal 설정후 dist / (this.rad + each.rad)넣기
          const towardMeVec = p5.Vector.sub(this.pos, each.pos);
          // towardMeVec에 this.pos에서 each.pos뺸값 넣기
          towardMeVec.setMag(1 / distNormal);
          // towardMeVec를  1/distNormal로 넣기
          steer.add(towardMeVec);
          // steerdp  towardMeVec더하기
          cnt++;
          // cnt에 1더함
        }
      }
    });
    if (cnt > 0) {
      // cnt가 0보다 크면
      steer.div(cnt);
      // steer를 cnt로 나눔
      steer.setMag(this.speedMx);
      // steer를 this.speedMx로 설정
      steer.sub(this.vel);
      // steer에서 this.vel빼기
      steer.limit(this.forceMx);
      // steer최대 this.forceMx로 설정
    }
    return steer;
    // steer재설정
  }

  applyForce(force) {
    // applyForce함수에 force받아 함수 설정
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    // forceDivedByMass 정의하고 force를 this.mass로 나눈값 넣기
    this.acc.add(forceDivedByMass);
    // this.acc에 forceDivedByMass넣기
  }

  update() {
    // update 함수 실행 하는 동안 아래 실행
    this.vel.add(this.acc);
    // this.vel에 this.acc넣기
    this.vel.limit(this.speedMx);
    // this.vel최대 this.speedMx로 설정
    this.pos.add(this.vel);
    // this.pos에 this.vel넣기
    this.acc.mult(0);
    // this.acc에 0곱하기
  }

  borderInfinite() {
    // borderInfinite 함수 실행 하는 동안 아래 실행
    if (this.pos.x < -infiniteOffset) {
      // this.pos.x가 화면 왼쪽보다 작으면
      this.pos.x = width + infiniteOffset;
      // this.pos.x를 화면 오른쪽으로 이동
    } else if (this.pos.x > width + infiniteOffset) {
      // this.pos.x가 화면 오른쪽보다 크면
      this.pos.x = -infiniteOffset;
      // this.pos.x를 화면 왼쪽으로 이동
    }
    if (this.pos.y < -infiniteOffset) {
      // this.pos.y가 화면 위쪽보다 작으면
      this.pos.y = height + infiniteOffset;
      // this.pos.y를 화면 아래로 이동
    } else if (this.pos.y > height + infiniteOffset) {
      // this.pos.y가 화면 아래쪽보다 크면
      this.pos.y = -infiniteOffset;
      // this.pos.y를 화면 위로 이동
    }
  }

  display() {
    // display 함수
    push();
    // pop까지는 여기서만 실행
    translate(this.pos.x, this.pos.y);
    // 현재 위치로 설정
    rotate(this.vel.heading());
    // this.vel각도로 회전
    noStroke();
    // 선 빼기
    fill(this.color);
    // this.color로 채우기
    beginShape();
    // 그리기 시작
    vertex(this.rad, 0);
    // this.rad, 0지점부터 시작
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135)));
    // this.rad * cos(radians(-135)), this.rad * sin(radians(-135))위치로 선긋기
    vertex(0, 0);
    // 0,0위치로 선긋기
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135)));
    // this.rad * cos(radians(135)), this.rad * sin(radians(135))위치로 선긋기
    endShape(CLOSE);
    // 그리기 끝
    pop();
    // 실행한거 밖에서는 적용 안됨
  }
}
