fetch("data/recuerdos.json")
.then(r=>r.json())
.then(data=>{

let cont=document.getElementById("recuerdos")

data.forEach(r=>{

let d=document.createElement("div")
d.className="recuerdo"

d.innerHTML="<b>"+r.titulo+"</b><p>"+r.texto+"</p>"

cont.appendChild(d)

})

})