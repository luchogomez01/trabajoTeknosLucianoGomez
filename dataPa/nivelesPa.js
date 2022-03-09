const palabraUno = ["AGUA","CAMA", "TAZA"];
const palabraDos = ["CACAO","ABEJA", "JABON"];
const palabraTres = ["TERRAZA","PALABRA", "PERSONA"];

let palabraActualUno = "";
let palabraActualDos = "";
let palabraActualTres = "";

function nivelUno(){
    let indiceUno = Math.floor(Math.random() * palabraUno.length);
    palabraActualUno = palabraUno[indiceUno];
    
    console.log(palabraActualUno);
    DesordenarPalabraUno (palabraActualUno)
}
function nivelDos(){
    let indiceDos = Math.floor(Math.random() * palabraDos.length);
    palabraActualDos = palabraDos[indiceDos];
    
    console.log(palabraActualDos);
    DesordenarPalabraDos (palabraActualDos)
}
function nivelTres(){
    let indiceTres = Math.floor(Math.random() * palabraTres.length);
    palabraActualTres = palabraTres[indiceTres];
    
    console.log(palabraActualTres);
    DesordenarPalabraTres (palabraActualTres)
}