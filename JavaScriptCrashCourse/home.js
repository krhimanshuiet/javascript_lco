// console.log("Hello world");
// alert("hello");


// How tp write a comment inline.



// variables 
// var b = 'smoothy';
// console.log(b);


// var someNumber = 45;
// console.log(someNumber);

// document.write("Hello world");
// window.print();
// var age = prompt("Whay is your age?");
// document.getElementById('someText').innerHTML  = age;

// Numbers in Javascript

// var num1 = 98;
// var num3 = 9.8;
// num1++;
// ++num1;




// Increment and decrement by any number you want 

// num1+=20;
// console.log(num1);


// Functions 
/*
1.create a function
2.call a function
*/
// function fun (){
//     console.log("this is a function");
// }

// call 

// fun();


// function greeting(){
//     var name = prompt("What is your name:");
//     var result = " hello " + name;
//     console.log(result);
// }


// greeting();

// How do arguments work in function.


// function greeting(yourName){
//     var result  = " hello "  + yourName;
//     console.log(result);
// }

// greeting("himanshu");

// while loops


// var num = 0;
// while(num<100){
//     num+=1;
//     console.log(num);
// }

// for loop

// for(let i = 0 ; i <= 100 ; i++){
//     console.log(i);
// }


// Data Types in JavaScript 


// let yourAge = 18; // number
// let yourName = "Bob"; // string
// let name = {first:'himanshu' , last:'singh'}; // object
// let truth = false; // boolean
// let groceries = ['apple','orange','banana']; // array
// let random; // undefined
// let nothing = null ; // null


// String in javaScript 

// let fruit = 'banana';
// let moreFruits = 'banana\napple'; //new line

// console.log(fruit.length);
// console.log(fruit.indexOf('nan'));
// console.log(fruit.slice(2,5));
// console.log(fruit.replace('ban' , '123'));
// console.log(fruit.toLowerCase());
// console.log(fruit.toUpperCase());
// console.log(fruit.charAt(2));
// console.log(fruit[2]);
// console.log(fruit.split(','));  // split by comma
// console.log(fruit.split(' '));  // split by space

// array

// let fruits = ['banana' , 'apple' , 'orange' , 'mango'];
// // or let fruits  = new array['123','456','765'];


// console.log(fruits[2]);

// for(let i = 0 ; i < fruits.length ; i++){
    
// console.log(fruits[i]);
// }

// // array common methods 


// console.log('to string' , fruits.toString());

// console.log(fruits.join('-'));

// console.log(fruits.join(' * '));

// console.log(fruits.pop() , fruits);


// console.log(fruits.push('blackberry') , fruits)


// fruits[4]  = 'new fruit';

// console.log(fruits[4]);

// fruits.shift();

// console.log(fruits);
// fruits.unshift('kiwi');

// console.log(fruits);

// let vegetables = ['tomato' , 'potato' , 'broccoli'];
// let allGroceries = fruits.concat(vegetables);
// console.log(allGroceries);

// console.log(allGroceries.slice(1,4));

// console.log(allGroceries.reverse());

// let numbers = [1,2,3,4,34,342,45,68,54,34];


// console.log(numbers.sort(function(a,b){return a-b}));


// let emptyArray = new Array();
// for(let i = 0 ; i <= 10 ; i++){
//     emptyArray.push(i);
// }

// console.log(emptyArray);


// objects in Javascript 


// let student = {
//     first:'ramesh',
//     last:'kumar',
//     age:78,
//     height:170,
//     studentInfo: function(){
//         return this.first + '\n' + this.last + '\n' + this.age;
//     }
// }

// console.log(student.first);
// console.log(student.first);
// student.first = 'notRamesh';
// console.log(student.first);
// student.age++;
// console.log(student.age);
// console.log(student.studentInfo());


// conditional and control flow (if - else)
// var  age = prompt('what is your age');
// if((age >=18) && (age <=35)){
//     let status = 'target demo';
//     console.log(status);

// }else{
//     let status = 'not my audience';
//     console.log(status);
// }


// switch statements 

// let day = prompt("enter day number");
// let text = 'weekday';
// switch(day){
//     case 0:
//         text = 'weekend';
//         break;
//     case 5:
//         text = 'weekend';
//         break;
//     case 6:
//         test = 'weekend';
//         break;
//     default:
//         test = 'weekday';
//         break;

// }


// console.log(text);
