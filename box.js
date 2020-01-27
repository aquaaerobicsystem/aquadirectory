window.onload = function() {
const params = new URLSearchParams(window.location.href);
const x1 = params.get("width");
const y1 = params.get("height");
const f = params.get("floor");
//const office = params.get("office");
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

// Create gradient
var grd = ctx.createLinearGradient(0,0,200,1000);
grd.addColorStop(0,"blue");
grd.addColorStop(1,"blue");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(x1,y1,25,25);
};



