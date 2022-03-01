function resetTa() {
    juegoActivo = true
    jugador = "X"
    resetJuego()
    notificacionTa(turnoJugador())
    document.querySelectorAll('.casilla').forEach(cell => cell.innerHTML = "")
  }
function resetJuego() {
    let i = posicionesCasillas.length
    while (i--) {
      posicionesCasillas[i] = ''
    }
  }