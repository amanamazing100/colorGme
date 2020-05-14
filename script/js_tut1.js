var canvas=document.querySelector('canvas');
let c=canvas.getContext('2d');
let cObs=canvas.getContext('2d');
canvas.width=window.innerWidth*0.75;
canvas.height=window.innerHeight;
var paused=false;
var score=0;
var mySound=new Audio();
mySound.src="bounce.wav";
function togglePause(){
	if(paused)
	{
		paused=false;
		console.log(paused);
		
	
	}
	else
	{
		paused=true;
		console.log(paused);
	}
}

window.addEventListener('keydown', function(e){
	let key=e.keyCode;
	if(key==32)
		togglePause();
});
		
let colorArray=["red", "green", "pink", "yellow"];
//circle
var y=canvas.height*0.85;
var acc=0.3;
var velocity=0;
var myBallColor=colorArray[Math.floor(Math.random()*4)];
window.addEventListener('keydown', function(e){
	let key=e.keyCode;
	if(key==13)
		start();
});

function displayLeaderboards(){
	
	document.getElementById('leaderboardsDisplay').textContent='Leaderboards';
	let leaderText="highscore";
	let ab=localStorage.getItem(leaderText);
	let useArray=JSON.parse(ab);
	let list1=document.createElement("ul");
	list1.style.listStyleType="none";
	console.log(useArray);
	if(1){
	var li1=document.createElement("li");
	li1.appendChild(document.createTextNode(useArray));
	list1.appendChild(li1);}
	document.getElementById('leaderboardsDisplay').appendChild(list1);
	};


function start(){
	
		ballMove(myBallColor);
		let leaderText="highscore";
if(localStorage[leaderText])
		displayLeaderboards();
}

function end(){
	displayLeaderboards();
	y=canvas.height*0.85;
	obsY=-outerRadius*2;
	obsVelocity=2;
	offSet=0;
	offSetInc=0.02;
	diffInc=0;
	velocity=0;
	
	
}
//let circle=new ballMove(myBallColor);
function ballMove(myBallColor){
	
	//requestAnimationFrame(colorChangers);
	
	requestAnimationFrame(circleObstacles);
	
	requestAnimationFrame(ballMove);
	
	
this.color=myBallColor;
c.beginPath();
c.arc(canvas.width/2, y, 15, 0, Math.PI*2);
c.fillStyle=this.color;
c.strokeStyle="#fff";
c.save();

//console.log(myBallColor);
c.fill();
c.stroke();
var newColor;
/*this.colorChange=function(newColor)
{
	this.color=newColor;
	myBallChange=newColor;
};*/

if(velocity!=0){
if(!paused){
y+=velocity;
velocity+=acc;
if(y>=canvas.height*0.85)
	velocity=0;
}
}
}
		
window.addEventListener('click', function(){
	mySound.play();
	velocity=-4.2;
	
});



//large obstacles
	var outerRadius=150;
	var innerRadius=125;
var obsY=-outerRadius*2;
var obsVelocity=2;
var offSet=0;
var offSetInc=0.02;
var diffInc=0;
function circleObstacles(){
	c.clearRect(0,0, innerWidth, innerHeight);
	//c.clearRect(canvas.width/2-outerRadius, obsY-outerRadius, outerRadius*2, outerRadius*2);
	let bottomColor;
	let topColor;
	if(diffInc>500)
	{
		obsVelocity++;
		offSetInc+=0.01;
		diffInc=0;
	}
	//if(!paused){
	for(let i=0;i<4;i++)
	{
		var startAngle=((Math.PI*2)/4)*i+offSet;
		var endAngle=((Math.PI*2)/4)*(i+1)+offSet;
		c.beginPath();
		c.arc(canvas.width/2, obsY, outerRadius, startAngle, endAngle);
		c.fillStyle=colorArray[i];
		c.lineTo(canvas.width/2, obsY);
		c.fill();
		if(startAngle%(Math.PI*2)>=0 && startAngle%(Math.PI*2)<=Math.PI/2){
			bottomColor=colorArray[i];
		}
		else if(startAngle%(Math.PI*2)>Math.PI && startAngle%(Math.PI*2)<1.5*Math.PI){
			topColor=colorArray[i];
		}
	}
	//console.log(bottomColor);
	//console.log(topColor);
	c.beginPath();
	c.arc(canvas.width/2, obsY, innerRadius, 0, Math.PI*2);
	c.fillStyle="#000";
	c.fill();
	c.restore();
	if(obsY-(outerRadius*4.5)>canvas.height)
		obsY=-outerRadius*2;
	if(!paused){
	obsY+=obsVelocity;
	offSet+=offSetInc;
	score++;
	document.getElementById('liveScore').textContent=score;
	console.log(score);
	diffInc++;
	//console.log('diffInc'+diffInc);
	}
	//if(offSet==2)
		//offSet=0;
	if(y-15<obsY+outerRadius && y+15>obsY+innerRadius)
	{
		if(bottomColor!=myBallColor)
		{
			alert(score);
			update(score);
			end();
			location.reload();
		}
			
	}
	
	if(y-15<obsY-innerRadius && y+15>obsY-outerRadius)
	{
		if(topColor!=myBallColor)
		{
			alert(score);
			update(score);
			end();
		}
	}
	
}
	
	
//color changing

	var smallRadius=15;
var obsSmallY=-smallRadius*10-obsY;
var obsSmallVelocity=2;
var offSmallSet=0;
/*
function colorChangers(){
	
	
	//c.clearRect(canvas.width/2-outerRadius, obsY-outerRadius, outerRadius*2, outerRadius*2);
	let bottomColorSmall;
	//if(!paused){
	for(let i=0;i<4;i++)
	{
		var startAngle=((Math.PI*2)/4)*i+offSmallSet;
		var endAngle=((Math.PI*2)/4)*(i+1)+offSmallSet;
		c.beginPath();
		c.arc(canvas.width/2, obsSmallY, smallRadius, startAngle, endAngle);
		c.fillStyle=colorArray[i];
		c.lineTo(canvas.width/2, obsSmallY);
		c.fill();
		if(startAngle%(Math.PI*2)>=0 && startAngle%(Math.PI*2)<=Math.PI/2){
			bottomColorSmall=colorArray[i];
		}
	}
	//console.log(bottomColorSmall);
	
	if(y-15<obsSmallY+smallRadius && y-15>obsSmallY-smallRadius)
	{
		
		c.fillStyle=bottomColorSmall;
		c.restore();
		c.save();
	}
	//}
	c.save();
	c.restore();
	if(obsSmallY-(smallRadius*8)>canvas.height)
		obsSmallY=-smallRadius*2;
	if(!paused){
	obsSmallY+=obsSmallVelocity;
	offSmallSet+=0.02;
	}
	//if(offSet==2)
		//offSet=0;
	
	
}	

*/
function update(score)
{
	
	var highscore=localStorage.getItem("highscore");
			if(highscore!=null)
			{
				if(score>highscore)
				{
					localStorage.setItem("highscore", score);
					alert('new highscore');
					location.reload();
				}
				location.reload();
			}
			else
				{
					localStorage.setItem("highscore", score);
					alert('new highscore');
				};
			
			
	
	
}
