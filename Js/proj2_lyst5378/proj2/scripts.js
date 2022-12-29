const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");


console.log(window.getComputedStyle(red).backgroundColor);


const  getBGColor = (selectedElement) => 
{
    return window.getComputedStyle(selectedElement).backgroundColor;

};

var Color = getBGColor(orange);


orange.addEventListener("mouseenter",()=>{
    center.style.background = Color;
});



const magicColorChanger = (element,Color) => {
    return element.addEventListener("mouseenter",()=>{
        center.style.background = Color;
    });

};

magicColorChanger(red,getBGColor(red));
magicColorChanger(cyan,getBGColor(cyan));
magicColorChanger(violet,getBGColor(violet));
magicColorChanger(violet,getBGColor(violet));
magicColorChanger(pink,getBGColor(pink));