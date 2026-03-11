fetch("data/recuerdos.json")
.then(r=>r.json())
.then(data=>{

let cont=document.getElementById("recuerdos")

data.forEach((r,i)=>{

let item=document.createElement("div")
item.className="acordeon-item"

item.innerHTML=`

<div class="acordeon-titulo" onclick="toggleRecuerdo(${i})">
${r.titulo}
</div>

<div class="acordeon-contenido" id="recuerdo${i}">
${r.texto}
</div>

`

cont.appendChild(item)

})

})

function toggleRecuerdo(i){

let el=document.getElementById("recuerdo"+i)

if(el.style.maxHeight && el.style.maxHeight!=="0px"){

el.style.maxHeight="0px"

}else{

el.style.maxHeight=el.scrollHeight+"px"

}

}

function toggleLibro(){

let el=document.getElementById("libroRecuerdos")

if(el.style.maxHeight){

el.style.maxHeight=null

}else{

el.style.maxHeight=el.scrollHeight+"px"

}

}