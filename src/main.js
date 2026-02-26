const naveImagen = new Image();
naveImagen.src = '/imgs/nave1.png'
import './style.css'
const canvas = document.getElementById('sistemaSolar');
const ctx = canvas.getContext('2d');
const cartelMercurio = document.getElementById('cartel');

canvas.width = innerWidth;
canvas.height = innerHeight; 
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

let nave = {
  x: 100,
  y: 100,
  ancho:50,
  alto:50,
  velocidad: 5
}


let angulo = 0; 
let anguloMercurio= 0;
let anguloTierra = 10;
let anguloVenus = 0;
function animar(){
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
ctx.fillStyle ='#020b1a';
ctx.fillRect(0, 0, canvas.width, canvas.height);
draw()           
anguloMercurio= anguloMercurio + 0.04
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
 ctx.save
  ctx.translate(centrox,centroy);
  ctx.rotate(anguloMercurio)
  ctx.beginPath();
  ctx.arc(150,0,8,0,10)
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
  dibujarNave()
   ctx.save()
dibujarSol();


dibujarTierra();
dibujarVenus();

 ctx.restore()

}

naveImagen.onload = function(){
animar();
}
function dibujarNave(){
  ctx.drawImage(naveImagen,nave.x, nave.y, nave.ancho, nave.alto)
}
