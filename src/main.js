const naveImagen = new Image();
naveImagen.onload = function(){
  animar();
}
naveImagen.src = '/nave1.png'
import './style.css'
const canvas = document.getElementById('sistemaSolar');
const ctx = canvas.getContext('2d');
const desplegableMercurio = document.getElementById('desplegable-mercurio');
const desplegableTierra = document.getElementById('desplegable-tierra')
const desplegableVenus = document.getElementById('desplegable-venus')
const desplegableMarte = document.getElementById('desplegable-marte')
const desplegableJupiter = document.getElementById('desplegable-jupiter')
const desplegableSaturno = document.getElementById('desplegable-saturno')
const desplegableUrano = document.getElementById('desplegable-urano')
const desplegableNeptuno = document.getElementById('desplegable-neptuno')
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
  grandaria: 8, 
  distanciaDelSol: 120,
  velocidad: 0.00       
};
let tierra ={
  angulo : 10,
  x: 0,
  y:0,
  grandaria: 20,
  distanciaDelSol:300,
  velocidad:0.03
}
let venus ={
  angulo: 5,
  x: 0,
  y:0,
  grandaria: 16,
  distanciaDelSol:200,
  velocidad: 0.02
}
let marte ={
  angulo: 8,
  x: 0,
  y:0,
  grandaria: 10,
  distanciaDelSol: 400,
  velocidad:0.00
}

let jupiter ={
  angulo: 30,
  x:0,
  y:0,
  grandaria:  45,
   distanciaDelSol: 500,
  velocidad: 0.01
}

let saturno ={
  angulo: 100,
  x:0,
  y:0,
  grandaria: 40,
   distanciaDelSol: 650,
  velocidad: 0.02
}

let urano ={
  angulo: 120,
  x:0,
  y:0,
  grandaria: 30,
   distanciaDelSol: 700,
  velocidad: 0.03
}
let neptuno ={
  angulo: 180,
  x:0,
  y:0,
  grandaria : 30,
   distanciaDelSol: 800,
  velocidad:0.02
}
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
    


 function haychoque(nave,planeta){
  const choqueHorizontal= nave.x<planeta.x + planeta.grandaria*2 && nave.x + nave.ancho > planeta.x;
  const choqueVertical = nave.y < planeta.y + planeta.grandaria*2 && nave.y + nave.alto >planeta.y;
  return choqueHorizontal && choqueVertical
}

function movimientoPlaneta(planeta){
  let centroX = centrox + Math.cos(planeta.angulo) * planeta.distanciaDelSol;
let centroY = centroy + Math.sin(planeta.angulo) * planeta.distanciaDelSol;
planeta.x = centroX - planeta.grandaria;
planeta.y = centroY - planeta.grandaria;
}
function animar(){
  updateCamera()
  mercurio.angulo=mercurio.angulo + mercurio.velocidad
movimientoPlaneta(mercurio)
venus.angulo = venus.angulo + venus.velocidad
movimientoPlaneta(venus)
tierra.angulo=tierra.angulo+ tierra.velocidad
movimientoPlaneta(tierra)
marte.angulo = marte.angulo + marte.velocidad
movimientoPlaneta(marte)

jupiter.angulo = jupiter.angulo + jupiter.velocidad
movimientoPlaneta(jupiter)

saturno.angulo = saturno.angulo + saturno.velocidad
movimientoPlaneta(saturno)

urano.angulo = urano.angulo + urano.velocidad
movimientoPlaneta(urano)

neptuno.angulo = neptuno.angulo + neptuno.velocidad
movimientoPlaneta(neptuno)

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
  if(haychoque(nave,tierra)){
    desplegableTierra.style.display='grid';
  } else{
    desplegableTierra.style.display ='none'
  }

  if(haychoque(nave,venus)){
    desplegableVenus.style.display = 'grid'
  }else{
    desplegableVenus.style.display = 'none'
  }
   if (haychoque(nave,marte)){
    desplegableMarte.style.display='grid'
   } else{
    desplegableMarte.style.display = 'none'
   }
   if(haychoque(nave,jupiter)){
    desplegableJupiter.style.display = 'grid'
   }else{
    desplegableJupiter.style.display = 'none'
   }

   if(haychoque(nave, saturno)){
    desplegableSaturno.style.display = 'grid'
   } else{
    desplegableSaturno.style.display = 'none'
   }

ctx.fillStyle ='#020b1a';
ctx.fillRect(0, 0, canvas.width, canvas.height);
draw()           

 

  requestAnimationFrame(animar);
  
}

function dibujarUrano(){
  ctx.save()
  ctx.translate(centrox,centroy)
  ctx.rotate(saturno.angulo)
  ctx.beginPath()
  ctx.arc(saturno.distanciaDelSol,0,saturno.grandaria,0,10)
  ctx.fillStyle='#a79c05'
  ctx.fill()
  ctx.restore()
}

function dibujarSaturno(){
  ctx.save()
  ctx.translate(centrox,centroy)
  ctx.rotate(saturno.angulo)
  ctx.beginPath()
  ctx.arc(saturno.distanciaDelSol,0,saturno.grandaria,0,10)
  ctx.fillStyle='#a79c05'
  ctx.fill()
  ctx.restore()
}
function dibujarJupiter(){
  ctx.save()
  ctx.translate(centrox,centroy)
  ctx.rotate(jupiter.angulo)
  ctx.beginPath()
  ctx.arc(jupiter.distanciaDelSol,0,jupiter.grandaria,0,10)
   ctx.fillStyle='#d1ff87';
  ctx.fill()
  ctx.restore()
}
function dibujarVenus(){
  ctx.save()
  ctx.translate(centrox,centroy)
  ctx.rotate(venus.angulo)
  ctx.beginPath()
  ctx.arc(venus.distanciaDelSol,0,venus.grandaria,0,10)
 
  ctx.fillStyle='#ffcb87';
  ctx.fill()
  ctx.restore()
}
function dibujarMarte(){
  ctx.save()
  ctx.translate(centrox,centroy)
  ctx.rotate(marte.angulo)
  ctx.beginPath();
  ctx.arc(marte.distanciaDelSol,0, marte.grandaria,0,10)
  ctx.fillStyle='red'
  ctx.fill()
  ctx.restore()
}
function dibujarTierra(){
ctx.save()
ctx.translate(centrox,centroy);
  ctx.rotate(tierra.angulo)
  ctx.beginPath();
  ctx.arc(tierra.distanciaDelSol,0,tierra.grandaria,0,10)
  ctx.fillStyle='#2761F5'
  ctx.fill()
  ctx.restore()
}

function dibujarMercurio(){
 ctx.save()
  ctx.translate(centrox,centroy);
  ctx.rotate(mercurio.angulo)
  ctx.beginPath();
  ctx.arc(mercurio.distanciaDelSol,0,mercurio.grandaria, 0, 10)
  ctx.fillStyle = '#ff4800';  
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
dibujarVenus();
dibujarTierra();
dibujarMarte()
dibujarJupiter()
dibujarSaturno()
 ctx.restore()

}

function dibujarNave(){
  ctx.drawImage(naveImagen,nave.x, nave.y, nave.ancho, nave.alto)
}
