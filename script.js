let angulo = 0;
let girando = false;       
let interval;              

const piedra = document.getElementById("fotoCambio");
const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    if(!girando) {
            
        interval = setInterval(() => {
            angulo += 5;                  
            piedra.style.transform = `rotate(${angulo}deg)`;
        }, 50); 
        girando = true;
    } else {
        clearInterval(interval);
        girando = false;
    }
});