let firstName = 'Sofi';
// my name
console.log(firstName);

const a = 50;
// number  of states
console.log(a);

let val1 = 5;
let val2 = 4;
let sumOfVals = val1 + val2;
// the result equals 9

console.log(sumOfVals);

function sayHello(msg) {
    alert(msg);
} 

sayHello('Hello World!')

function checkAge(age, name) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

checkAge(21, 'Charles');
checkAge(27, 'Abby');
checkAge(18, 'James');
checkAge(17, 'John');


let vegetables = ['Potatoes', 'Brussels', 'Plantains', 'Broccoli', 'Peppers', 'Corn'];

for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}

let pet = {
    name: 'MoMo',
    breed: 'BlueHeeler'
}

console.log(pet);

let objArray = [
    {
        name: 'Rich',
        age: 30,
    },
    {
        name: 'Jim',
        age: 5,
    },
    {
        name: 'Hatty',
        age: 70,
    },
    {
        name: 'Foxie',
        age: 16,
    },
    {
        name: 'KiKi',
        age: 20,
    } 
]

for (let i = 0; i < objArray.length; i++) {
    checkAge(objArray[i].age, objArray[i].name);
}

function getLength(word) {
    if (word % 2 == 0) {
        return 'The world is a even and nice!';
    } else {
        return 'The world is an odd place!';
    }
}

let wordLength = getLength('Hello World');


console.log(wordLength);