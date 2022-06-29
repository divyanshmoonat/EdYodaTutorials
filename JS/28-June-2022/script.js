function Car(noOfWheels,color,engineType,cc,manufacturer) {
    // Properties of Car STARTS INITIAL VALUES/DEFAULT VALUES
    this.noOfWheels = noOfWheels;
    this.color = color;
    this.engineType = engineType;
    this.cc = cc;
    this.manufacturer = manufacturer;
    // Properties of Car ENDS

    // Methods/functions of Car which gets/sets the value of its properties STARTS
    this.getColor = function () {
        // console.log(this.color);
        return this.color;
    }
    this.setColor = function (newColor) {
        this.color = newColor;
    }
    this.getEngineType = function () {
        return this.engineType;
    }
    this.setEngineType = function(newEngineType) {
        this.engineType = newEngineType;
    }
    // Methods/functions of Car which gets/sets the value of its properties ENDS
}

function Bike (color) {
    this.color = color;
    this.getColor = function () {
        // console.log(this);
        return this.color;
    }
}

function Vehicle () {
    this.getColor = function() {
        console.log(this.color);
    }
}

// Protypal Inheritance

var myBike = new Bike('Black');
myBike.getColor();

var myCar = new Car(4,'Red','4Stroke',1200,'Honda'); // new Keyword is used to create instances of a type
console.log(myCar.color);
var myCarColor = myCar.getColor();
console.log(myCarColor);

var myCar2 = new Car(5,'White', '2Stroke', 800,'Tata');
console.log(myCar2.color);


var myCar3 = new Car(4,'Black','6Stroke', 2000,'Mahindra');
console.log(myCar3.color);


var car = {
    noOfWheels: 4,
    color: 'Green',
    engineType: '4Stroke',
    cc: 1000
};

var car2 = car;
var car3 = car;


console.log(car);
console.log(car2);
console.log(car3);


// function sum(num1, num2) {
//     console.log(num1+num2);
//     return num1+num2;
// }

// var total = sum(5,6);
// console.log(total);