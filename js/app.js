"use strict";

const hover = document.querySelectorAll(".hover");
const a = document.querySelectorAll(".effect");


a.forEach( (element, i) =>{
    element.addEventListener("mouseenter", (e)=>{
        e.preventDefault;
        hover[i].style.animation = "hoverEffect .5s ease"; 
        hover[i].addEventListener("animationend",()=> hover[i].style.animation = "none");
    })
})