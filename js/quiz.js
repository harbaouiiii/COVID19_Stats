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
const resDiv = document.getElementById("res");
const abc = document.getElementById("abc");
let TIMER;
let score = 0;
let userAnswers = [];
let uIndex = 0;

const lastQuestion = questions.length-1;
let runningQuestion = 0;

start.addEventListener("click",function(){
    quiz.style.display = "block";
    start.style.display = "none";
    document.getElementById("title").style.display = "none" ;
    document.getElementById("par").style.display = "none" ;
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
const questionTime=15;
const gaugeWidth=150;
const gaugeUnit=gaugeWidth/questionTime;
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count*gaugeUnit;
        count++;
    } else{
        answerIsWrong();
        userAnswers[uIndex]="W";
        uIndex++;
        count=0;
        if(runningQuestion<lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            clearInterval(TIMER);
            document.getElementById("timer").style.display="none";
            quiz.style.display = "none";
            document.getElementById("score").style.display="block";
            resDiv.innerHTML= "<h1>Your score is "+score+"/"+questions.length+"</h1>";
            results();
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
    userAnswers[uIndex]=answer;
    uIndex++;
    count=0;
    if(runningQuestion<lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(TIMER);
        document.getElementById("timer").style.display="none";
        quiz.style.display = "none";
        document.getElementById("score").style.display="block";
        resDiv.innerHTML= '<h1>Your score is '+score+'/'+questions.length;
        results();
        new Audio("media/sounds/score.wav").play();
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "rgb(64, 151, 76)";
    new Audio("media/sounds/correct.wav").play();
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#b62626";
    new Audio("media/sounds/wrong.wav").play();
}

function results(){

    abc.innerHTML= "";
    for(i=0;i<uIndex;i++){
        if(questions[i].answer==userAnswers[i]){
            abc.innerHTML += `
                <div class="box">
                    <h3 class="question">Question `+(i+1)+`</h3>
                    <h4 class="question_title">`+questions[i].question+`</h4>
                    <h5 class="answer">Your answer is correct : <br> `+questions[i].answer_text+` </h5>
                </div>
            `;
        } else{
            abc.innerHTML += `
                <div class="box">
                    <h3 class="question" style="color: #b62626">Question `+(i+1)+`</h3>
                    <h4 class="question_title" style="color: #b62626">`+questions[i].question+`</h4>
                    <h4 class="answer">Your answer is wrong</h4>
                    <h5 class="correction">Correct Answer is : `+ questions[i].answer_text +`</h5> 
                </div>
            `;
        }
    }

}