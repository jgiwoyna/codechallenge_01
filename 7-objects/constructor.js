// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle

function RightTriangle(side1, side2, base) {
  this.side1 = side1;
  this.side2 = side2;
  this.base = base;
  this.area = function() {
    return this.base*this.side1;
  }
  this.perimeter = function() {
    return this.base + this.side1 + this.side2;
  }
}

// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.
