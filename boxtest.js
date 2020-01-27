window.onload = function() {
const params = new URLSearchParams(window.location.href);
var x2 = 0;
var y2 = 0;
const x1 = params.get("width");
const y1 = params.get("height");
const f = params.get("floor");
var cube = params.get("offices");
var img;
if (f === "first"){
img = document.getElementById("first");
}
if (f === "second"){
img = document.getElementById("second");
}
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
   ctx.drawImage(img, 0, 0);


//alert(x1);
//alert(y1);
if (cube == null){
// Create gradient
var grd = ctx.createLinearGradient(0,0,200,1000);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"blue");
   // Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(x1,y1,25,25);
}else{
switch(cube){
case "104":
x2=379;
y2=79;
break;
}
var grd = ctx.createLinearGradient(0,0,200,1000);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"blue");
ctx.fillStyle = grd;
ctx.fillRect(x2,y2,25,25);
}
};



