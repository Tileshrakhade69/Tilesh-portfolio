const text = [
    "AI Student",
    "Software Developer",
    "Data Analytics Enthusiast"
];

let index = 0;
let charIndex = 0;

const typingElement = document.querySelector(".typing");


function type(){

    if(charIndex < text[index].length){

        typingElement.textContent += text[index].charAt(charIndex);
        charIndex++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1500);

    }

}


function erase(){

    if(charIndex > 0){

        typingElement.textContent = text[index].substring(0,charIndex-1);
        charIndex--;

        setTimeout(erase,50);

    }

    else{

        index++;

        if(index >= text.length){
            index = 0;
        }

        setTimeout(type,500);

    }

}


document.addEventListener("DOMContentLoaded",()=>{

    type();

});