const notificacion = document.querySelector('.notificacionJuego');
const posicionesCasillas = ["", "", "", "", "", "", "", "", ""];
const posibilidadGanar = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

let juegoActivo = true;
let jugador = "X"
const turnoJugador = () => `juega: ${jugador}`;
const mensajeDerrota = () => `Empate`;
const mensajeVictoria = () => `Jugador ${jugador} gana`;