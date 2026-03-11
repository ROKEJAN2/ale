const canvas=document.getElementById("estrellas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let estrellas=[];
let fugaces=[];

for(let i=0;i<200;i++){

estrellas.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2
})

}

function crearFugaz(){

fugaces.push({
x:Math.random()*canvas.width,
y:0,
vel:5
})

}

setInterval(crearFugaz,800);

function animar(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

estrellas.forEach(e=>{
ctx.beginPath();
ctx.arc(e.x,e.y,e.r,0,Math.PI*2);
ctx.fill();
})

fugaces.forEach(f=>{

ctx.beginPath();
ctx.moveTo(f.x,f.y);
ctx.lineTo(f.x+20,f.y+20);
ctx.strokeStyle="white";
ctx.stroke();

f.x+=f.vel;
f.y+=f.vel;

})

requestAnimationFrame(animar)

}

animar();