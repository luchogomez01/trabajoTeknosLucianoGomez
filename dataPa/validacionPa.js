let inputUno = document.getElementById("inputUno");
let inputDos = document.getElementById("inputDos");
let inputTres = document.getElementById("inputTres");

const botonUno = document.querySelector('.botonPalabraUno');
const botonDos = document.querySelector('.botonPalabraDos');
const botonTres = document.querySelector('.botonPalabraTres');

const mensajeUno = document.querySelector('.mensajePalabraUno');
const mensajeDos = document.querySelector('.mensajePalabraDos');
const mensajeTres = document.querySelector('.mensajePalabraTres');

let vidasUno = 2;
let vidasDos = 2;
let vidasTres = 2;

botonUno.onclick = () => {
        if(palabraActualUno == inputUno.value){
            mensajeUno.innerHTML = "CORRECTO"
        }
        else{
            vidasUno -=1;
            mensajeUno.innerHTML = "INCORRECTO.VIDAS RESTANTES: "+vidasUno;
            
        }
    if (vidasUno == 0){
        alert("SE QUEDO SIN VIDAS, Intente nuevamente");
        document.location.reload();
        }
    console.log(vidasUno);
}

botonDos.onclick = () => {
    if(palabraActualDos == inputDos.value){
        mensajeDos.innerHTML = "CORRECTO";
    }
    else{
        vidasDos -=1;
        mensajeDos.innerHTML = "INCORRECTO.VIDAS RESTANTES: "+vidasDos;
        
    }
    if (vidasDos == 0){
        alert("SE QUEDO SIN VIDAS, Intente nuevamente");
        document.location.reload();
        }
    console.log(vidasDos);
}

botonTres.onclick = () => {
    if(palabraActualTres == inputTres.value){
        mensajeTres.innerHTML = "CORRECTO"
    }
    else{
        vidasTres -=1;
        mensajeTres.innerHTML = "INCORRECTO.VIDAS RESTANTES: "+vidasTres;
        
    }
    if (vidasTres == 0){
        alert("SE QUEDO SIN VIDAS, Intente nuevamente");
        document.location.reload();
        }
    console.log(vidasTres);
}

const botonReset = document.querySelector('.botonReset');
botonReset.onclick = () => {
document.location.reload();
}