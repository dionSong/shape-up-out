var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
document.addEventListener("DOMContentLoaded", function () {
    // * Each of the insert buttons above should create a new instance of that particular shape, which should draw itself on the screen with the specified size and placed in a random location (object details are below)
    var RECTANGLE_BTN = document.getElementById('rectangle-btn');
    var SQUARE_BTN = document.getElementById('square-btn');
    var CIRCLE_BTN = document.getElementById('circle-btn');
    var TRIANGLE_BTN = document.getElementById('triangle-btn');
    RECTANGLE_BTN.addEventListener('click', shapeCreator('rectangle')); //another function that gathers the parameters
    SQUARE_BTN.addEventListener('click', shapeCreator('square'));
    CIRCLE_BTN.addEventListener('click', shapeCreator('circle'));
    TRIANGLE_BTN.addEventListener('click', shapeCreator('triangle'));
    //get each button by id and on click Each of the insert buttons above should create a new instance of that particular shape, which should draw itself on the screen with the specified size and placed in a random location (object details are below)
});
// * Rectangle: Inputs for width and height, and an insert button
// * Square: Input for side length and an insert button
// * Circle: Input for radius and an insert button
// * Isoceles Right Triangle: Input for height and an insert button
var Shape = /** @class */ (function () {
    function Shape() {
        var _this = this;
        this.div = document.createElement('div');
        this.draw();
        this.div.className = 'shape';
        this.div.addEventListener('dblclick', function () {
            _this.div.remove();
        });
    }
    Shape.prototype.draw = function () {
        this.div.style.top = randomNumberOne() + "px"; //top should be between 1 to 475
        this.div.style.left = randomNumberTwo() + "px"; //left should be between 453 to 916
        document.getElementById('container').appendChild(this.div);
    };
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super.call(this) || this;
        _this.div.id = 'rectangle';
        _this.size((document.getElementById('r-width').value), (document.getElementById('r-height').value));
        return _this;
    }
    Rectangle.prototype.size = function (width, height) {
        this.div.style.width = width + "px";
        this.div.style.height = height + "px";
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        var _this = _super.call(this) || this;
        _this.div.id = 'square';
        _this.size(document.getElementById('square-input').value);
        return _this;
    }
    Square.prototype.size = function (sideLength) {
        this.div.style.height = sideLength + "px";
        this.div.style.width = sideLength + "px";
    };
    return Square;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super.call(this) || this;
        _this.div.id = 'circle';
        _this.size(document.getElementById('circle-input').value);
        return _this;
    }
    Circle.prototype.size = function (size) {
        this.div.style.height = size + "px";
        this.div.style.width = size + "px";
        this.div.style.borderRadius = size / 2 + "px";
    };
    return Circle;
}(Shape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        var _this = _super.call(this) || this;
        _this.div.id = 'triangle-right';
        _this.size(document.getElementById('triangle-input').value);
        return _this;
    }
    Triangle.prototype.size = function (size) {
        this.div.style.borderBottom = size + "px solid #f1c40f ";
        this.div.style.borderRight = size + "px solid transparent";
    };
    return Triangle;
}(Shape));
//Functions
var shapeCreator = function (type) {
    return function () {
        switch (type) {
            case 'rectangle':
                new Rectangle();
                break;
            case 'square':
                new Square();
                break;
            case 'circle':
                new Circle();
                break;
            case 'triangle':
                new Triangle();
        }
    };
};
var randomNumberOne = function () {
    return Math.floor((Math.random() * 475) + 1);
};
var randomNumberTwo = function () {
    return Math.floor((Math.random() * 916) + 453);
};
// * When a shape is clicked, you should update the sidepanel with the metrics for that shape
// * Show a sidepanel beside this shape canvas. It should display the following information for a clicked shape:
// * Shape Name:
// * Width:
// * Height:
// * Radius:
// * Area:
// * Perimeter:
// ## Additional details
// * Clicking on any shape should call a method named describe(), which should update the statistics in the sidepanel in index.html
// * Remember that a circle's perimeter is the same as its circumference
// ## Hints/Resources
// * Triangle area: `0.5 * base * height`
// * Triangle perimeter (right isoceles): `2 * height * square root of (2 * height * height)` 
