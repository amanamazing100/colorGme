function makeCanvas(){
	var c1 = document.getElementById("canvas1");
var ctx = c1.getContext("2d");
var grd=ctx.createLinearGradient(50,20,250,100);
grd.addColorStop(0,"Violet");
grd.addColorStop(0.20,"Blue");
grd.addColorStop(0.40,"Green");
grd.addColorStop(0.65,"Yellow");
grd.addColorStop(0.80,"Pink");
grd.addColorStop(1,"Red");
ctx.font = "90px Arial ";
ctx.lineWidth=3;
ctx.shadowBlur=10;
ctx.shadowColor="Blue";
ctx.fillStyle="Green";
ctx.strokeStyle=grd;
ctx.strokeText("dkjkm", 50,100);
 
var c2 = document.getElementById('canvas2');
var ctx2 = c2.getContext('2d');

var grd2=ctx2.createRadialGradient(100,45,10,100,45,50);
grd2.addColorStop(0,"Violet");
grd2.addColorStop(0.20,"Blue");
grd2.addColorStop(0.40,"Green");
grd2.addColorStop(0.65,"Yellow");
grd2.addColorStop(0.80,"Pink");
grd2.addColorStop(1,"Red");
ctx2.strokeStyle = "#11A1C6";
ctx2.fillStyle = grd2;
ctx2.shadowBlur=20;
ctx2.shadowColor="Black";
ctx2.shadowOffsetY=30;
//ctx2.lineWidth = 10;
ctx2.fillRect(50,10,100,75);
ctx2.strokeRect(50,10,100,75);

var c3=document.getElementById('canvas3');
var ctx3 = c3.getContext('2d');
ctx3.fllStyle = "Black";
ctx3.strokeStyle = "Black";
//ctx3.lineWidth = 5;
ctx3.beginPath();
ctx3.moveTo(50,85);
ctx3.lineTo(95,10);
ctx3.lineTo(140,85);
ctx3.moveTo(118,48);
ctx3.lineTo(74,48);
ctx3.stroke();
ctx3.closePath();

var c4=document.getElementById('canvas4');
var ctx4=c4.getContext('2d');
ctx4.fillStyle="Red";
ctx4.strokeStyle="Orange";
//ctx4.lineWidth=5;
ctx4.beginPath();
ctx4.arc(50,50,25,0,Math.PI*2);
ctx4.arc(50,50,25,0,Math.PI*2);
ctx4.stroke();
ctx4.fill();
ctx4.closePath();

var c5=document.getElementById('canvas5');
var ctx5 = c5.getContext('2d');

}
