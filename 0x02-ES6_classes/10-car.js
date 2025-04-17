export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Use the constructor of the current instance to preserve subclass
    const ClonedCar = this.constructor;
    return new ClonedCar(this._brand, this._motor, this._color);
  }
}
