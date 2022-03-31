"use strict";

//navbar fica branca quando o usuario usa o scroll


     window.addEventListener("scroll",function(){
        const header = document.querySelector("header")
        header.classList.toggle("sticky",window.scrollY > 0);
    });