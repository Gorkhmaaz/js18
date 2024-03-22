///Task 1
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this.radiusValue;
    }

    set radius(value) {
        this.radiusValue = value;
    }

    get diameter() {
        return 2 * this.radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }

    circumference() {
        return 2 * Math.PI * this.radius;
    }
}

const circle = new Circle(8);
console.log("Радиус окружности:", circle.radius);
console.log("Диаметр окружности:", circle.diameter);
console.log("Площадь окружности:", circle.area());
console.log("Длина окружности:", circle.circumference());

////Task 3
class CssClass {
  constructor(className) {
    this.className = className;
    this.styles = [];
  }

  setStyle(property, value) {
    this.styles.push({ property, value });
  }

  removeStyle(property) {
    this.styles = this.styles.filter((style) => style.property !== property);
  }

  getCss() {
    let cssCode = `${this.className} `;
    this.styles.forEach((style) => {
      cssCode += `${style.property}: ${style.value};`;
    });
    return cssCode;
  }
}

const myClass = new CssClass("my-class");
myClass.setStyle("color", "blue");
myClass.setStyle("font-size", "10px");
myClass.setStyle("background-color", "green");
console.log(myClass.getCss());

myClass.removeStyle("font-size");
console.log(myClass.getCss());
