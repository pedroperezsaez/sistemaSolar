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
let tierra ={
  angulo : 10,
  x: 0,
  y:0,
  grandariaTierra: 20,
  distanciaDelSol:300,
  velocidad:0.03
}
let venus ={
  angulo: 5,
  x: 0,
  y:0,
  grandariaVenus: 16,
  distanciaDelSol:200,
  velocidad: 0.02
}
let marte ={
  angulo: 8,
  x: 0,
  y:0,
  grandariaMarte: 10,
  distanciaDelSol: 400,
  velocidad:0.04
}

let jupiter ={
  angulo: 30,
  x:0,
  y:0,
  grandariaJupiter:  50,
  velocidad: 0.01
}
let saturno ={
  angulo: 100,
  x:0,
  y:0,
  grandariaSaturno: 40,
  velocidad: 0.02
}

let urano ={
  angulo: 120,
  x:0,
  y:0,
  grandariaUrano: 30,
  velocidad: 0.03
}
let neptuno ={
  angulo: 180,
  x:0,
  y:0,
  grandariaNeptuno : 30,
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
    

function haychoqueMercurio(nave,mercurio){
  const choqueHorizontal= nave.x<mercurio.x + mercurio.grandariaMercurio*2 && nave.x + nave.ancho > mercurio.x;
  const choqueVertical = nave.y < mercurio.y + mercurio.grandariaMercurio*2 && nave.y + nave.alto >mercurio.y;
  return choqueHorizontal && choqueVertical
}
function haychoqueTierra(nave,tierra){
  const choqueHorizontal= nave.x<tierra.x + tierra.grandariaTierra*2 && nave.x + nave.ancho > tierra.x;
  const choqueVertical = nave.y < tierra.y + tierra.grandariaTierra*2 && nave.y + nave.alto >tierra.y;
  return choqueHorizontal && choqueVertical
}

function haychoqueVenus(nave,venus){
  const choqueHorizontal= nave.x<venus.x + venus.grandariaVenus*2 && nave.x + nave.ancho > venus.x;
  const choqueVertical = nave.y < venus.y + venus.grandariaVenus*2 && nave.y + nave.alto > venus.y;
return choqueHorizontal && choqueVertical
}

function haychoqueMarte(nave,marte){
  const choqueHorizontal = nave.x<marte.x + marte.grandariaMarte*2 && nave.x + nave.ancho > marte.x;
  const choqueVertical = nave.y < marte.y + marte.grandariaMarte*2 && nave.y + nave.alto > marte.y;
  return choqueHorizontal && choqueVertical
}


function animar(){
  updateCamera()
  mercurio.angulo=mercurio.angulo + mercurio.velocidad
let centroXMercurio = centrox + Math.cos(mercurio.angulo) * mercurio.distanciaDelSol;
let centroYMercurio = centroy + Math.sin(mercurio.angulo) * mercurio.distanciaDelSol;
mercurio.x = centroXMercurio - mercurio.grandariaMercurio;
mercurio.y = centroYMercurio - mercurio.grandariaMercurio;

tierra.angulo=tierra.angulo+ tierra.velocidad
let centroXTierra = centrox +Math.cos(tierra.angulo) * tierra.distanciaDelSol;
let centroYTierra = centroy + Math.sin(tierra.angulo) * tierra.distanciaDelSol;
tierra.x=centroXTierra- tierra.grandariaTierra
tierra.y = centroYTierra - tierra.grandariaTierra

venus.angulo = venus.angulo + venus.velocidad
let centroXVenus = centrox+Math.cos(venus.angulo) * venus.distanciaDelSol;
let centroYVenus = centroy+Math.sin(venus.angulo) * venus.distanciaDelSol;
venus.x=centroXVenus - venus.grandariaVenus
venus.y=centroYVenus - venus.grandariaVenus

marte.angulo = marte.angulo + marte.velocidad
let centroXMarte = centrox+Math.cos(marte.angulo) * marte.distanciaDelSol;
let centroYMarte = centroy+Math.sin(marte.angulo) * marte.distanciaDelSol;
marte.x=centroXMarte-marte.grandariaMarte
marte.y=centroYMarte-marte.grandariaMarte


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
  if(haychoqueMercurio(nave, mercurio)) {
    desplegableMercurio.style.display='grid';
  
  }else{
    desplegableMercurio.style.display = 'none';
  }
  if(haychoqueTierra(nave,tierra)){
    desplegableTierra.style.display='grid';
  } else{
    desplegableTierra.style.display ='none'
  }

  if(haychoqueVenus(nave,venus)){
    desplegableVenus.style.display = 'grid'
  }else{
    desplegableVenus.style.display = 'none'
  }
   if (haychoqueMarte(nave,marte)){
    desplegableMarte.style.display='grid'
   } else{
    desplegableMarte.style.display = 'none'
   }
ctx.fillStyle ='#020b1a';
ctx.fillRect(0, 0, canvas.width, canvas.height);
draw()           

 

  requestAnimationFrame(animar);
  
}

function dibujarVenus(){
  ctx.save()
  ctx.translate(centrox,centroy)
  ctx.rotate(venus.angulo)
  ctx.beginPath()
  ctx.arc(venus.distanciaDelSol,0,venus.grandariaVenus,0,10)
 
  ctx.fillStyle='#ffcb87';
  ctx.fill()
  ctx.restore()
}
function dibujarMarte(){
  ctx.save
  ctx.translate(centrox,centroy)
  ctx.rotate(marte.angulo)
  ctx.beginPath();
  ctx.arc(marte.distanciaDelSol,0, marte.grandariaMarte,0,10)
  ctx.fillStyle='red'
  ctx.fill()
  ctx.restore()
}
function dibujarTierra(){
ctx.save()
ctx.translate(centrox,centroy);
  ctx.rotate(tierra.angulo)
  ctx.beginPath();
  ctx.arc(tierra.distanciaDelSol,0,tierra.grandariaTierra,0,10)
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
 ctx.restore()

}

function dibujarNave(){
  ctx.drawImage(naveImagen,nave.x, nave.y, nave.ancho, nave.alto)
}
