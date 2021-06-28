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
        }else{
            entry.target.firstChild.nextSibling.classList.remove('main__proyect-phone-active');
            entry.target.lastChild.previousSibling.classList.remove('main__proyect-text-active');

        }
    }
}

const observer = new IntersectionObserver(verifyVisibility);

proyects.forEach(x => observer.observe(x));
