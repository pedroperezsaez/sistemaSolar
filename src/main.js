import './style.css'
const canvas = document.getElementById('sistemaSolar');
const ctx = canvas.getContext('2d');


canvas.width = innerWidth;
canvas.height = innerHeight; 
  const centrox = canvas.width / 2;
  const centroy = canvas.height / 2;


let angulo = 0; 

function animar(){
ctx.fillStyle ='#020b1a';
ctx.fillRect(0, 0, canvas.width, canvas.height);

draw()           

  angulo = angulo + 0.01;
  requestAnimationFrame(animar);
}


function dibujarSol(){
    ctx.beginPath();
  ctx.arc(centrox, centroy, 40, 0, 10);
  ctx.fillStyle = 'yellow'; 
  ctx.fill();  
}
function draw(){
  
dibujarSol();

}



animar();