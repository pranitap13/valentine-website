
function proceed(){
    var yes= 'second_page.html';
    window.location.href = yes;
 }

 function calculate(){
    var result= 'calculator.html';
    window.location.href = result;
 }

 function clickable(){
   var next= 'demo.html';
   window.location.href = next;
}

function second_msg(){
   var second = 'msg_2.html';
   window.location.href = second;
}

function third_msg(){
   var third = 'msg_3.html';
   window.location.href = third;
}

 function slides() {
   var display = 'slide.html';
   window.location.href = display;
}

var question = document.querySelector(".question");
var yesBtn = document.querySelector("#yes");
var noBtn = document.querySelector("#reset");

yesBtn.addEventListener("click", ()=>{
   question.innerHTML="Thank you so much ❤!";

});

noBtn.addEventListener("click", ()=>{
   question.innerHTML="Only yes is allowed! Click Yesss!!😏";
});

function calculateLove() {
var yourName = document.getElementById('yourName').value.trim();
var partnerName = document.getElementById('partnerName').value.trim();


if(yourName === '' || partnerName === ''){
   alert('Please enter both names ');
   return;
}

var lovePercentage = Math.floor(Math.random() * 101);

var resultText = yourName + ' and ' + partnerName + ' have a '+ lovePercentage + '% love compatibility! ❤️';

document.getElementById('result').innerHTML = resultText;
}