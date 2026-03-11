const cartas=[

"Hoy pensé en ti un momento… y ese momento se quedó conmigo todo el día.",

"A veces el día se siente más bonito solo porque sé que existes.",

"No sé qué haces con tu forma de ser, pero siempre terminas colándote en mis pensamientos.",

"Hay miradas que uno no olvida… y la tuya es una de esas, preciosa.",

"Algunas historias empiezan pequeñas… como cuando empezamos a hablar tú y yo.",

"Hoy recordé tu risa y de repente el día se volvió un poco más ligero.",

"No sé si te lo han dicho, pero tu forma de ser tiene algo que calma.",

"Hay días en los que solo quisiera saber si estás bien, linda.",

"A veces me pregunto si sabes lo especial que eres sin darte cuenta.",

"Hay personas que uno aprecia sin hacer ruido… tú eres una de ellas.",

"Hoy pensé en esos ojitos de topacio y en cómo cambian todo cuando brillan.",

"No sé cómo lo haces, pero incluso cuando estás seria sigues siendo preciosa.",

"Si hoy estás cansada, recuerda que hay alguien por aquí que siempre te desea paz.",

"Me gusta pensar que incluso en los días raros… tú sigues siendo tú.",

"A veces imagino que te ríes mientras lees esto, negris.",

"Hay algo en tu forma de existir que hace que todo parezca un poco más bonito.",

"Hoy solo paso a recordarte que vales mucho más de lo que a veces crees.",

"Niña enojada… incluso cuando haces esa carita, sigues siendo adorable.",

"A veces me quedo pensando en lo curioso que es que dos personas se encuentren así.",

"Si hoy tu corazón anda cansado, ojalá estas palabras te acompañen un ratito.",

"Tu forma de mirar el mundo tiene algo que me gusta mucho.",

"Hay días en los que solo quiero saber si estás sonriendo.",

"Ojitos tristes… ojalá hoy encuentren una razón para brillar un poco.",

"Me gusta cuando eres tú misma, sin filtros, sin esfuerzos.",

"A veces pienso que el mundo necesita más personas como tú.",

"Hoy me acordé de ti sin razón… o tal vez la razón eres tú.",

"Si alguna vez dudas de ti, recuerda que alguien te ve con mucha admiración.",

"Durmiente… espero que hoy hayas descansado bien.",

"Hay silencios que se sienten tranquilos… como cuando pienso en ti.",

"Me gusta imaginar que estás teniendo un buen día.",

"Hay algo bonito en la forma en que apareces en mis pensamientos.",

"Preciosa, ojalá hoy te pase algo bonito aunque sea pequeño.",

"Hay personas que dejan huellas suaves en el corazón… tú eres una.",

"A veces quisiera que vieras lo bonita que es tu esencia.",

"No sé si lo notas, pero tienes una manera muy especial de ser.",

"Si hoy estás seria, no pasa nada… incluso así tienes algo que ilumina.",

"Linda, recuerda que incluso los días difíciles pasan.",

"Hay momentos en que tu recuerdo aparece y me saca una sonrisa.",

"Tu forma de ser tiene una calma que me gusta mucho.",

"Ojitos de topacio… espero que hoy estén mirando algo bonito.",

"A veces imagino que estás riéndote mientras lees esto.",

"No tienes que hacer nada especial para ser especial.",

"Hay algo en ti que se siente auténtico, y eso vale mucho.",

"Negris, ojalá hoy encuentres un momento de paz.",

"Si hoy el mundo pesa un poco, respira… todo mejora paso a paso.",

"A veces lo más bonito de un día es recordar a alguien.",

"Niña enojada… no te enojes mucho con el mundo.",

"Me gusta saber que existes en este mismo mundo que yo.",

"Hay pensamientos que llegan solos… como tú a mi mente.",

"Tu presencia, incluso en silencio, tiene algo bonito.",

"Si hoy te sientes pequeña frente al mundo, recuerda que vales mucho.",

"Linda, ojalá hoy encuentres una razón para sonreír.",

"Hay miradas que cuentan historias… la tuya es una de ellas.",

"A veces la vida pone personas interesantes en nuestro camino.",

"Durmiente… espero que hoy tus sueños hayan sido tranquilos.",

"Tu forma de ser tiene una dulzura que no todos notan.",

"Ojitos tristes… ojalá hoy encuentren un poquito de calma.",

"Preciosa, nunca olvides lo especial que eres.",

"Hay personas que simplemente hacen que el mundo se sienta menos pesado.",

"Hoy solo quería dejarte este pensamiento suave para acompañarte.",

"Aunque el día sea largo, recuerda que siempre vuelve la calma."

]
let hoy=new Date().getDate()

document.getElementById("cartaDia").innerHTML=cartas[hoy%cartas.length]