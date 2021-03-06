var canvas=document.querySelector('canvas');

let c=canvas.getContext('2d');
let cObs=canvas.getContext('2d');
canvas.width=window.innerWidth*0.75;
canvas.height=window.innerHeight;
var paused=false;
var score=0;
var powerUp=0;
var powerApply=false;
var mySound=new Audio();
var obstacleType=0;
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
var myBallColor=colorArray[Math.floor(Math.random()*3)];
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
		obsVelocity+=0.6;
		offSetInc+=0.008;
		diffInc=0;
	}
	//if(!paused){
		if(obstacleType%2==0)
		{
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
		}
		else
		{
			for(let i=0;i<3;i++)
		{
			var startAngle=((Math.PI*2)/3)*i+offSet;
			var endAngle=((Math.PI*2)/3)*(i+1)+offSet;
			c.beginPath();
			//c.arc(canvas.width/2, obsY, outerRadius, startAngle, endAngle);
			//c.fillStyle=colorArray[i];
			//c.lineTo(canvas.width/2, obsY);
			//c.fill();
			c.moveTo(canvas.width/2+outerRadius*1.2*Math.cos(startAngle), obsY+outerRadius*1.2*Math.sin(startAngle));
			c.lineTo(canvas.width/2+outerRadius*1.2*Math.cos(endAngle),obsY+outerRadius*1.2*Math.sin(endAngle));
			//c.moveTo(
			c.strokeStyle=colorArray[i];
			c.lineWidth=5;
			c.stroke();
			if(startAngle%(Math.PI*2)>=11*Math.PI/6 || startAngle%(Math.PI*2)<=Math.PI/2){
					bottomColor=colorArray[i];
					console.log(bottomColor);
				}
				else if(startAngle%(Math.PI*2)>Math.PI && startAngle%(Math.PI*2)<4*Math.PI/3){
					topColor=colorArray[i];
					console.log('top'+topColor);
				}
		
		}	
		}
			
			
			
	//console.log(bottomColor);
	//console.log(topColor);
	if(obstacleType%2==0)
	{
	c.beginPath();
	c.arc(canvas.width/2, obsY, innerRadius, 0, Math.PI*2);
	c.fillStyle="#000";
	c.fill();
	}
	if(powerUp%10!=1)c.restore();
	if(!(powerUp%10>=1 && powerUp%10<3))
			document.getElementById('powerupInfo').textContent=('');
	if(powerUp%10==1)
	{
		/*c.beginPath();
		c.arc(canvas.width/2, obsY, 15, 0, Math.PI*2);
		c.fillStyle="#ffaf32";
		c.fill();
		c.restore();*/
		for(let i=0;i<4;i++)
	{
		var startAngle=((Math.PI*2)/4)*i+offSet;
		var endAngle=((Math.PI*2)/4)*(i+1)+offSet;
		c.beginPath();
		c.arc(canvas.width/2, obsY, 15, startAngle, endAngle);
		c.fillStyle=colorArray[i];
		c.lineTo(canvas.width/2, obsY);
		c.fill();
		
		
	}
		c.restore();
		
		if(y-15<obsY+15 && y+15>obsY+15)
		{
			powerApply=true;
			document.getElementById('powerupInfo').textContent=('powerup on!');
			//document.getElementById('powerupInfo').textContent+=(3-powerUp%10); 
		}
			
	
	}
	if(obsY-(outerRadius*3.5)>canvas.height)
	{
		obsY=-outerRadius*2;
		powerUp++;
		obstacleType++;
	}
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
	if(powerUp%10==3)
	{
		powerApply=false;
		
	document.getElementById('powerupInfo').textContent='powerup over';
	}
	if(obstacleType%2==0)
	{
	if(y-15<obsY+outerRadius && y+15>obsY+innerRadius)
	{
		if(bottomColor!=myBallColor && powerApply==false)
		{
			alert(score);
			update(score);
			end();
			location.reload();
		}
			
	}
	
	if(y-15<obsY-innerRadius && y+15>obsY-outerRadius)
	{
		if(topColor!=myBallColor && powerApply==false) 
		{
			alert(score);
			update(score);
			end();
		}
	}
	}
	else
	{
		
	if(y-15<obsY+(90)/Math.cos(Math.abs(offSet%((Math.PI*1)/3)-Math.PI/6))&& y+15>=90+obsY)
	{
		if(bottomColor!=myBallColor && powerApply==false)
		{
			
			alert(score);
			update(score);
			end();
			location.reload();
		}
			
	}
	
	if(y-15<obsY-90 && y+15>obsY-90/Math.cos(Math.abs(offSet-Math.PI/6)%((Math.PI*1)/3)))
	{
		if(topColor!=myBallColor && powerApply==false) 
		{
			alert(score);
			update(score);
			end();
		}
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

