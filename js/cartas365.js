const cartas=[

"Hoy pensé en ti un momento.",
"A veces las personas llegan sin avisar y cambian el día.",
"Hay miradas que uno no olvida.",
"Algunas historias empiezan pequeñas."

]

let hoy=new Date().getDate()

document.getElementById("cartaDia").innerHTML=cartas[hoy%cartas.length]