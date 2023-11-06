class Traffic {
  // Traffic 클래스 선언
  constructor() {
    this.vehicles = [];
    // this.vehicles에 [](배열)적용
  }

  run() {
    // run 함수
    this.vehicles.forEach((eachVehicle) => {
      // 함수 반복
      const separate = eachVehicle.separate(this.vehicles);
      // separate를 this.vehicles모두와 분리한 값으로 설정
      separate.mult(1);
      // 곱하기 1
      eachVehicle.applyForce(separate);
      // 값을 각 함수에 적용
      const align = eachVehicle.align(this.vehicles);
      // align을 각 함수를 정렬시킨 값으로 설정
      align.mult(0.5);
      // 곱하기 0.5
      eachVehicle.applyForce(align);
      // 값을 각 함수에 적용
      const cohesion = eachVehicle.cohesion(this.vehicles);
      // cohesion을 각 함수 응집 값으로 설정
      cohesion.mult(0.5);
      // 곱하기 0.5
      eachVehicle.applyForce(cohesion);
      // 값을 각 함수에 적용
      eachVehicle.update();
      // update함수 적용
      eachVehicle.borderInfinite();
      // borderInfinite함수 적용
      eachVehicle.display();
      // display함수 적용
    });
  }

  addVehicle(x, y) {
    // addVehicle함수
    const mass = 1;
    // mass를 1로 설정
    this.vehicles.push(
      // 새로 추가
      new Vehicle(x, y, mass, mass * 12, 5, 0.1, color(random(360), 100, 40))
      // 각 값 설정
    );
  }
}
