//alert("Hello there");
/*
this 
is multiline 
comment 
*/
//var bankAccountForMe = 3;
//var y = 5;
//var z = bankAccountForMe + y;

//Variables 

//var fruits;
//fruits = 100;
//var companyName ;
//companyName = "Apple";
//
//var apple = 100 , nameIs = "Jhon"; , price = 300;
//fruits = 50;


//var fruits;
//var companyName;
//var price;
//fruits = 400;
//price = 50;
//companyName = fruits + price;
//document.getElementById("test").innerHTML = companyName;
//companyName = fruits - price;
//document.getElementById("test").innerHTML = companyName;
//companyName = fruits * price;
//document.getElementById("test").innerHTML = companyName;
//companyName = fruits / price;
//document.getElementById("test").innerHTML = companyName;
//companyName = fruits % price;
//document.getElementById("test").innerHTML = companyName;


//var score;
//score = 80;
//score++;
//
//var temp = null;
//
//var myNumber = 50; // number
//
//var myString = 'himanshu kumar singh'; // string
//
//var harley = ["street750" , "fatboy" , "streetbob"]; // array
//
//var bikeObject = {nameOfBike:"street750", cc:750 };
//// object
//
//
//document.getElementById("test").innerHTML = score;

// comparison and conditionals 

// var greeting = "";

// var highScore = 453;

// var myScore = 200;

// if (myScore  < highScore){
    
//     greeting = "OOPS you just missed the high score AHHH ";
    
    
    
// }

//if (myScore  == highScore){
//    
//    console.log()
//    
//    
//}
//
//
//if (myScore  > highScore){
//    
//    console.log()
//    
//    
//}


// var greeting = "" ;
// var highScore = 453;

// var myScore = "453";


// if (myScore < highScore){

//     greeting = "OOPs! you just missed the high score.";

// }
// else if(myScore === highScore){
//     greeting = "you just matched the high score."

// }
// else{
//     greeting = "Hurrey! you jut got high score."
// }


// switch and case.
// var highScore = 2;
// var myScore = "453";

// switch(new Date().getDay()){
//     case 0:
//         greeting = "I dont move on sunday";
//         break;
//     case 1:
//         greeting = "Monday : GO to work";
//         break;
//     case 2:
//         greeting = "Tuesday : Chill out with family";
//         break;
//     case 3:
//         greeting = "Wedneday: Focus on learning";
//         break;
//     case 4:
//         greeting = "Thrusday : Analyze the outcome";
//         break;
//     case 5:
//         greeting = "Friday: Last day of work";
//         break;
//     case 6:
//         greeting = "Saturday: Party Night";
//         break;
//     default:
//         greeting = "Hey Hey ! What are you sending me."
//         break;

// }

// For and while , do - while loop.

// var greeting = "";
// var highScore = 2;
// var myScore = "453";

// var harley = ["street750" , "StreetBOB" , "FatBoy" , "StreetGlide" , "Iron883"];

// greeting  += harley[0] +"<br>" ;
// greeting  += harley[1] +"<br>" ;
// greeting  += harley[2] +"<br>" ;
// greeting  += harley[3] +"<br>" ;
// greeting  += harley[4] +"<br>" ;
// var i;
// for (i = 0 ; i < harley.length ; i++){
//     greeting += harley[i] + "<br>";
// }
// var i = 0;
// for( i in harley){
//     greeting += harley[i] + "<br>";
// }

// while(i<harley.length){
//     greeting += harley[i] + "<br>";
//     i++;
// }

// do{
//     greeting += harley[i] + "<br>";
//     i++;
// }while(harley.length>i);

// harley[0] - called subscripting 


// Break and continue statements.




// document.getElementById("test").innerHTML = greeting;
// console.log("Hello World");

//Important Notes 
// = it is assignment operator , used to assign the value to the variable.
// == it only checks the value not the datatype of the variable.
// === it checks the value as well as the data type of the variable. 


// while(i  <= 9){
//     greeting += "<br> The new number is " + i;
//     i++
// }

// do{
//     greeting += "<br> The new number is " + i;
//     i++;
// }while(i <= 9)

// var i = 0 ;
// var greeting  =" ";

// var highScore = 897;
// for(i = 0 ; i < 15 ;i++){
//     if(i==10){
//         continue;
//     }
//     greeting += "<br> Your new number is " + i;
   
// }

// Functions in javascript 

// function multiplicationFunc(num1 , num2 , num3)
// {
//     var youscore = 1000;
//     return num1 * num2 * num3;

// }

// object 
// var harley = {
//     firstName :"street",
//     SecondName:"750",
//     CC:"850cc",
//     weight:"320",
//     color:"Black",
//     fullname:function(){
//         return this.firstName + " - " + this.SecondName;
//     }

// }

// event in javascript 
// function showDate(){
//     document.getElementById("test").innerHTML = Date();
// }

// document.getElementById("test").innerHTML = harley.fullname();


// try catch

// try 
// {
//     aleert("hello user");
// }
// catch(err){
//     document.getElementById("test").innerHTML = err.message;
// }


// function myError(){
//     var msg , x;
//     msg = document.getElementById("msg");
//     msg.innerHTML="";

//     x = document.getElementById("some").value;
//     try{
//         if(x == "") throw "Please chose a number";
//         if(isNaN(x)) throw "Only Numbers are allowed";
//         if(x < 4) throw "Choose a number greater than 3";
//     }
//     catch(err){
//         msg.innerHTML = " Error is " + err;
//     }
//     finally{
//         document.getElementById("some").value = "";
//     }

// }

// string function  

// var samplestring = 'let\'s start our journey with javascript';
// console.log(samplestring.indexOf('start'));
// console.log(samplestring.lastIndexOf('start'));
// console.log(samplestring.slice(5,11));

// substring (start , end ) --> substring() cannot accept negative indexex.
// substring (start , length) --> second paramter specifies the length of the extracted part.


// console.log(samplestring.replace("journey" , "Adventure"));
// console.log(samplestring.toLocaleLowerCase());
// console.log(samplestring.toUpperCase());
// console.log(samplestring.substring(5,7));

// var name1 = "kevin";
// var name2 = new String("kevin");
// if(name1 === name2){
//     console.log("Result is true");
// }
// else
// {
//     console.log("Result is wrong");

// }


// Numbers functions in JS

// var num1 = 45;
// var num2 = 34;
// var bool = true;
// var str = "something";
// console.log(num1/str);
// // Numbers can be objects too .

// console.log((2+2).toString());
// console.log(Number(bool));
// console.log(Number(bool));
// console.log(parseInt("100 years later"));



// console.log(Math.random());
// console.log(Math.random()* 100);
// console.log(Math.min(1,6,43,65,-85,-70,55,23));
// console.log(Math.max(1,2,3,67,86,87,97,23));
// console.log(Math.round(4.7));
// console.log(Math.PI);

// "use strict"

// var myvar = 10;

// var myvar = 8;

// var some  = 9;


// document.getElementById("test").innerHTML = " myvar is " + myvar + " and some is " + some;

// var str = "Apple apple APPLE AppLE AppLe aPPLE";
// var text = str.replace(/([A-Z])\w+/gi , "google");

// function basics 
// function increaseHighScore(currentScore)
// {
//     var newHighScore = 2 * currentScore;
//     return newHighScore;
// }
// console.log(increaseHighScore(56));

// var increaseHighScore = function (currentScore)
// {
//     // var newHighScore = 2 * currentScore;
//     // return newHighScore;
//     return(
//         console.log(this),
//         console.log(arguments)
//     )


// }(2);

// functions as objects 

// var harley = 
// {
//     name : "street750",
//     color: "Black",

//     getBudgetForCustomStuff : function(a){
//         return("You Need to lower budget",
//         console.log(this.name)
//         ) 
//     },

//     shoutOuts:[
//         {kevin:"A cool black monster with 750cc",
//          mevin:"A cool black american bike 890cc"
//         },
//         {sam:"Heavy bike with full power"}
//     ]



// };

// harley.getBudgetForCustomStuff(8000);
// console.log(harley.shoutOuts[0].mevin);
// console.log(increaseHighScore(76));


// document.getElementById("test").innerHTML = increaseHighScore(89);


// creating objects sing functions 
//Prototype of function 


// var walk = function(){
//     return("He is able to walk")
// }
// var SuperHero = function(){
//     var power,villian;
// }

// SuperHero.prototype.walk = walk;
// peterParker = new SuperHero;

// peterParker.power = "AirSwing";
// peterParker.villian = "Green Goblin";
// peterParker.walk();
// console.log(peterParker.walk());


// clark = new SuperHero;
// clark.power = "Fly";
// clark.villian = "Lex Luthor";

// console.log(clark.villian);

// call and apply 

// var doSomething = function(work){
//     console.log(work);
//     console.log(this.benchPress);


// }

// doSomething("pushps");
// var exercise = {benchPress:"4 sets ", squats:"2sets"};
// doSomething.call(exercise,exercise.benchPress);
// doSomething.apply(exercise,['crunches']);




// var multiplier = function(){
//     var result = 1;
//     for(var i = arguments.length-1 ; i >= 0 ; i--){
//         result *= arguments[i];
//     }
//     return result;
// }

// console.log(multiplier(2,5,8,6));


// closures in function 
// var counter = (function()
//     {
//         var addOne = 0;
//         return function(){return addOne += 1;}
//     }
// )();


// console.log(counter());

// DOM and Nodes 

// Document Object Model.

// document.getElementById("test").innerHTML = "Hey I am Himanshu Kumar Singh."

// var newList = document.createElement("li");
// newList.innerHTML = "I am added by js";

// document.getElementById("change").appendChild(newList);

// function myFunction(){
//     var x = document.forms["myForm"];
//     var text = "";
//     var i;
//     for (i = 0 ;  i < x.length ; i++) {
//         text += x.elements[i].value + "<br>";        
//     }
//     document.getElementById("getValue").innerHTML = text;
// }


// AJAX 

