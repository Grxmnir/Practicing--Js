const text = "This will keep on repeating forever";

let index = 0;

function WriteText() {

    document.body.innerText = text.slice(0, index);

    index++;


    if (index > text.length ) {
        index = 0;
    }



}

setInterval(WriteText, 100)