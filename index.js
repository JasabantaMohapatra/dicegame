var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage1="Alea_"+randomNumber1+".png";
var randomSrc1="image/"+randomImage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomSrc1);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="Alea_"+randomNumber2+".png";
var randomSrc2="image/"+randomImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomSrc2);
if(randomImage1>randomImage2){
    document.querySelector("h1").innerHTML="PLAYER 1 WIN 🚩";
}else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="‼️ DRAW ‼️";
    document.querySelector("button").innerHTML="PLAY AGAIN";
}else{
    document.querySelector("h1").innerHTML="PLAYER 2 WIN 🚩";
}
function refresh(){
    location.reload();
}