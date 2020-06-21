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
    ),
    new Question(
        "A typical coronavirus infection:",
        "Is extremely dangerous",
        "Has mild symptoms",
        "Cannot spread to humans",
        "Is resistant to hand washing",
        "B"
    ),
    new Question(
        " Coronavirus infections are likely to be more serious for:",
        "Teens",
        "Active adults",
        "Frequent travelers",
        "People with weakened immune systems",
        "D"
    ),
    new Question(
        "An outbreak of a virus occurs when:",
        "Symptoms of the virus get worse",
        "The virus spreads to more than one organ",
        "Someone dies from the virus",
        "The virus spreads to more and more hosts",
        "D"
    ),
    new Question(
        "What does it mean when a city is quarantined during a virus outbreak?",
        "Everyone in the city is infected",
        "No one can enter or leave the city",
        "The city’s population is immune to the virus",
        "Doctors in the city are developing a cure",
        "B"
    ),
    new Question(
        "Which practice prevents the spread of germs?",
        "Washing your hands often",
        "Blowing your nose ",
        "Reusing the same tissue",
        "Coughing into your hand",
        "A"
    ),
    new Question(
        "Covering your mouth when you cough or sneeze is recommended to:",
        "Prevent germs from entering your body",
        "Get rid of germs from inside your body",
        "Avoid getting other people sick",
        "Warn other people that you are sick",
        "C"
    ),
    new Question(
        "The most reliable source of information about virus outbreaks is:",
        "News headlines",
        "Social media",
        "Your peers",
        "The World Health Organization",
        "D"
    ),
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
    $("#quiz").fadeIn();
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
        new Audio("media/sounds/score.wav").play();
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
    new Audio("media/sounds/correct.wav").play();
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
    new Audio("media/sounds/wrong.wav").play();
}
