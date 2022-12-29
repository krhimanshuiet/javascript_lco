// let sum = function(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return (a+b+c+d);
//             }
//         }
//     }
// }



// let x = sum(5)(10)(20)(30);
// console.log(x);
// ----------------------------------AROW FUNCTION AND CLOUSER ---------------------------

// let sum2 = (a) =>{
//     return (b)=>{
//         return (c)=>{
//             return (d)=>{
//                 return (e)=>{
//                     return (a+b+c+d+e);
//                 }
//             }
//         }
//     }

// }


// console.log(sum2(1)(2)(3)(4)(5));

// let sum3 = a => b => c => d => e =>{
//     return (a+b+c+d+e);
// }

// console.log(sum3(1)(2)(3)(4)(5));
///================================FUNCTION - WORKING===============================

// var x = 1;
// a();
// b();
// console.log(x);
// function a(){
//     var x = 10;
//     console.log(x);
// }

// function b(){
//     var x = 100;
//     console.log(x);
// }

// var a = 10;
// function x (){
//     var y =10;
//     console.log(y);
// }


// console.log(window.a);
// console.log(window.x());


// function a(){
//     console.log(b);
//     c();
//     function c(){
//         console.log(b);
//         //  
//     }
   
// }
// // console.log(z)
// var b =10;
// a();



// function a(){
//     var b = 10;
//     c();
//     function c(){

//     }
// }


// a();
// console.log(b);

// let a = 100;
// a = 200;
// console.log(a);

// var b = 10;



// function x(){
//     var a  = 10;
//     let b = 20
//     const c = 30;
//     // console.log(a);
//     // console.log(b);
//     // console.log(c);
// }

// console.log(a);

// let a = 10;
// {
//     let a = 30;
    
// }
// console.log(a);


////===================VAR==============
// var a = 10;
// {
//     var a = 20;
//     {
//         var a = 40;
//         {
//             var a = 60;
//         }
//     }
// }

// console.log(a);

// var a = 10;
// function x(){
//     var a = 20;
//     function y(){
//         var a = 40;
//         function z(){
//             var a = 60;
//         }
//     }
// }


// console.log(a);

//===========================let=================


// let a = 10;
// function x(){
//     let a = 20;
//     function y(){
//         let a = 40;
//         function z(){
//             let a = 60;
//         }
//     }
// }


// console.log(a);



// let a = 30;
// {
//     let a = 90;
//     var a  = 40;
// }

// console.log(a);


// function x(){
//     const a = 10;
//     return function y(){
//         let b = 30;
//         return function z(){
//             let c = 60;
//             console.log(a);
//             return a+b+c;

//         }
//     }
// }


// let z = x()()();

// console.log(z);

// function x(){
//     let a = 40;
// }


// function y(){
//     let b = 80;
// }


// function z(){
//     let c = 100;
//     console.log(a);
// }


// console.log(z());


// function x(){
//     let a = 20;
//     //console.log(c);
//     function y(){
//         let b = 90;
//         function z(){
//             let c =80;
//             console.log(a);
//         }
//         z();

//     }
//     y();
// }


// x();




///=======================CLOUSERS============

// let x = () => {
//     var a = 7;
//     return y =() =>{  // return y;
//         //console.log(a);
//          return a      // return y();
//     }

    
// }

// console.log(x()());


// function x(){
//     //var i = 1;

//     for(var i =1;i<=5; i++){
//         //console.log(i);
//         function y(i){
//             setTimeout(() =>{
//                 console.log(`After ${i} seconds`);
//             },i*1000);
//             console.log('Namste Js');
//         }
//         y(i);
      
       
      
        
//     }


// }



// x();




// function x(){
//     var a = 10;
//     console.log(a);
//     function y(){
//         var a = 200;
//         console.log(a);
//     }
//     y();
// }


// x();

// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
//     console.log("Namste Javascript");

// }


// x();

//==========================FIRST CLASS FUNCTION=======================

// Function Statement

// function x(){
//     console.log('hello');
// }
 


//Function Expression

// var b = function(){
//     console.log("Hello world");
// }



//Function Declaration 

// Function Statement is also called Function Declaration.





//Anonymous Function

//function () {         // syntax error

//}

//Named Function Expression

// var z = function xyz(){
    // console.log("Hello World.");
// }


//Diffrence between Parameters and Arguments
// var b = function(Parameter){

// }

// b(arguments);

//First Class Function

// var b = function(para1){
//     return function xyz(){

//     }
// }

// console.log(b());

//Arrow Function

// What is callback function in js
// setTimeout(function(){
//     console.log('Timer');
// },3000);

// function x(y){ // fn defination
//     console.log("x");
//     y();

// }

// x(function y(){   // fn call
//     console.log("Y");
// });

// Js is synchronous and single threaded language
// it can only do one task at atime in a specific order that way it is called synchronous and single threaded language.
// Blocking the main thread
// Power of callbacks
//Deep about Event Listners
//Clousers Demo with Event Listners
//Scope Demo with Event Listners
//Garbage Collection and removeEventListners 


// function attachEventListner(){
//     let count  = 0;
//     document.getElementById("clickMe").addEventListener("click",function xyz(){
//         console.log("Clicked", ++count);
    
    
//     })
    
// }


// attachEventListner();


// FUNCTIONAL PROGRAMMING


// function x(){
//     console.log("Namaste Javascript.");
// }


// function y(x){
//     x();
// }


const raduis = [3,1,2,4];

const calculateArea = function(radius){
    const output = [];
    for(let i = 0 ; i < raduis.length ; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};

const calculateCircumference = function(radius){
    const output = [];
    for(let i = 0 ; i < radius.length ; i++){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
};

const calculateDiameter = function(radius){
    const output = [];
    for(let i = 0 ; i < radius.length ; i++){
        output.push(2 * radius[i]);
    }
    return output;
};
// console.log(calculateArea(raduis));
// console.log(calculateCircumference(raduis));
// console.log(calculateDiameter(raduis));

console.log("---------------------------------");
//More optimised way

/// logic functions
const area = function(radius){
    return Math.PI * radius * radius;
}

const circumference = function(radius){
    return 2 * Math.PI * radius;
}

const diameter = function(radius){
    return 2 * radius;
}

// main function

Array.prototype.calculate = function(logic){
    const output = [];
    for(let i = 0 ; i < this.length ; i++){
        output.push(logic(this[i]));
    }
    return output;
};

// console.log(raduis.map(area));
// //or
// console.log(raduis.map((raduis)=>{
//     return 3 * raduis;
// }))

// console.log(raduis.calculate(area));

// console.log(calculate(raduis,area));
// console.log(calculate(raduis,circumference));
// console.log(calculate(raduis,diameter));


// let arr = ['himanshu','kumar','singh'];

let object  = {
    name:'Himanshu',
    city:'aurangabad',
    getIntro:function(){
        console.log(this.name + "from" + this.city);
    },
}

// console.log(object.toString());



// let object2  = {
//     name:'kunal',
//     getIntro:function(){
//         console.log(this.name + "from" + this.city);
//     },
// }

// object2.__proto__ = object;
// console.log(object2.getIntro());


const array = [0,0,0];

// const output = array.map((i) => {
//     return i.toString(2);
// } )


// const output = array.filter((i)=>{
//     return i%2!==0;
// })
// console.log(output);


// const output = array.reduce((acc,curr)=>{
//     return acc = acc+curr ;
// })


// const output = array.reduce((i,max)=>{
//      if(i>max){
//          max = i;
//     }
//     return max;    
// })

const user = [
    {firstName:"Himanshu",lastName:"Singh",age:21},
    {firstName:"Manish",lastName:"Rajput",age:61},
    {firstName:"Rahul",lastName:"Rana",age:41},
    {firstName:"Updesh",lastName:"Kumar",age:31},
]

console.table(user);

// const output = user.map((i)=>{
//     return i.firstName + i.lastName + i.age;
// })

// const output = user.reduce((acc,curr)=>{
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age];

//     }
//     else{
//         acc[curr.age] = 1;
//     }
//     return acc;

// },{})

// const output = user.filter((i)=>i.age < 30).map((i)=>i.firstName);

// console.log(output);
// prompt("Hello world");


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`);
    readline.close();
  });
