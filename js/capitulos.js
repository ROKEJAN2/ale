fetch("data/capitulos.json")
.then(r=>r.json())
.then(data=>{

let cont=document.getElementById("capitulos")

data.forEach(c=>{

let d=document.createElement("div")
d.className="capitulo"

d.innerHTML="<h3>"+c.titulo+"</h3><p>"+c.texto+"</p>"

cont.appendChild(d)

})

})