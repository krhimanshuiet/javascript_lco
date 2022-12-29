const courses = [
    {
        name:'Complete React Js Courses',
        price:'2.30'
    },
    {
        name:'Complete Angular Js Courses',
        price:'2.90'
    },
    {
        name:'Complete Vue Js Courses',
        price:'2.10'
    },
    {
        name:'Complete MERN  Courses',
        price:'2.00'
    },
    {
        name:'Complete C++ Courses',
        price:'2.75'
    },
    {
        name:'Complete C++ Courses',
        price:'6.50'
    },
    {
        name:'Complete C++ Courses',
        price:'4.50'
    },
    {
        name:'Complete C++ Courses',
        price:'7.50'
    },
    {
        name:'Complete C++ Courses',
        price:'3.50'
    },
    {
        name:'Complete C++ Courses',
        price:'1.50'
    },
    {
        name:'Complete C++ Courses',
        price:'3.50'
    },
    {
        name:'Complete C++ Courses',
        price:'6.50'
    },
];

function generateList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((courses) => {
        const li = document.createElement("li")
        li.classList.add("list-group-item")
        const name = document.createTextNode(courses.name)
        li.appendChild(name)
        const span = document.createElement("span")
        span.classList.add("right")
        const price = document.createTextNode(" $ "+courses.price)
        span.appendChild(price)
        li.appendChild(span)
        ul.appendChild(li)
    });
}

window.addEventListener("load",generateList);
// generateList();


const sortButton = document.querySelector(".sort-btn");
const resetButton = document.querySelector(".reset-btn");

sortButton.addEventListener("click",()=>{
    courses.sort((a,b)=>a.price - b.price);
    generateList();
});

// window.resetButton.addEventListener("click",generateList);
resetButton.addEventListener("click",()=>{
    courses.sort((a,b) => b.price - a.price);
    generateList();
});