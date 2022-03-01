function fPalabraUno (){
    botonVerificarUno.onclick = () => {
        if (palabraUno == document.getElementById("inputUno").value){
       
          notificacionPaUno.innerHTML= "CORRECTO";
            
          }
          else {
            notificacionPaUno.innerHTML = "INCORRECTO, INTENTE NUEVAMENTE";
            ganoUno = "2"; 
            return
            
          }
      }
    }
    
    function fPalabraDos (){
    botonVerificarDos.onclick = () => {
      if (palabraDos == document.getElementById("inputDos").value){
        ganoDos = true;   
        notificacionPaDos.innerHTML= "CORRECTO";
           
    
          }
          else {
            notificacionPaDos.innerHTML = "INCORRECTO, INTENTE NUEVAMENTE";
          }
      }
    }
    
    function fPalabraTres (){
    botonVerificarTres.onclick = () => {
        if (palabraTres == document.getElementById("inputTres").value){
          ganoTres = true;  
          notificacionPaTres.innerHTML= "CORRECTO";
            
          }
          else {
            notificacionPaTres.innerHTML = "INCORRECTO, INTENTE NUEVAMENTE";
          }
      }
    }