const quizData = [
    {
        question : "Who is the president of USA?",
        a : "Aniket Pithadia",
        b : "Donald Trump",
        c : "Mitansh Pithadia",
        d : "Ivan choklav",
        correct : "b"
    },
    {
        question : "What is the most used language in 2020?",
        a : "Java",
        b : "C++",
        c : "Python",
        d : "Javascript",
        correct : "b"
    },
    {
        question : "Full form of CSS?",
        a : "Cascading Style sheets",
        b : "Hypertext Markup Language",
        c : "Hello World",
        d : "Cat Squirrrel shark",
        correct : "a"
    },
    {
        question : "What is legal drinking age in USA?",
        a : "12",
        b : "14",
        c : "18",
        d : "21",
        correct : "c"
    },
    {
        question : "Who is the father of USA?",
        a : "Abraham Lincoln",
        b : "Donald Trump",
        c : "Arnold Schwannager",
        d : "Ivan chokolav",
        correct : "a"
    }
    
];
let currentQuiz = 0;
let score = 0;


const question = document.getElementById("question");
let answers = document.querySelectorAll(".answer");

const a_text =document.getElementById("a_text");
const b_text =document.getElementById("b_text");
const c_text =document.getElementById("c_text");
const d_text =document.getElementById("d_text");

const submitBtn = document.getElementById("submit");


function loadQuiz(){
    deSelect();
    const current = quizData[currentQuiz];

    question.innerHTML = current.question;
    a_text.innerHTML = current.a;
    a_text.value = current.a;
    b_text.innerHTML = current.b;
    c_text.innerHTML = current.c;
    d_text.innerHTML = current.d;

}
loadQuiz(); 

function getSelected(){
    let selected = undefined;

    answers.forEach(answer => {
        if(answer.checked){
            selected = answer.id; 
        }
    })
    if(selected == undefined){
        alert("Please Select an option");
    }
    return selected;
}

function deSelect(){
    answers.forEach(answer => {
        answer.checked = false;
    });
}

submitBtn.addEventListener("click",()=>
{
    let answer = getSelected();
    if(answer)
    {   
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            document.getElementById("header").textContent= "You've Finised!!";
            document.getElementById("score").textContent = `Your score is ${score}/${quizData.length}`;


        }
    }  
});
