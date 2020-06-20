const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const btimeGauge = document.getElementById("btimeGauge");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("score");
let TIMER;
let score = 0;

class Question{
    constructor(question,choiceA,choiceB,choiceC,choiceD,answer){
        this.question=question;
        this.choiceA=choiceA;
        this.choiceB=choiceB;
        this.choiceC=choiceC;
        this.choiceD=choiceD;
        this.answer=answer;
    }
}

let questions = [
    new Question(
        "Each of the following statements is true, except:",
        "Virus come in different types",
        "Viruses infect living cells",
        "Viruses can replicate without hosts",
        "Viruses can cause illnesses",
        "C"
    ),
    new Question(
        "A virus infects a host in order to:",
        "Take in nutrients",
        "Make the host sick",
        "Make copies of itself",
        "Destroy the host's cells",
        "C"
    ),
    new Question(
        "The distinguishing feature of a coronavirus is its:",
        "Size",
        "Mobility",
        "Shape",
        "Deadliness",
        "C"
    )
];

const lastQuestion = questions.length-1;
let runningQuestion = 0;

start.addEventListener("click",function(){
    quiz.style.display = "block";
    start.style.display = "none";
    document.getElementById("title").style.display = "none" ;
    renderQuestion();
    renderProgress();
    renderCounter();
    TIMER=setInterval(renderCounter,1000);
})

function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

let count=0;
const questionTime=10;
const gaugeWidth=150;
const gaugeUnit=gaugeWidth/questionTime;
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count*gaugeUnit;
        count++;
    } else{
        answerIsWrong();
        count=0;
        if(runningQuestion<lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            clearInterval(TIMER);
            document.getElementById("timer").style.display="none";
            quiz.style.display = "none";
            scoreDiv.innerHTML= "<h1>Your score is "+score+"/"+questions.length+"</h1>";
        }
    }
}

function checkAnswer(answer){
    if(answer==questions[runningQuestion].answer){
        score++;
        answerIsCorrect();
    } else{
        answerIsWrong();
    }
    count=0;
    if(runningQuestion<lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(TIMER);
        document.getElementById("timer").style.display="none";
        quiz.style.display = "none";
        scoreDiv.innerHTML= "<h1>Your score is "+score+"/"+questions.length+"</h1>";
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}