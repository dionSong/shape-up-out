



document.addEventListener("DOMContentLoaded", function( ) {

    const RECTANGLE_BTN = document.getElementById('rectangle-btn');
    const SQUARE_BTN = document.getElementById('square-btn');
    const CIRCLE_BTN = document.getElementById('circle-btn');
    const TRIANGLE_BTN = document.getElementById('triangle-btn');


    RECTANGLE_BTN.addEventListener('click', shapeCreator('rectangle')); 

    SQUARE_BTN.addEventListener('click', shapeCreator('square'));

    CIRCLE_BTN.addEventListener('click', shapeCreator('circle'));

    TRIANGLE_BTN.addEventListener('click',shapeCreator('triangle'))
  });


  class Shape {
      div: HTMLDivElement = document.createElement('div');
      type: string
      

    constructor(){
        this.draw();
        this.div.className = 'shape';  
        this.div.addEventListener('dblclick', () => {
            this.div.remove(); 
            });
        this.div.addEventListener('click', () => {
            let shapeName = document.getElementById('shape-name');
            let width = document.getElementById('width');
            let height = document.getElementById('height');
            let radius = document.getElementById('radius');
            let area = document.getElementById('area');
            let perimeter =document.getElementById('perimeter');

            shapeName.innerHTML = `Shape Name: ${this.type}`;
            width.innerHTML = `Width: ${this.div.style.width}`;
            height.innerHTML = `Height: ${this.div.style.height}`;
            radius.innerHTML = `Radius: ${this.div.style.borderRadius}`;

            //Area and perimeer
            if (this.type === 'Rectangle' || this.type === 'Square'){
                area.innerHTML = `Area: ${parseInt(this.div.style.width) * parseInt(this.div.style.height)}`;
                perimeter.innerHTML = `Perimeter: ${parseInt(this.div.style.width) * 4}`;
            } else if (this.type === 'Circle'){
                area.innerHTML = `Area: ${Math.pow(parseInt(this.div.style.borderRadius), 2) * 3.14}`
                perimeter.innerHTML = `Perimeter: ${2 * 3.14 * parseInt(this.div.style.borderRadius)}`
            } else if (this.type === 'Triangle'){
                height.innerHTML = `Height: ${parseInt(this.div.style.borderRight)}`;
                area.innerHTML = `Area: ${(parseInt(this.div.style.borderBottom) * parseInt(this.div.style.borderRight)) * 0.5 }`;
                perimeter.innerHTML = `Perimeter: ${2 * parseInt(this.div.style.borderRight) * Math.pow(parseInt(this.div.style.borderRight) * parseInt(this.div.style.borderRight), 2)}`
            }    
        })
    }
    draw(): void {
        this.div.style.top = `${randomNumberOne()}px` //top should be between 1 to 475
        this.div.style.left = `${randomNumberTwo()}px` //left should be between 453 to 916
        document.getElementById('container').appendChild(this.div); 
    } 
}

class Rectangle extends Shape {
    constructor(){
        super()
        this.div.id ='rectangle';
        this.type = 'Rectangle'
        
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
        this.type = 'Square'
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
        this.type = 'Circle'
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
        this.type = 'Triangle'
        this.size((<HTMLInputElement>document.getElementById('triangle-input')).value)
    }
    size(size): void {
        this.div.style.borderBottom = `${size}px solid #f1c40f `;
        this.div.style.borderRight = `${size}px solid transparent`;
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



// * Triangle perimeter (right isoceles): `2 * height * square root of (2 * height * height)`