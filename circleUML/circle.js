var Circle = /** @class */ (function () {
    function Circle() {
        var radius;
        var color;
        this.radius = 1;
        this.color = "red";
        console.log(this.radius);
    }
    Circle.prototype.circle = function () {
        console.log("Hey circle");
    };
    Circle.prototype.circle = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.circle = function (radius, color) {
        this.radius = radius;
        this.color = color;
    };
    Circle.prototype.getRadius = function () {
        var rad = this.radius;
        console.log(rad);
        return rad;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function () {
        console.log(' color of the circle is ' + this.color);
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
        console.log(' color of the circle is ' + this.color);
    };
    Circle.prototype.getArea = function () {
        var area = 3.14 * this.radius * this.radius();
        return area;
    };
    Circle.prototype.getCircumference = function () {
        var circum;
        circum = 2 * Math.PI * this.radius;
        console.log(circum);
        return circum;
    };
    return Circle;
}());
var cir = new Circle();
cir.setRadius(4);
cir.getColor();
cir.setColor("pink");
cir.getCircumference();
