"use strict";


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

const contact = document.querySelector(".main__contact");
const form = document.querySelector(".main__form");
const text = document.getElementById("text");
const email = document.getElementById("email");
const sendButton = document.getElementById("submit");
const message = document.getElementById("message")

form.addEventListener("input",()=>{
    if (text.value.length > 0 && email.value.length > 0) {
        sendButton.removeAttribute("disabled");
        sendButton.style.background = "#42E2B8";
        sendButton.style.border = "2px solid black";
        sendButton.style.cursor = "pointer";
        sendButton.classList.add("main__form-submit-active");
    }else{
        sendButton.setAttribute("disabled","");
        sendButton.classList.remove("main__form-submit-active");
        sendButton.style.background = "";
        sendButton.style.border = "";
        sendButton.style.cursor = "";
    }
});

let validatedData = {
    nombre : false,
    mail : false
};

const validateMail = () =>{
    if(email.value.includes(".com",".","@")){
        validatedData.mail = true;
    }else{
        validatedData.mail = false;
    }
}

const validateName = ()=>{
    if (text.value.length >= 2) {
        validatedData.nombre = true;
    }else{
        validatedData.nombre = false;
    }
}

const createP = () => {
    const p = document.createElement("P");
    p.classList.add("main__validation-error");
    return p;
}

const p = createP();

const checkValidation = () =>{
    let formValues = Object.values(validatedData);
    let formKeys = Object.keys(validatedData);
    let validatedIndex = formValues.findIndex(x => x == false);
    if (validatedIndex == -1){
        alert("Formulario enviado");
        if (contact.lastChild === p) {
            contact.removeChild(p);
        }
        text.value = '';
        email.value = '';
        message.value = '';
    }
    else{
        let code = '';
        for(let key in validatedData){
            if (validatedData[key] == false) {
                code += `Por favor complete el ${key}* <br>`;
            }
        }
        p.innerHTML = code;
        contact.appendChild(p);
    }
}



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validateName();
    validateMail();
    checkValidation();
});