function main() {
  notificacionTa(turnoJugador())
  eventosOnclick()
}

function eventosOnclick() {
  document.querySelector('.contenedorJuego').addEventListener('click', casillaClickeadaTa)
  document.querySelector('.game-restart').addEventListener('click', resetTa)
}

function notificacionTa(message) {
notificacion.innerHTML = message
}

main()

