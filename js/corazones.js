function crearCorazon(){

let c=document.createElement("div")

c.className="corazon"
c.innerHTML=""

c.style.left=Math.random()*100+"vw"
c.style.fontSize=(Math.random()*20+10)+"px"

document.body.appendChild(c)

setTimeout(()=>{c.remove()},8000)

}

setInterval(crearCorazon,700)