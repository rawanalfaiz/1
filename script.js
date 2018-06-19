// var name = 'John';
// var lastName = 'Smith';
// var age = 20;
// var fullAge = true;

// console.log(name);
// console.log(lastName);
// console.log(age);
// console.log(fullAge);

// ====================================

// var name = 'John';
// var age = 20;
// var job , isMarried; // we can decler variables without assigning value to them, they will be considered udefined.

// console.log(name + age);// Javascript will use the Auto type conversion feature to convert the two different types (integer ans number) into the same type which is in this case going to be string and will combined both of these variables together like this : John20
// console.log(age + age);// in this case Java Script will detect that both variables are the same type (number) and will mathematically add them together like this : 40
// console.log(job);

// job = 'teacher';
// isMarried = false;

// console.log(name + ' is ' + age + ' years old, and he is a ' + job + '. is he married ? ' + isMarried + '.');

// age = 'forty';//example of type mutation 
// job = 'doctor';// example of value changing

// console.log(name + ' is ' + age + ' years old, and he is a ' + job + '.  is he married ?' + isMarried + '.');

// alert(name + ' is ' + age + ' years old, and he is a ' + job + '. is he married ? ' + isMarried + '.');

// ====================================

// Lecture: operators

// var now = 2016;
// var birthYear = now - 26;

// birthYear = now - 26 * 2; // 2016 - 52 => excellent reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// console.log(birthYear);


// var ageJohn = 30;
// var ageMark = 30;

// ageJohn = ageMark = (3 + 5) * 4 - 6; //ageJohn = ageMark = 26 (from right to left) //ageJohn = 26

// ageJohn++; // instead of typing : ageJohn = ageJohn + 1;
// ageMark *= 2;// instead of typing: ageMark = ageMark * 2;

// console.log(ageJohn);
// console.log(ageMark);
// ====================================

// Lecture: if/else statements

// var name = 'John';
// var age = 26;
// var isMarried = 'yes';

// if (isMarried === 'yes') {
//     console.log(name + ' is married!');
// } else {
//     console.log(name + ' will hopefully marry soon :)');
// }

// isMarried = true;

// if(isMarried) {
//     console.log('YES!');
// } else {
//     console.log('NO!');
// }

// if(isMarried) {// ifcan be used without else
//     console.log('YES!');
// }

// if (23 === "23") { // triple "="  does type coercion
//     console.log('Something to print...');
// }

//====================================

// Lecture: boolean logic and switch

// var age = 20;

// if (age < 20) {
//     console.log('John is a teenager');
// } else if (age >= 20 && age < 30) {
//     console.log('John is a young man.');
// } else {
//     console.log('John is a man.');
// }


// var job = 'teacher';

// job = prompt('What does john do?');

// switch (job) {
//     case 'teacher':
//         console.log('John teaches kids.');
//         break;
//     case 'driver':
//         console.log('John drives a cab in Lisbon.');
//         break;
//     case 'cop':
//         console.log('John helps fight crime.');
//         break;
//     default:
//         console.log('John does something else.');
// }

//====================================
// Lecture: Functions


// function calculateAge(yearOfBirth) {
//     var age = 2018 - yearOfBirth;
//     return age;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1969);
// var ageMary = calculateAge(1948);


// function yearsUntilRetirement(name, year) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
    
//     if (retirement >= 0) {
//         console.log(name + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(name + ' is already retired.');
//     }
// }


// yearsUntilRetirement('John', 1990);
// yearsUntilRetirement('Mike', 1969);
// yearsUntilRetirement('Mary', 1948);

//====================================
// Lecture: Statements and expressions

// var someFun = function(par) { // this is a function expression
//     //code
// }

// function someFun(par) { //this is a function statment
//     //code
// }

// //Expressions => produce an immediate value 
// 3 + 4;
// var x = 3;

// //statements => performes an action 
// if (x === 5) {
//     //do soemthing
// }

//====================================
// Lecture: Arrays

// var names = ['John', 'Jane', 'Mark'];
// var years = new Array(1990, 1969, 1948);

// console.log(years);
// console.log(names[2]);
// names[1] = 'Ben';
// console.log(names);


// var john = ['John', 'Smith', 1990, 'designer', false];

// john.push('blue'); // add a new value to the end of arrays
// john.unshift('Mr.'); // add a new value to the beggining of arrays
// john.pop(); // remove the last value of arrays.. it doesn't need a paramenter 
// john.shift(); // remove the first value of arrays..  it doesn't need a paramenter 
// console.log('the index number is : ' , john.indexOf('Smith')); //return the position of the element passed into the array 
// console.log(john);

// if (john.indexOf('teacher') === -1) { // The indexOf() method returns the position of the first occurrence of a specified value in a string. This method returns -1 if the value to search for never occurs .. excellent reference : https://stackoverflow.com/questions/8585897/why-does-indexof-return-1 
//     console.log('John is NOT a teacher.');
// }


//====================================
// Lecture: Objects

var john = {// this ishow to define an object 
    name: 'John', // this is called property 
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(){ // this is an expressions function.. or it can be called method.
        this.age = 2018 - this.yearOfBirth;
    }
};

john.calculateAge();// this will automatically treger and  calculate the object's age 
console.log(john);

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);



//defferentway of defining  
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;
jane.calculateAge = function(){this.age = 2018 - this.yearOfBirth;};

jane.calculateAge();
console.log(jane);



//====================================
//====================================
//====================================
