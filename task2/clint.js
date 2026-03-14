class Polygon {
  constructor(name, ...borders) {
    this.name = name;
    this.borders = borders;

    if (this.constructor === Polygon) {
      throw new Error("the class Polygon is an abstract class");
    }
  }

  area() {
    return 0;
  }

  display() {
    return `${this.name} area: ${this.area()}`;
  }
}

class Circle extends Polygon {
  constructor(r) {
    super("circle", r);
    this.r = r;
  }

  area() {
    return Math.PI * (this.r * this.r);
  }

  display() {
    return `${this.name} radius=${this.r} area=${this.area()}`;
  }
}

class Rect extends Polygon {
  constructor(w, h) {
    super("rectangle", w, h);
    this.w = w;
    this.h = h;
  }

  area() {
    return this.w * this.h;
  }

  display() {
    return `${this.name} width=${this.w} height=${this.h} area=${this.area()}`;
  }
}

class Square extends Polygon {
  constructor(side) {
    super("square", side);
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }

  display() {
    return `${this.name} side=${this.side} area=${this.area()}`;
  }
}

class Triangle extends Polygon {
  constructor(b, h, side2, side3) {
    super("triangle", b, h, side2, side3);
    this.base = b;
    this.height = h;
    this.side2 = side2;
    this.side3 = side3;
  }

  area() {
    return 0.5 * this.base * this.height;
  }

  display() {
    return `${this.name} base=${this.base} height=${this.height} area=${this.area()}`;
  }
}

var rect=new Rect(100, 150);
var circle=new Circle(70);
var triangle=new Triangle(80, 80, 100, 100);
var square=new Square(100)

console.log(rect.display());
console.log(circle.display());
console.log(triangle.display());
console.log(square.display());

/**@type {HTMLCanvasElement} */

var canvas=document.querySelector('canvas')
var ctx=canvas.getContext('2d')

ctx.beginPath();
ctx.rect(50, 50, rect.borders[0], rect.borders[1]);
ctx.stroke();


ctx.beginPath();
ctx.arc(250, 100, circle.borders[0], 0, Math.PI * 2);
ctx.stroke();


ctx.beginPath();
ctx.rect(400, 50, square.borders[0], square.borders[0]);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(150, 250);
ctx.lineTo(150 + triangle.borders[0], 250);
ctx.lineTo(150 + triangle.borders[2], 250 + triangle.borders[1]);
ctx.closePath();
ctx.stroke();