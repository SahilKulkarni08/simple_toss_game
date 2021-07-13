alert("1 choice fot head and 2 for tail.");
var one=prompt("enter team 1 choice");
var random= Math.floor(Math.random()*2)+1;
var random1= "coin" + random +".png";
var image=document.querySelectorAll("img")[0]
image.setAttribute("src",random1);
if(one==random){
    document.querySelector("h1").innerHTML="team 1st won the toss";
}
else{
    document.querySelector("h1").innerHTML="team 2nd won the toss";
}