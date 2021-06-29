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

const proyectsPhone = document.querySelectorAll(".main__proyect-phone");
const proyects = document.querySelectorAll(".main__proyect");
const proyectsText = document.querySelectorAll(".main__proyect-text");

const verifyVisibility = entries =>{
    for(let entry of entries){
        if (entry.isIntersecting) {
           entry.target.firstChild.nextSibling.classList.add('main__proyect-phone-active');
           entry.target.lastChild.previousSibling.classList.add('main__proyect-text-active');
        }
    }
}

const observer = new IntersectionObserver(verifyVisibility);

proyects.forEach(x => observer.observe(x));

const form = document.querySelector(".main__form");
const text = document.getElementById("text");
const email = document.getElementById("email");
const sendButton = document.getElementById("submit");

form.addEventListener("input",()=>{
    if (text.value.length > 0 && email.value.length > 0) {
        sendButton.removeAttribute("disabled");
        sendButton.style.background = "#42E2B8";
        sendButton.style.border = "2px solid black";
        sendButton.style.cursor = "pointer";
    }else{
        sendButton.setAttribute("disabled","");
        sendButton.style.background = "";
        sendButton.style.border = "";
        sendButton.style.cursor = "";
    }
})