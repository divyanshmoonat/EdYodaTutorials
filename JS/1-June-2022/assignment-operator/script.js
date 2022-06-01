// = => Assignment Operator

// Declaration should be done only once, whereas value can be assigned n no of times
// ONLY ONE VALUE CAN BE SAVED IN A VARIABLE AT A TIME
var price;
price = 1000;
price = price + 1;
price = price + 1;
price = price + 10;


// price = price * 2; // 1012 * 2 => 2024, 1012 * 1012 => 1024144
// price = price + price;


price = price / 2;


price = price - 1;
price = price - 10;



// console.log("Prouct price : ",price);



var productPrice = 999;
// ++ => Increment Operator
// productPrice = productPrice + 1;
productPrice++;
// productPrice : 1000
console.log("New Product Price : ", productPrice);

// productPrice = productPrice + 10;
// productPrice += 10;
productPrice += 50;

console.log("Product price after += operator ", productPrice);

// productPrice : 1050

productPrice--;
console.log("Product Price after -- operator ",productPrice);

productPrice -= 10;
console.log("Product Price after -= operator ", productPrice);

//productPrice : 1039

// productPrice = productPrice * 1;
// productPrice**;

// productPrice = productPrice * 10;
productPrice *= 20;

console.log("Product price after *= operator : ", productPrice);


// productPrice//;
// productPrice = productPrice / 5;
productPrice /= 5;

console.log("Product price after /= operator :", productPrice);

// product price : 4156;

productPrice = 10;
// productPrice = productPrice % 3;
productPrice %= 3;
console.log("Product price after %= operator : ", productPrice);


discount = 10;
// Hoisting => It is a concept in JS which moves variable declarations to the top
