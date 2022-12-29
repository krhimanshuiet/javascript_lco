// console.log("Himanshu Kumar Singh");
// var ,  let , const .
// How to name variable
// fullName
// full-name
// full_name

// var fullName = "Himanshu Kumar Singh";

// var courseName = "React JS Bootcamp";

// var isLoggedIn = false;

// var loggedCount = 34;

// var paymentMode;
// paymentMode =  "CreditCard";

// console.log(loggedCount);
// console.log(paymentMode);
// reserved keyword


// sign up from user 

// const uid = "abc123";

// var firstName = "Himanshu";
// var lastName = "Kumar Singh"
// var email = "krhimanshuiet766@gmail.com";
// var password = "123456";
// var state = "Bihar";
// var country = "India";
// var confirmPassword = "123445";
// var courseCount = 0;
// var isLoggedInFromGoogle = false;


// fullName = prompt("Enter your Name");


// console.log("Your Id is : "+ uid);
// console.log("Your Full Name is : "+ fullName);
// console.log("Your Email Id is : "+ email);

// console.log(`
//    With Unique ID: ${uid}
//    User first name  is : ${firstName}
//    his last name is : ${lastName}
//    he is from : ${state} ${country}
//    and his email is : ${email}
//    and uses the password: ${password}
//    and  is he signd up with google : ${isLoggedInFromGoogle}
//    and no of courses he has purchased : ${courseCount}
// `);

// operators

// var num1 = 7;
// var num2 = 9;

// console.log(num1+num2);

// var answer = num1 > num2 ;

// console.log(answer);


// var listingPrice = 799;
// var sellingPrice = 199;
// var discountPercentage =  ((listingPrice-sellingPrice)*100)/listingPrice;
// console.log(Math.round(discountPercentage)+"%");

// var temperature;


// temperature = 20;

// if (temperature < 20 ){
//     console.log("Its very cold outside");

// }

// if(temperature < 30){
//     console.log("Its moderate outsite")
// }

// else{
//     console.log("its really hot outside");
// }


// var isLoggedIn = true;
// var isEmailVerified = true;
// var cardInfo = false;

// if(isLoggedIn){
//     console.log("Logged in Successfully");
//     if(isEmailVerified){
//         console.log("Email is Verified");
//         if(cardInfo){
//             console.log("You can make a purchase");
//         }
//     }

// }

// if(isLoggedIn && isEmailVerified && cardInfo){
//     console.log("Allow user to make a purchase.");
// }
// else{
//     console.log("You are not allowed to make purchase.");
// }

// var isLoggedThroghEmail = false;
// var isLoggedThroughGoogle = false;
// var isLoggedThroughFacebook = false;


// if (isLoggedInFromGoogle || isLoggedThroghEmail || isLoggedThroughFacebook){
//     console.log("You can watch our courses.");

// }
// else{
//     console.log("Please Log in to our website.");
// }

// var isAuthenticated = true;

// if(authenticated){
//     console.log("Show signout button");

// }
// else{
//     console.log("Show login option");
// }

// isAuthenticated ? console.log("Show signout option") : console.log("Show login option");


// switch case

// var role = "admin";

// switch(role){
//     case "admin":
//         console.log("You have full acess");
//         break;
//     case "subadmin":
//         console.log("You have access to create and delete courses.");
//         break;
//     case "testprep":
//         console.log("You get acess to create / delete tests.");
//         break;
//     case "user":
//         console.log("You have access to consume content.");
//         break;
//     default:
//         console.log("Error");
//         break;
// }


// undefined  // not defined
// null       // nothing
// 0          // simple zero
// ''         // empty string
// NaN        // not a number

// var a;
// var b = null;
// var c = 0;
// var d = " ";
// var e = NaN;

// console.log(`
//    "a is : " ${typeof(a)}
//    'b is :'  ${typeof(b)} 
//    "c is : " ${typeof(c)}
//    "d is : " ${typeof(d)}
//    "e is : " ${typeof(e)}
// `)


// functions in javascript 


// function hello(name){
//     console.log(`hello there: ${name}`);
// }


// hello("himanshu");

// function namaste(){
//     return "Hello in India";
// }

// var greet = namaste();
// console.log(greet);

// console.log(namaste());


// var getRole = function (name ,  role){
//     switch(role){
//         case "admin":
//             return `${name} is admin with all acess`;
//             // break
//         case "subadmin":
//             return `${name} is Sub admin with  acess to create and delete courses.`;
//             // break
//         case "user":
//             return `${name} is user acess to consume content.`;
//             // break
//         case "testprep":
//             return `${name} is test prep  acess acess to crate and delete test `;
//             // break
//         default:
//             return `${name} is a trial user.`

        

//     }
// }


// console.log(getRole('himanshu kumar singh' , 'admin'));

// console.log(getUserRole("Himanshu","admin"));


// const myTable = [
//     {
//         name:'Himanshu Kumar Singh',
//         company:'uber'
//     },
//     {
//         name:'ritvik',
//         company:'google'
//     },
//     {
//         name:'rahul singh',
//         company:'microsoft'
//     },
//     {
//         name:'kunal singh',
//         company:'tcs'
//     },
//     {
//         name:'divya singh',
//         company:'infosys'
//     }
// ];

// console.log(myTable[2].name)
// console.table(myTable);

// context in javascript 


// sayHello();
// function sayHello(){
//     console.log("Hello");
// }

// getName();
// console.log(x);

// var x = 7;
// var getName = () => {
//     console.log('Hello');
// }

// function  getName(){
//     console.log('Hello world');
// 



// var x = 7;
// var getName= function(){
//     console.log('Hello world');
// } 
// getName();
// console.log(x);
// console.log(getName);

// tipper("78");

// function tipper(a){
//     var bill = parseInt(a);
//     console.log(bill+5);
// }


// var bigTipper = (a) => {
//     var bill = parseInt(a);
//     var tip = (20 * bill)/100;
//     var fBill = bill + tip;
//     console.log(fBill);
// }

// bigTipper(900);

// Scope Channing 
// var Name = "Himanshu";
// console.log('Line no 308',Name);

// function sayName(){
//     // var Name = 'My H';
//     console.log('Line number 311', Name);
//     sayName2();

//     function sayName2(){
//         // var Name = 'Mr HC';
//         console.log('Line no 315', Name);
//     }
// }

// sayName();

// This Keyword 

// console.log(this);


// var game = 'basketball';

// var sayName = function(){
//     var name = 'Himanshu Kumar Singh';
//     console.log(this)

// }

// sayName();


// Array in Js 


// master Array , Objects , loops because it is widely used in api making.

// array is just collection of homogeneous data 


// var countries = ['India' , 'USA' , 'JAPAN' ,'RUSSIA'];
 
// var states = new Array ('Rajasthan' , 'Delhi' , 'Mumbai' , 'Assam');

// console.log(states[0]);

// console.log(states.length);

// states[0] = 'Punjab';
// console.log(states);


// var user = ['Himanshu' , 'himanshuiet@gmail.com' , 3 , 34 , true];
// console.log(user);

// user.pop();
// user.pop();
// console.log(user);

// user.shift('himanshu');
// console.log(user);


// console.log(user.indexOf(3));  // gives -1 if not in array

// console.log(Array.from('Himanshu Kumar Singh'));

// callback and arrow function in array

// var isEven = (element) => {
//     // if(element % 2 === 0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
//     return element % 2 === 0;
// };
// console.log(isEven(9));


// call Back function

// var result = [2,4,6,8].every((e) => (e%2===0));
// console.log(result);



// var result = [2,4,9,8].every(isEven);
// console.log(result);

// var result = [2,4,9,8].every((e) => {return e%2 === 0});
// console.log(result);



// var testArray = [2,4,6,3,1,5,9,8];

// console.log(testArray.fill('h',2,5));

// const myNumber = [23,24,25,55,66,77,87,98];

// const result = myNumber.filter((num) => (num != 55));
// console.log(result);


// var users = ['Ted','Tism','Ton','Sam','Sor','Iod'];

// console.log(users.slice(1));
// users.splice(1,3,'Hi','Bye','GoodBye','ok');
// console.log(users);
// objects in js  - spinal code of js 



// var studentDetails = {
//     Name:'Himanshu Kumar Singh',
//     Class:'VI',
//     Roll:01,
//     FatherName:'Manoj Singh',
//     Gmail:'Krhimanshuiet766@gmail.com',
//     Address:'Rampur',
//     PoliceSation:'Nabinagar',
//     PostOffice:'Nabinagar',
//     District:'Aurangabad',
//     State:'Bihar'
// }


// console.table(studentDetails);


// var user = {
//     firstName:'Himanshu',
//     lastName:'Kumar Singh',
//     role:'admin',
//     loginCount:5,
//     facebookSignup:true,
//     courseList:[],
//     buyCourse:function (courseName) {
//         this.courseList.push(courseName);
//     },
//     getCourseCount:function (){
//         return `${this.firstName} is enrolled in total of ${this.courseList.length} courses `
//     },
//     getUserInfo:function(){
//         return `${this.firstName} ${this.lastName} 
//         who is ${this.role} 
//         who has loggined ${this.loginCount}
//         times through facebook ${this.facebookSignup} 
//         in ${this.courseList} courses.
//         ${this.getCourseCount()}`
//     }

// };
// console.log(user.buyCourse('ReactJs'));
// console.log(user.buyCourse('AngularJs'));
// console.log(user.buyCourse('VueJs'));
// console.log(user.buyCourse('Javascript'));
// console.log(user.getCourseCount());
// console.log(user.getUserInfo());
// console.log(user);
// user.loginCount = 55;
// console.log(user.loginCount);
// console.table(user);


// loops 


// for(let i = 0; i < 10 ; i++){
//     console.log(i);

// }

const myStates = [
    'Rajasthan',
    'Delhi',
    'Assam',
    1947,
    'Bihar',
    'TamilNadu',
    'WestBengal',
    'Maharashtra'
];

// for(let i = 0 ; i < myStates.length ; i++){
//     if(typeof myStates[i] !== "string")
//     break;
//     console.log(myStates[i]);
//     // console.log(myStates[i]);
// }

// let i = 0;
// while(i < myStates.length){
//     console.log(myStates[i]);
//     i++;
// }


// let i = 30;
// do{
//     console.log(myStates[i]);
//     i++;
// }while(i<myStates.length)

// for - each loop
// var i = 0;
// for(;;){
//     if(i>3)break;
//     console.log(i);
//     i++;
// }

// myStates.forEach((s) => (console.log(s)));

// for in and for of loop

const names = [
    'youtube',
    'facebook',
    'twitter',
    'instagram',
    'netflix',
    'amazon'
];

// for(const n of names){
//     console.log(n);
// }


// const symbols = {
//     yt:'youtube',
//     ig:'instagram',
//     fb:'facebook',
//     amz:'amazon',
//     lco:'learn code online'
// };

// for(const i in symbols){
//     console.log(symbols[i])
//     // console.log(`key is  ${i} and value is ${symbols[i]}`);
// }


// this keyword in js

// console.log(this);

// var user = {
//     firstName:'Himanshu Singh',
//     courseCount:6,
//     getCourseCount:function(){
//         console.log('line 561', this);
//         function sayHello(){
//             console.log('Hello world.');
//             console.log('line 564',this)
//         }
//         sayHello()
//     },
// }


// user.getCourseCount()

// user.getCourseCount();

// function hello(){
//     console.log('hello');
// }

// hello();  // regular fn call.


// objects


// var User = function(firstName,courseCount,myClass){
//     this.firstName = firstName;
//     this.courseCount = courseCount;
//     this.myClass = myClass;
//     this.getCourseCount = function(){
//         console.log(`Course count is:${this.courseCount}`);
//     };

// };

// User.prototype.getFirstName = function(){
//     console.log(`Your First Name is:${this.firstName}`);
// };

// var hks = new User('himanshu',2,'IT');
// hks.getCourseCount()
// if(hks.hasOwnProperty('firstName')){
//     hks.getFirstName();
// }



// var sam = new User('sam',5);
// console.log(sam);

// var User = {
//     name : "",
//     getUserName : function(){
//         console.log(`User name is:${this.name}`);
//     },

// };
// var hks = Object.create(User);


// hks.name = 'Himanshu Kumar Singh';

// hks.getUserName();
// console.log(hks);
// var sam = Object.create(User,{
//     name:{value:'sanny'},
//     courseCount:{value:3},
// });
// sam.getUserName();
// console.log(sam);


// var sayHello = function(){
//     console.log('I say Hello');
// }


// sayHello();
// self ececuting anonymous function
// var sayHello = (function(){
//      console.log('I say hello');
//      console.log('I again say hello');
// })();



// lexical scopiing in js 

// function init(){
//     var firstName = 'hks';
//     function sayFirstName(){
//         console.log(firstName);
//     }
//     sayFirstName();
// }


// init();
// console.log(firstName); // we  dont haeve first name this is called lexical scoping because all executional contest ahave been poped out from the stack after the sucessfull execution.

// var nnn = init();
// console.log(nnn);


// clousers


// function init(){
//     var firstName = 'hks';
//     //console.log('I am init');
//     function sayFirstName(){
//         console.log(firstName);
//     }
//     return sayFirstName;
// }


// var value = init();

// value();



// function doAddition(x){
//     return function(y){
//         return x+y;
//     }
// }

// var add5 = doAddition(4);
// console.log(add5(5));


// console.log(doAddition(5)(2));

// function sum1(x){
//     return function sum2(y){
//         return function sum3(z){
//             return x+y+z;
//         }
//     }
// }


// console.log(sum1(5)(6)(6));

// var x = sum1(10);
// var y = x(10);
// var result = y(10);

// console.log(result);


// Borrow a method using bind

// doAddition()()()(); // curring 

// var myDatails = function(firstName,lastName,role,courseCount){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.role = role;
//     this.courseCount = courseCount;
//     this.getInfo = function()
//     {
//         console.log(`
//         First Name is ${this.firstName}
//         Last Name is ${this.lastName}
//         His Role is ${this.role}
//         and he is studying ${this.courseCount} courses`
//         )

//     }
// }


// var hks = new  myDatails('himanshu','kumar singh','admin','4');
// hks.getInfo();

// const hks = {
//     firstName : 'Himanshu',
//     lastName : 'Kumar Singh',
//     role:'admin',
//     courseCount : 4,
//     getInfo:function(){
//         console.log(`
//         First Name is ${this.firstName}
//         Last Name is ${this.lastName}
//         His Role is ${this.role}
//         and he is studying ${this.courseCount} courses`
//         )
//     }
// };

// method sharing using bind , which always return refrence of its own.

// const dj = {
//     firstName :'rock',
//     lastName:'DJ',
//     role:'Sub-Admin',
//     courseCount:4,
// };
// hks.getInfo.call(dj);
// var djInfo = hks.getInfo.bind(dj);

// djInfo();


// let greet = 'hello';
// let  time  = 4;
// if(time < 3){
//     let greet = 'hello world';
// }

// console.log(greet);


// console.log(name);
// var  name = 'Hks';


// if(true){
//     let lastName = 'kumar';
  
// }
// console.log(lastName);


// var name ='Himanshu';

// var name  = ['h','h','h','h','h','h','h'];
// name[3];

// var name = 'himanshu '
// var fullName = `${name}kumar singh`;
// console.log(fullName.charAt());

// console.log(fullName.toUpperCase('h'));

var myMap = new Map();

myMap.set('Himanshu rajput',1);
myMap.set('Himanshu Kumar ',2);
myMap.set('Himanshu singh',3);
myMap.set('Himanshu chakorboty',4);
myMap.set('Himanshu iyer',5);
myMap.set('Himanshu nair',6);

// console.log(myMap.keys());
// myMap.forEach((value,key) => {
//     console.log(value*2);
// });
// for (let [key,value] of myMap) {
//     console.log(`Key is:${key} and Value is: ${value}`);
    
// }

// for(let value of myMap.values()){
//     console.log(value)
// }


// myMap.forEach((v,k)=> console.log(`value is ${v} and key is ${k}`));
// myMap.delete('Himanshu singh');
// console.log(myMap);

// const n = 'hks';
// function myName(){
//     console.log(n);
// }
// myName();


// const user = ['hiamanshu' , 3 , 'admin'];

// var role = user[2];
// var name = user[0];
// var [name,coursecount,role] = user;
// console.log(role);


// const myUser = {
//     name:'himanshu',
//     courseCount :4,
//     role:'admin'
// };

// console.log(myUser.courseCount);

// // destructuring of objects 
// const  {name,courseCount,role} = myUser;
// console.log(courseCount);


// var value = Math.max(2,5,6,8,9,0,10,5,67,8);
// console.log(value);

// var obj = {};
// Object.assign(obj,{a:1,b:2,c:3,d:4,e:5},{x:34,y:78,z:87});

// console.log(obj);


// function sumOne(a,b){
//     return a+b;
// }

// var myA = [3,4]
// console.log(sumOne(...myA));  // ... spread operator spred out array into individual values.


// function sumTwo(a,b,...args){  // rest operator ,converting individual value into the array.
//     let mult = a*b;
//     let sum =  0;
//     for(const arg of args){
//         sum += arg;
//     }
//     return [sum,mult];
// }

// console.log(sumTwo(2,4,5,6,7,8,9,0));


// classes and objects in js 


// const uno = () => {

//     console.log('I am One');

// }
// const dos = () => {
//     setTimeout(()=>{
//         console.log('wohoooooo');
//     },1000)
//     console.log('I am two');

// }
// const tres = () => {
//     console.log('I am Three');

// }
// uno();
// dos();

// tres();

// promises , async and await , resolve , reject

// const uno = () => {
//     return "Hey! I am One";
// };

// const dos = async() => {
//     setTimeout(()=>{
//         return "Hey! I am Two.";
//     },1000);

// };

// const tres = () => {
//     return "Hey! I am Three.";
// };

// const dos = () => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('I am Two.')
//         },1000);
//         // reject('I got that');
//     })

// };

// const callMe = async() =>{
//     let valOne = uno();
//     console.log(valOne);

//     let valTwo = await dos();
//     console.log(valTwo);

//     let valThree = tres();
//     console.log(valThree);
// };


// callMe();

// API Handling 


// fetch("https://api.chucknorris.io/jokes/random")
// .then(response =>{
//     return response.json();
// })
// .then((data)=>{
//     // console.log('DATA is',data);
//     var joke = data.value;
//     console.log("Joke:",joke);
// })
// .catch()

