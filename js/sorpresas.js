const sorpresas=[

{
fecha:"2026-12-25",
mensaje:"🎄 Feliz Navidad. Este mensaje esperaba este día."
},

{
fecha:"2027-01-01",
mensaje:"✨ Feliz año nuevo."
}

]

let hoy=new Date().toISOString().slice(0,10)

sorpresas.forEach(s=>{

if(s.fecha===hoy){

alert(s.mensaje)

}

})