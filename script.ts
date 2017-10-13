



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
        this.div.addEventListener('dblclick', () => {
            this.div.remove(); 
        });
        
    }
    draw(): void {
        this.div.style.top = `${randomNumberOne()}px` //top should be between 1 to 475
        this.div.style.left = `${randomNumberTwo()}px` //left should be between 453 to 916
        document.getElementById('container').appendChild(this.div); 
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

let randomNumberOne = (): any => {
    return Math.floor((Math.random() * 475) + 1);
}

let randomNumberTwo = (): any => {
    return Math.floor((Math.random() * 916) + 453);
}







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