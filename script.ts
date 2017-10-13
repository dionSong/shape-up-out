

document.addEventListener("DOMContentLoaded", function( ) {
// * Each of the insert buttons above should create a new instance of that particular shape, which should draw itself on the screen with the specified size and placed in a random location (object details are below)
    const RECTANGLE_BTN = document.getElementById('rectangle-btn');
    const SQUARE_BTN = document.getElementById('square-btn');
    const CIRCLE_BTN = document.getElementById('circle-btn');
    const TRIANGLE_BTN = document.getElementById('triangle-btn');


    RECTANGLE_BTN.addEventListener('click', shapeCreator('rectangle')); //another function that gathers the parameters

    SQUARE_BTN.addEventListener('click', shapeCreator('square'));

    CIRCLE_BTN.addEventListener('click', shapeCreator('circle'));

    TRIANGLE_BTN.addEventListener('click',shapeCreator('triangle'))
    //get each button by id and on click Each of the insert buttons above should create a new instance of that particular shape, which should draw itself on the screen with the specified size and placed in a random location (object details are below)
  


  });

  // * Rectangle: Inputs for width and height, and an insert button

// * Square: Input for side length and an insert button

// * Circle: Input for radius and an insert button

// * Isoceles Right Triangle: Input for height and an insert button

  class Shape {
      div: HTMLDivElement = document.createElement('div');

      
      type: string

    constructor(){
        this.draw();
        this.div.className = 'shape';   

    }
    draw(): void {
        document.getElementById('container'). appendChild(this.div); 
    } 
    //update the panel with that shape metrics
}

class Rectangle extends Shape {

    
    constructor(){
        super()
        this.div.id ='rectangle';
        
        this.size(((<HTMLInputElement>document.getElementById('r-width')).value), ((<HTMLInputElement>document.getElementById('r-height')).value)) ; 
        
    }
    size(width, height): void {
        this.div.style.width = `${width}px`;
        this.div.style.height = `${height}px`;
    }



    //make the click have another function that returns width and heigth values
}

class Square extends Shape {
    
    constructor(){
        super()
        this.div.id ='square';
        this.size((<HTMLInputElement>document.getElementById('square-input')).value);
    }
    size(sideLength): void {
        this.div.style.height = `${sideLength}px`;
        this.div.style.width = `${sideLength}px`; 
    }
}    

class Circle extends Shape {
    
    constructor(){
        super()
        this.div.id ='circle';
        this.size((<HTMLInputElement>document.getElementById('circle-input')).value);  
    }
    size(size): void {
        this.div.style.height = `${size}px`;
        this.div.style.width = `${size}px`;
        this.div.style.borderRadius = `${size/2}px`;
    }
}

class Triangle extends Shape {
    
    constructor(){
        super()
        this.div.id ='triangle-right'; 
        this.size((<HTMLInputElement>document.getElementById('triangle-input')).value)
    }
    size(size): void {
        this.div.style.borderBottom = `${size}px solid #f1c40f `;
        this.div.style.borderRight = `${size}px solid transparent`
        // border-bottom: 100px solid #f1c40f
        // border-right: 100px solid transparent
    }
}

//Functions


let shapeCreator = (type)=>{
    return () => {
        switch(type) {
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
    }
}





// # Lab 16: Shape Up Or Shape Out

// ##### IAMBHAM

// ## Info

// * You will be building a webpage that will enable users to draw shapes of varying sizes on the screen

// * You will be using TypeScript features (classes, arrow functions, let/const, interfaces, typings etc)

// * When a shape is clicked, you should update the sidepanel with the metrics for that shape

// * Each type of shape will have its own input box(es) for getting size information, and an insert button for drawing the shape on the page

// ## Getting Started

// * Simply create a good ole index.html file, script.ts file, and a sass file for styling

// ## Set up

// * Run `npm i -g typescript` in the terminal in order to install the typescript compiler

// * When you want to compile your typescript file into javascript run `tsc --watch filename.ts`, which will compile your ts file and will watch it for future changes and compile it on save

// ## Objectives - HTML

// * Your shape drawer should handle four shapes: Square, Rectangle, Circle, and Triangle

// * In your index.html, go ahead and add labeled input fields and insert buttons for each shape type:







// * Show a sidepanel beside this shape canvas. It should display the following information for a clicked shape:

// * Shape Name:

// * Width:

// * Height:

// * Radius:

// * Area:

// * Perimeter:

// ## Objectives - TS

// * You must use OOP. Specifically, you must use the classes defined below and properly use inheritance

// #### Class - Shape

// * Shape is very generic

// * Try to put as much logic in this class as you can, but remember, sometimes you have to put logic in child classes for more custom behavior

// #### Class- Circle

// * Needs to take a single parameter, radius, in its constructor

// * Needs to call the constructor of its logical parent class

// * Can have methods that define behavior/calculations specific to Circles

// #### Class - Triangle

// * This will be a Right Isoceles Triangle

// * Needs to take a single parameter, height, in its constructor

// * Since it is a right isoceles triangle, height/width/base will all be the same

// * Needs to call the constructor of its logical parent class

// * Can have methods that define behavior/calculations specific to Triangles

// #### Class - Rectangle

// * Needs to take two parameters, width and height, in its constructor

// * Needs to call the constructor of its logical parent class

// * Can have methods that define behavior/calculations specific to Rectangles

// #### Class - Square

// * Needs to take a single parameter, sideLength, in its constructor

// * Needs to call the constructor of its logical parent class

// * A square is a special type of rectangle

// * Can have methods that define behavior/calculations specific to Squares

// ## Additional details

// * Clicking on any shape should call a method named describe(), which should update the statistics in the sidepanel in index.html

// * Double clicking on any shape should remove the shape from the screen

// * Every shape draws itself when it is created. The shape will be drawn according to the size specified when the shape was created, and the shape will be placed in a random location within the shape canvas

// * To keep things simple, it helps to think of every shape having a width and height (even the circle and triangle have a "bounding box" we cannot see that can be derived from their single measurement)

// * Remember that a circle's perimeter is the same as its circumference

// * Drawing a triangle is going to be tricky!

// * Circles should be purple, Squares should be red, Triangles should be yellow, and Rectangles should be green

// ## Hints/Resources

// * It may help to review relative vs absolute positioning, and how `top` and `left` can be used to specify the location of an html element

// * You may find [this guide](https://css-tricks.com/examples/ShapesOfCSS/) helpful for drawing shapes with CSS (For triangle, use Top-Left, Top-Right, Bottom-Left, or Bottom-Right)

// * Triangle area: `0.5 * base * height`

// * Triangle perimeter (right isoceles): `2 * height * square root of (2 * height * height)`