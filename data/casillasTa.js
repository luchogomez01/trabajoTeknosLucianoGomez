function casillaClickeadaTa(eventoCasillaClickeada) {
    const casillaClickeada = eventoCasillaClickeada.target
    if (casillaClickeada.classList.contains('casilla')) {
      const casillaClickeadaIndex = Array.from(casillaClickeada.parentNode.children).indexOf(casillaClickeada)
      if (posicionesCasillas[casillaClickeadaIndex] !== '' || !juegoActivo) {
        return false
      }
  
      casillaJugadaTa(casillaClickeada, casillaClickeadaIndex)
      validacionTa()
    }
  }
  
  function casillaJugadaTa(casillaClickeada, casillaClickeadaIndex) {
    posicionesCasillas[casillaClickeadaIndex] = jugador
    casillaClickeada.innerHTML = jugador
  }