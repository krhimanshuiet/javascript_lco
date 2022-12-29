const User = require("./classjs");


const hks = new User('himanshu kumar singh','krhimanshuiet766@gmail.com');


console.log(hks.getInfo());


hks.enrollCourse('React Bootcamp');
hks.enrollCourse('Angular Bootcamp');
console.log(hks.getCourseList());


let courses = hks.getCourseList();

courses.forEach((c)=>console.log(c));

