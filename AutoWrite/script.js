const text = "Esse tal de dejota é embaçado demais";

let index = 0;

function WriteText() {

    document.body.innerText = text.slice(0, index);

    index++;


    if (index > text.length ) {
        index = 0;
    }



}

setInterval(WriteText, 100)