const texto=`Este pequeño lugar en internet
guarda recuerdos, momentos
y cosas que tal vez
no siempre digo en voz alta.

Cada estrella,
cada código,
cada capítulo,

es una forma de decir
que tu presencia
importa.

— José`;

let i=0;

document.getElementById("btnAbrir").onclick=()=>{

document.getElementById("musica").play();

escribir();

}

function escribir(){

if(i<texto.length){

document.getElementById("carta").innerHTML+=texto.charAt(i);

i++;

setTimeout(escribir,40);

}

}

document.getElementById("btnCodigo").onclick=()=>{

let codigo=document.getElementById("codigo").value.toLowerCase();

if(secretos[codigo]){

document.getElementById("mensajeSecreto").innerHTML=secretos[codigo];

}else{

document.getElementById("mensajeSecreto").innerHTML="Ese código aún no revela nada.";

}

}

let inicio=new Date("2024-01-01");

setInterval(()=>{

let ahora=new Date();
let dias=Math.floor((ahora-inicio)/(1000*60*60*24));

document.getElementById("contador").innerHTML=
"Han pasado "+dias+" días desde que comenzó esta historia.";

},1000);