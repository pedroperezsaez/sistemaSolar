const naveImagen = new Image();
naveImagen.onload = function(){
  animar();
}
naveImagen.src = '/nave1.png'
import './style.css'
const canvas = document.getElementById('sistemaSolar');
const ctx = canvas.getContext('2d');
const desplegableMercurio = document.getElementById('desplegable-mercurio');
canvas.width = 1920;
canvas.height = 1080;



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
    width: canvas.width /2 ,
    height: canvas.height/2 ,
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
let nave = {
  x: 1000,
  y: 500,
  ancho:50,
  alto:50,
  velocidad: 5
}
let mercurio = {
  angulo: 0,
  x: 0,
  y: 0,
  grandariaMercurio: 8, 
  distanciaDelSol: 120,
  velocidad: 0.00       
};
function pulsarAbajo() {
  teclas["s"] = true;
}
function soltarAbajo() {
  teclas["s"] = false;
}
var flechaAbajo = document.getElementById('hacia-abajo')
flechaAbajo.onpointerdown = pulsarAbajo; 
flechaAbajo.onpointerup = soltarAbajo; 

function pulsarArriba(){
teclas["w"] = true;
}
function soltarArriba(){
  teclas["w"] = false
}
var flechaArriba = document.getElementById('hacia-arriba')
flechaArriba.onpointerdown = pulsarArriba
flechaArriba.onpointerup = soltarArriba

function pulsarIzquierda(){
  teclas["a"] = true
}
function solarIzquierda(){
  teclas["a"] = false
}

var flechaIzquierda = document.getElementById('hacia-izq')
flechaIzquierda.onpointerdown=pulsarIzquierda
flechaIzquierda.onpointerup=solarIzquierda

function pulsarDerecha(){
  teclas["d"] = true
}
function soltarDerecha(){
  teclas["d"] = false
}
var flechaDerecha = document.getElementById('hacia-der')
flechaDerecha.onpointerdown=pulsarDerecha
flechaDerecha.onpointerup=soltarDerecha
    

function haychoque(nave,mercurio){
  const choqueHorizontal= nave.x<mercurio.x + mercurio.grandariaMercurio*2 && nave.x + nave.ancho > mercurio.x;
  const choqueVertical = nave.y < mercurio.y + mercurio.grandariaMercurio*2 && nave.y + nave.alto >mercurio.y;
  return choqueHorizontal && choqueVertical
}

let anguloTierra = 10;
let anguloVenus = 0;

function animar(){
  updateCamera()
  mercurio.angulo=mercurio.angulo + mercurio.velocidad
let centroXMercurio = centrox + Math.cos(mercurio.angulo) * mercurio.distanciaDelSol;
let centroYMercurio = centroy + Math.sin(mercurio.angulo) * mercurio.distanciaDelSol;
mercurio.x = centroXMercurio - mercurio.grandariaMercurio;
mercurio.y = centroYMercurio - mercurio.grandariaMercurio;
  if(teclas["w"] || teclas["W"]){
    nave.y = nave.y - nave.velocidad
  }
  if(teclas["a"] || teclas["A"]){
    nave.x = nave.x - nave.velocidad
  }
  if(teclas["s"] || teclas["S"]){
    nave.y=nave.y + nave.velocidad
  }
  if(teclas["d"] || teclas["D"]){
    nave.x = nave.x + nave.velocidad
  }
  if(haychoque(nave, mercurio)) {
    desplegableMercurio.style.display='grid';
  
  }else{
    desplegableMercurio.style.display = 'none';
  }
ctx.fillStyle ='#020b1a';
ctx.fillRect(0, 0, canvas.width, canvas.height);
draw()           

 anguloTierra = anguloTierra + 0.04
 anguloVenus = anguloVenus + 0.01
  requestAnimationFrame(animar);
  
}

function dibujarVenus(){
  ctx.save()
  ctx.translate(centrox,centroy)
  ctx.rotate(anguloVenus)
  ctx.beginPath()
  ctx.arc(250,0,20,0,10)
  ctx.strokeStyle = "white";
  ctx.fillStyle='#FFC375';
  ctx.fill()
  ctx.restore()
}
function dibujarTierra(){
ctx.save()
ctx.translate(centrox,centroy);
  ctx.rotate(anguloTierra)
  ctx.beginPath();
  ctx.arc(350,0,20,0,10)
  ctx.fillStyle='#2761F5'
  ctx.fill()
  ctx.restore()
}

function dibujarMercurio(){
 ctx.save()
  ctx.translate(centrox,centroy);
  ctx.rotate(mercurio.angulo)
  ctx.beginPath();
  ctx.arc(mercurio.distanciaDelSol,0,mercurio.grandariaMercurio, 0, 10)
  ctx.fillStyle = '#df2525';  
  ctx.fill()
  ctx.restore();
 
}
function dibujarSol(){
  ctx.save()
    ctx.beginPath();
  ctx.arc(centrox, centroy, 80, 0, 10);
  ctx.fillStyle = 'yellow'; 
  ctx.fill();  
  ctx.restore()
}
function draw(){
 
   ctx.save()
    ctx.translate(-camera.x, -camera.y);
  dibujarNave()
dibujarSol();
dibujarMercurio()

dibujarTierra();
dibujarVenus();

 ctx.restore()

}

function dibujarNave(){
  ctx.drawImage(naveImagen,nave.x, nave.y, nave.ancho, nave.alto)
}
