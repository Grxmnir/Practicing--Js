const quizData = [
{
question: "How old is Rafael",
a: "1",
b: "15",
c:"17",
d: "19",
correct:"d",
}, {
    question: "How many siblings does he have",
    a: "1",
    b: "2",
    c:"3",
    d: "4",
    correct:"a",
} , {
    question: "What is his mom's name?",
a: "Clarice",
b: "Jenifer",
c:"Erika",
d: "Patricia",
correct:"c",
}, {
    question: "What is his dad's name?",
a: "Pedro",
b: "Nuno",
c:"Henrique",
d: "Agnaldo",
correct:"d",
}, {
    question : "What is his brother's name?",
a: "Carlos",
b: "Luccas",
c:"Lucas",
d: "Felix",
correct:"b",
},
    
];


const questionEl = document.getElementById("question")
const FirstAnswer = document.getElementById("FirstQuestion");
const SecondAnswer = document.getElementById("SecondQuestion");
const ThirdAnswer = document.getElementById("ThirdQuestion");
const FourthAnswer = document.getElementById("FourthQuestion");
const SubmitBtn = document.getElementById("submit")


let currentQuiz = 0;



function loadQuiz(){
   const currentQuizData = quizData[currentQuiz];
   questionEl.innerText = currentQuizData.question;

   FirstAnswer.innerText = currentQuizData.a;
   SecondAnswer.innerText = currentQuizData.b;
   ThirdAnswer.innerText = currentQuizData.c;
   FourthAnswer.innerText = currentQuizData.d;

}

SubmitBtn.addEventListener(click, ()=>{
    currentQuiz++;
})


loadQuiz();
