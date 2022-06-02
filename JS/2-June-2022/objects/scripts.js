console.clear();
var person = {
    // key : value
    firstName: "John",
    lastName: "Doe",
    age: 30,
    height: "5.6",
    weight: 60,
    canJohnDrive: false,
    // address: "123, Jordon St. Columbia",
    address : {
        addressLine1: "House No 47, Columbia St.",
        addressLine2 : "Lakwana County",
        city: "New York",
        state: "New Jersey",
        country: "United States",
        zipCode : "08817",
        email: ""
    },
    contactNumber: "9806232420",
    email: '',
    getAadharNumber : function () {
        return '123445';
    }
};

// console.log(typeof(person));
// console.log(person.address.addressLine2);


// ADDITION AND UPDATION OF A PROPERTY
person.email = 'john@example.com'; // Add a new key to the object, or udpdate if the key already exists
person.address.email = 'doe@example.com';
// console.log(person);
person.email = 'asdf@example.com';
person['email'] = 'zzzz@example.com';

// DELETION OF A PROPERTY FROM AN OBJECT

// delete person.weight;
// delete person.address;

console.log(person.getAadharNumber());


// GET ALL THE KEYS OF AN OBJECT

// console.log(Object.keys(person));


// GET ALL THE VALUES OF AN OBJECT
// console.log(Object.values(person));


console.log(person);