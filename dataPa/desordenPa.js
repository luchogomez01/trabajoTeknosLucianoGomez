const palabraDesordenadaUno = document.querySelector('.palabraUno');
const palabraDesordenadaDos = document.querySelector('.palabraDos');
const palabraDesordenadaTres = document.querySelector('.palabraTres');
function DesordenarPalabraUno (palabra) {
    let caracteresArray = palabra.split("");
    caracteresArray.sort ();
    
    console.log(caracteresArray);
    
    palabraDesordenadaUno.innerHTML = caracteresArray.sort ();
    }
    
    function DesordenarPalabraDos (palabra) {
        let caracteresArray = palabra.split("");
        caracteresArray.sort ();
        
        console.log(caracteresArray);
        
        palabraDesordenadaDos.innerHTML = caracteresArray.sort ();
    }
    
    function DesordenarPalabraTres (palabra) {
        let caracteresArray = palabra.split("");
        caracteresArray.sort ();
        
        console.log(caracteresArray);
        
        palabraDesordenadaTres.innerHTML = caracteresArray.sort ();
    }