class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.radius = this.height /2;
        this.name = name;
        this.div = document.createElement('div');
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        document.getElementById('shapeCont').appendChild(this.div);
        this.div.addEventListener('click', () => {
            this.describe();
        })
    }

    describe() {
        document.getElementById('name').textContent = 'Shape Name: ' + this.name;
        document.getElementById('width').textContent = 'Width: ' + this.width;
        document.getElementById('height').textContent = 'Height: ' + this.height;
        document.getElementById('radius').textContent = 'Radius: ' + this.radius;
        document.getElementById('area').textContent = 'Area: ' + this.area();
        document.getElementById('perimeter').textContent = 'Perimeter: ' + this.perimeter();
        
    }
    area() {
        return this.height * this.width;
    }
    perimeter() {
        return (this.height + this.width) *2;
    }
};

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height)
        this.radius = null;
        this.name = 'Rectangle';
        this.div.id = 'RectangleShape';
        this.div.style.backgroundColor = 'green';
    }

    describe() {
        super.describe();
    }
    area() {
        super.area();
    }
    perimeter() {
        super.perimeter();
    }
};

class Square extends Shape {
    constructor(height, width) {
        super(height, width)
        this.name = 'Square';
        this.div.id = 'SquareShape';
        this.div.style.backgroundColor = 'red';
    }

    describe() {
        super.describe();
    }
    area() {
        super.area();
    }
    perimeter() {
        super.perimeter
    }
};

class Circle extends Shape {
    constructor(radius) {
        super(radius*2, radius*2);
        this.name = 'Circle';
        this.div.id = 'CircleShape';
        this.div.style.backgroundColor = 'purple';
        this.radius = radius;
    }

    describe() {
        super.describe();
    }
    area() {
        return Math.PI * this.radius * this.radius 
    }
    perimeter() {
        return 2 * Math.PI * this.radius
    }
};

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.name = 'Triangle';
        this.div.id = 'TriangleShape';
        this.div.style.width = 0;
        this.div.style.height = 0;
        this.div.style.borderBottomWidth = this.height + 'px';
        this.div.style.borderRightWidth = this.height + 'px';
    }

    describe() {
        super.describe();
    }
    area() {
        return 0.5 * this.height * this.height
    }
    perimeter() {
        return 2 * this.height + (Math.sqrt(2)) * this.height
    }
};

document.getElementById('addCircle').addEventListener('click', () => {
    let rad = document.getElementById('circleR').value;
    new Circle(rad)
});

document.getElementById('addSquare').addEventListener('click', () => {
    let hi = document.getElementById('SquareSL').value;
    let wid = document.getElementById('SquareSL').value;
    new Square(wid, hi);
});

document.getElementById('addRect').addEventListener('click', () => {
    let wid = document.getElementById('rectW').value;
    let hi = document.getElementById('rectH').value;
    new Rectangle(wid, hi);
});

document.getElementById('triangle').addEventListener('click', () => {
    let hi = document.getElementById('triHeight').value;
    new Triangle(hi);
});