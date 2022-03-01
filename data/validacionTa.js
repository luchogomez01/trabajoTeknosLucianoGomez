function validacionTa() {
    let rondaGanada = false
    for (let i = 0; i < posibilidadGanar.length; i++) {
      const winCondition = posibilidadGanar[i];
      let posicionUno = posicionesCasillas[winCondition[0]];
      let posicionDos= posicionesCasillas[winCondition[1]];
      let posicionTres = posicionesCasillas[winCondition[2]];
  
      if (posicionUno === '' || posicionDos=== '' || posicionTres === '') {
        continue;
      }
      if (posicionUno === posicionDos && posicionDos === posicionTres) {
        rondaGanada = true
        break
      }
    }
  
    if (rondaGanada) {
      notificacionTa(mensajeVictoria())
      juegoActivo = false
      return
    }
  
    let rondaEmpate = !posicionesCasillas.includes("")
  
    if (rondaEmpate) {
      notificacionTa(mensajeDerrota())
      juegoActivo = false
      return
    }
  
    cambioJugadorTa()
  }
  
  function cambioJugadorTa() {
    jugador = jugador === "X" ? "O" : "X"
    notificacionTa(turnoJugador())
  }