const texto=` Hola mi niña, se que ahora mismo no se como tomaras este detalle, de mi hacia ti,
se que evitas que te declare mi amor, y mis emociones, te entiendo pero no me sale guardarmelas sin,
que tu las sepas, asi que cree este pequeño lugar en internet, donde yo pueda guarda recuerdos en forma,
de mis palabras, asi como momentos, fotos y y cosas que tal vez no siempre digo en voz alta.
Y que aun no vez pero un dia amaras.

Cada estrella,
cada palabras,
cada secreto,

es una forma de decir
que tu presencia, me hace sonreir en mis dias mas grises.

Con esto inicio pero ire agregando mas cosas, con el pasar del tiempo, sera un fragmento de mi, que quedara contigo, de alguna manera 
una version mia arraigada a tu esencia.

— Roberto`;

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

let inicio=new Date("2025-10-11");

setInterval(()=>{

let ahora=new Date();
let dias=Math.floor((ahora-inicio)/(1000*60*60*24));

document.getElementById("contador").innerHTML=
"Han pasado "+dias+" días desde que nos conocemos como quisimos.";

},1000);