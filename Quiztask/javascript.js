let quiz = [
{
question:"Which language is used for web pages?",
options:["Java","Python","JavaScript","C++"],
answer:2
},

{
question:"HTML stands for?",
options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyper Tool Multi Language",
"None"
],
answer:0
},

{
question:"CSS is used for?",
options:["Database","Styling","Programming","Server"],
answer:1
},

{
question:"Which symbol is used for comments in JavaScript?",
options:["//","##","<!--","**"],
answer:0
},

{
question:"Which keyword declares a variable?",
options:["int","let","char","float"],
answer:1
},

{
question:"DOM stands for?",
options:[
"Document Object Model",
"Data Object Method",
"Document Order Model",
"None"
],
answer:0
},

{
question:"Which company developed JavaScript?",
options:["Microsoft","Google","Netscape","Apple"],
answer:2
},

{
question:"Which method displays output?",
options:[
"print()",
"console.log()",
"write()",
"display()"
],
answer:1
},

{
question:"Which operator compares value and datatype?",
options:["==","=","===","!="],
answer:2
},

{
question:"Which event occurs on button click?",
options:[
"mouseover",
"submit",
"click",
"keydown"
],
answer:2
}];

let currentQuestion = 0;
let answers = [];

const welcome = document.getElementById("welcomeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const question = document.getElementById("question");
const options = document.getElementById("options");
const progress = document.getElementById("progress");
const bar = document.getElementById("bar");

document.getElementById("startBtn").addEventListener("click",function(){

welcome.classList.add("hide");
quizScreen.classList.remove("hide");

loadQuestion();

});

function loadQuestion(){

progress.innerHTML="Question "+(currentQuestion+1)+" of "+quiz.length;

bar.style.width=((currentQuestion+1)/quiz.length)*100+"%";

question.innerHTML=quiz[currentQuestion].question;

options.innerHTML="";

for(let i=0;i<4;i++){

let div=document.createElement("div");

div.className="option";

div.innerHTML=quiz[currentQuestion].options[i];

if(answers[currentQuestion]==i){

div.classList.add("selected");

}

div.addEventListener("click",function(){

answers[currentQuestion]=i;

loadQuestion();

});

options.appendChild(div);

}

if(currentQuestion==0){

document.getElementById("prevBtn").disabled=true;

}else{

document.getElementById("prevBtn").disabled=false;

}

if(currentQuestion==quiz.length-1){

document.getElementById("nextBtn").classList.add("hide");
document.getElementById("submitBtn").classList.remove("hide");

}else{

document.getElementById("nextBtn").classList.remove("hide");
document.getElementById("submitBtn").classList.add("hide");

}

}

document.getElementById("nextBtn").addEventListener("click",function(){

if(currentQuestion<quiz.length-1){

currentQuestion++;

loadQuestion();

}

});

document.getElementById("prevBtn").addEventListener("click",function(){

if(currentQuestion>0){

currentQuestion--;

loadQuestion();

}

});

document.getElementById("submitBtn").addEventListener("click",function(){

let score=0;

for(let i=0;i<quiz.length;i++){

if(answers[i]==quiz[i].answer){

score++;

}

}

let wrong=quiz.length-score;

let percent=(score/quiz.length)*100;

quizScreen.classList.add("hide");

resultScreen.classList.remove("hide");

document.getElementById("score").innerHTML="Score : "+score+"/"+quiz.length;

document.getElementById("correct").innerHTML="Correct Answers : "+score;

document.getElementById("wrong").innerHTML="Wrong Answers : "+wrong;

document.getElementById("percentage").innerHTML="Percentage : "+percent+"%";

let msg="";

if(percent>=90){

msg="Excellent!";

}
else if(percent>=70){

msg="Great Job!";

}
else if(percent>=50){

msg="Good Effort!";

}
else{

msg="Keep Practicing!";

}

document.getElementById("message").innerHTML=msg;

let high=localStorage.getItem("highScore");

if(high==null || score>high){

localStorage.setItem("highScore",score);

high=score;

}

document.getElementById("highestScore").innerHTML="Highest Score : "+high;

});

document.getElementById("restartBtn").addEventListener("click",function(){

answers=[];

currentQuestion=0;

resultScreen.classList.add("hide");

welcome.classList.remove("hide");

});