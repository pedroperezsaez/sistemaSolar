let imagenesNave = {
  up: new Image(),
  upLeft: new Image(),
  upRight: new Image(),
  down: new Image(),
  downLeft: new Image(),
  downRight: new Image(),
  left: new Image(),
  right: new Image(),
};

imagenesNave.up.src = '/naveup.webp';
imagenesNave.upLeft.src = '/naveupleft-01.webp';
imagenesNave.upRight.src = '/naveupright-01.webp';
imagenesNave.down.src = '/navedown.webp';
imagenesNave.downLeft.src = '/navedownleft-01.webp';
imagenesNave.downRight.src = '/navedownright-01.webp';
imagenesNave.left.src = '/naveleft.webp';
imagenesNave.right.src = '/naveright.webp';
let imagenNaveActual = imagenesNave.up;
imagenesNave.up.onload = function () {
  animar();
};

import './style.css';
const canvas = document.getElementById('sistemaSolar');
const ctx = canvas.getContext('2d');
const desplegableMercurio = document.getElementById('desplegable-mercurio');
const desplegableTierra = document.getElementById('desplegable-tierra');
const desplegableVenus = document.getElementById('desplegable-venus');
const desplegableMarte = document.getElementById('desplegable-marte');
const desplegableJupiter = document.getElementById('desplegable-jupiter');
const desplegableSaturno = document.getElementById('desplegable-saturno');
const desplegableUrano = document.getElementById('desplegable-urano');
const desplegableNeptuno = document.getElementById('desplegable-neptuno');
canvas.width = 1920;
canvas.height = 1080;
const play = document.getElementById('play');
const pause = document.getElementById('pause');
let playAnimacion = true;

const centrox = canvas.width / 2;
const centroy = canvas.height / 2;
function getKeys() {
  let keys = {};
  window.onkeydown = function (e) {
    keys[e.key] = true;
  };
  window.onkeyup = function (e) {
    keys[e.key] = false;
  };
  return keys;
}
const teclas = getKeys();

let camera = {
  x: 0,
  y: 0,
  width: canvas.width / 2,
  height: canvas.height / 2,
};
function updateCamera() {
  let margenX = 30;
  let margenY = 60;
  if (nave.x - camera.x > camera.width) {
    camera.x = nave.x - camera.width;
  }
  if (nave.x - camera.x < camera.width) {
    camera.x = nave.x - camera.width;
  }
  if (nave.y - camera.y > camera.height) {
    camera.y = nave.y - camera.height;
  }
  if (nave.y - camera.y < camera.height) {
    camera.y = nave.y - camera.height;
  }
}
play.addEventListener('click', function () {
  playAnimacion = true;
  play.classList.add('boton-seleccionado');
  play.classList.remove('boton-no-seleccionado');
  pause.classList.add('boton-no-seleccionado');
  pause.classList.remove('boton-seleccionado');
});
pause.addEventListener('click', function () {
  playAnimacion = false;
  pause.classList.add('boton-seleccionado');
  pause.classList.remove('boton-no-seleccionado');
  play.classList.add('boton-no-seleccionado');
  play.classList.remove('boton-seleccionado');
});

let nave = {
  x: 1880 / 2,
  y: 1040 / 2,
  ancho: 50,
  alto: 50,
  velocidad: 5,
};
let mercurio = {
  angulo: 0,
  x: 0,
  y: 0,
  grandaria: 6,
  distanciaDelSol: 120,
  velocidad: 0.04,
  color: '#ff4800',
  desplegable: desplegableMercurio,
};
let venus = {
  angulo: 5,
  x: 0,
  y: 0,
  grandaria: 14,
  distanciaDelSol: 180,
  velocidad: 0.015,
  color: '#ffcb87',
  desplegable: desplegableVenus,
};
let tierra = {
  angulo: 10,
  x: 0,
  y: 0,
  grandaria: 15,
  distanciaDelSol: 260,
  velocidad: 0.01,
  color: '#5d89fa',
  desplegable: desplegableTierra,
};

let marte = {
  angulo: 8,
  x: 0,
  y: 0,
  grandaria: 8,
  distanciaDelSol: 340,
  velocidad: 0.008,
  color: 'red',
  desplegable: desplegableMarte,
};

let jupiter = {
  angulo: 30,
  x: 0,
  y: 0,
  grandaria: 45,
  distanciaDelSol: 520,
  velocidad: 0.004,
  color: '#d1ff87',
  desplegable: desplegableJupiter,
};

let saturno = {
  angulo: 100,
  x: 0,
  y: 0,
  grandaria: 38,
  distanciaDelSol: 650,
  velocidad: 0.002,
  color: '#a79c05',
  desplegable: desplegableSaturno,
};

let urano = {
  angulo: 120,
  x: 0,
  y: 0,
  grandaria: 22,
  distanciaDelSol: 800,
  velocidad: 0.001,
  color: 'blue',
  desplegable: desplegableUrano,
};
let neptuno = {
  angulo: 180,
  x: 0,
  y: 0,
  grandaria: 21,
  distanciaDelSol: 900,
  velocidad: 0.0008,
  color: '#072064',
  desplegable: desplegableNeptuno,
};
function pararMovimiento() {
  if (playAnimacion == false) {
    mercurio.velocidad = 0;
    venus.velocidad = 0;
    tierra.velocidad = 0;
    marte.velocidad = 0;
    jupiter.velocidad = 0;
    saturno.velocidad = 0;
    urano.velocidad = 0;
    neptuno.velocidad = 0;
  } else {
    mercurio.velocidad = 0.04;
    venus.velocidad = 0.015;
    tierra.velocidad = 0.01;
    marte.velocidad = 0.008;
    jupiter.velocidad = 0.004;
    saturno.velocidad = 0.002;
    urano.velocidad = 0.001;
    neptuno.velocidad = 0.0008;
  }
}
document.getElementById('hacia-arriba').oncontextmenu = bloquearMenu;
document.getElementById('hacia-abajo').oncontextmenu = bloquearMenu;
document.getElementById('hacia-izq').oncontextmenu = bloquearMenu;
document.getElementById('hacia-der').oncontextmenu = bloquearMenu;
function bloquearMenu(bloquearMenu) {
  bloquearMenu.preventDefault();
  return false;
}
function pulsarAbajo() {
  teclas['ArrowDown'] = true;
}
function soltarAbajo() {
  teclas['ArrowDown'] = false;
}
var flechaAbajo = document.getElementById('hacia-abajo');
flechaAbajo.onpointerdown = pulsarAbajo;
flechaAbajo.onpointerup = soltarAbajo;
flechaAbajo.onpointerout = soltarAbajo;

function pulsarArriba() {
  teclas['ArrowUp'] = true;
}
function soltarArriba() {
  teclas['ArrowUp'] = false;
}
var flechaArriba = document.getElementById('hacia-arriba');
flechaArriba.onpointerdown = pulsarArriba;
flechaArriba.onpointerup = soltarArriba;
flechaArriba.onpointerout = soltarArriba;

function pulsarIzquierda() {
  teclas['ArrowLeft'] = true;
}
function solarIzquierda() {
  teclas['ArrowLeft'] = false;
}

var flechaIzquierda = document.getElementById('hacia-izq');
flechaIzquierda.onpointerdown = pulsarIzquierda;
flechaIzquierda.onpointerup = solarIzquierda;
flechaIzquierda.onpointerout = solarIzquierda;

function pulsarDerecha() {
  teclas['ArrowRight'] = true;
}
function soltarDerecha() {
  teclas['ArrowRight'] = false;
}
var flechaDerecha = document.getElementById('hacia-der');
flechaDerecha.onpointerdown = pulsarDerecha;
flechaDerecha.onpointerup = soltarDerecha;
flechaDerecha.onpointerout = soltarDerecha;

function haychoque(nave, planeta) {
  const choqueHorizontal =
    nave.x < planeta.x + planeta.grandaria * 2 &&
    nave.x + nave.ancho > planeta.x;
  const choqueVertical =
    nave.y < planeta.y + planeta.grandaria * 2 &&
    nave.y + nave.alto > planeta.y;
  return choqueHorizontal && choqueVertical;
}

function movimientoPlaneta(planeta) {
  let centroX = centrox + Math.cos(planeta.angulo) * planeta.distanciaDelSol;
  let centroY = centroy + Math.sin(planeta.angulo) * planeta.distanciaDelSol;
  planeta.x = centroX - planeta.grandaria;
  planeta.y = centroY - planeta.grandaria;
}
function animar() {
  updateCamera();
  pararMovimiento();
  mercurio.angulo = mercurio.angulo + mercurio.velocidad;
  movimientoPlaneta(mercurio);
  venus.angulo = venus.angulo + venus.velocidad;
  movimientoPlaneta(venus);
  tierra.angulo = tierra.angulo + tierra.velocidad;
  movimientoPlaneta(tierra);
  marte.angulo = marte.angulo + marte.velocidad;
  movimientoPlaneta(marte);

  jupiter.angulo = jupiter.angulo + jupiter.velocidad;
  movimientoPlaneta(jupiter);

  saturno.angulo = saturno.angulo + saturno.velocidad;
  movimientoPlaneta(saturno);

  urano.angulo = urano.angulo + urano.velocidad;
  movimientoPlaneta(urano);

  neptuno.angulo = neptuno.angulo + neptuno.velocidad;
  movimientoPlaneta(neptuno);
  if (teclas['ArrowUp'] && teclas['ArrowLeft']) {
    nave.y = nave.y - nave.velocidad;
    nave.x = nave.x - nave.velocidad;
    imagenNaveActual = imagenesNave.upLeft;
  } else if (teclas['ArrowUp'] && teclas['ArrowRight']) {
    nave.y = nave.y - nave.velocidad;
    nave.x = nave.x + nave.velocidad;
    imagenNaveActual = imagenesNave.upRight;
  } else if (teclas['ArrowDown'] && teclas['ArrowLeft']) {
    nave.y = nave.y + nave.velocidad;
    nave.x = nave.x - nave.velocidad;
    imagenNaveActual = imagenesNave.downLeft;
  } else if (teclas['ArrowDown'] && teclas['ArrowRight']) {
    nave.y = nave.y + nave.velocidad;
    nave.x = nave.x + nave.velocidad;
    imagenNaveActual = imagenesNave.downRight;
  } else if (teclas['ArrowUp']) {
    nave.y = nave.y - nave.velocidad;
    imagenNaveActual = imagenesNave.up;
  } else if (teclas['ArrowLeft']) {
    nave.x = nave.x - nave.velocidad;
    imagenNaveActual = imagenesNave.left;
  } else if (teclas['ArrowDown']) {
    nave.y = nave.y + nave.velocidad;
    imagenNaveActual = imagenesNave.down;
  } else if (teclas['ArrowRight']) {
    nave.x = nave.x + nave.velocidad;
    imagenNaveActual = imagenesNave.right;
  }
  desplegarSiHayCHoque(nave, mercurio);
  desplegarSiHayCHoque(nave, venus);
  desplegarSiHayCHoque(nave, tierra);
  desplegarSiHayCHoque(nave, marte);
  desplegarSiHayCHoque(nave, jupiter);
  desplegarSiHayCHoque(nave, saturno);
  desplegarSiHayCHoque(nave, urano);
  desplegarSiHayCHoque(nave, neptuno);

  ctx.fillStyle = '#020b1a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  draw();

  requestAnimationFrame(animar);
}
function desplegarSiHayCHoque(nave, planeta) {
  if (haychoque(nave, planeta)) {
    planeta.desplegable.style.display = 'grid';
  } else {
    planeta.desplegable.style.display = 'none';
  }
}
function dibujarOrbita(planeta) {
  ctx.save();
  ctx.translate(centrox, centroy);
  ctx.beginPath();

  ctx.arc(0, 0, planeta.distanciaDelSol, 0, 10);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.restore();
}
function dibujarPlaneta(planeta) {
  ctx.save();
  ctx.translate(centrox, centroy);
  ctx.rotate(planeta.angulo);
  ctx.beginPath();
  ctx.arc(planeta.distanciaDelSol, 0, planeta.grandaria, 0, 10);
  ctx.fillStyle = planeta.color;

  ctx.fill();
  ctx.restore();
}

function dibujarSol() {
  ctx.save();
  ctx.beginPath();
  ctx.arc(centrox, centroy, 80, 0, 10);
  ctx.fillStyle = 'yellow';
  ctx.fill();
  ctx.restore();
}
function draw() {
  ctx.save();
  ctx.translate(-camera.x, -camera.y);
  dibujarOrbita(mercurio);
  dibujarOrbita(venus);
  dibujarOrbita(tierra);
  dibujarOrbita(tierra);
  dibujarOrbita(marte);
  dibujarOrbita(jupiter);
  dibujarOrbita(saturno);
  dibujarOrbita(neptuno);
  dibujarOrbita(urano);
  dibujarSol();
  dibujarPlaneta(mercurio);
  dibujarPlaneta(venus);
  dibujarPlaneta(tierra);
  dibujarPlaneta(marte);
  dibujarPlaneta(jupiter);
  dibujarPlaneta(saturno);
  dibujarPlaneta(neptuno);
  dibujarPlaneta(urano);
  dibujarNave();
  ctx.restore();
}

function dibujarNave() {
  ctx.drawImage(imagenNaveActual, nave.x, nave.y, nave.ancho, nave.alto);
}
