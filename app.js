let numeroSecreto = 0;
let Intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${Intentos} ${(Intentos===1) ? 'intento' : 'intentos' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es Menor');  
        }else {
            asignarTextoElemento('p','El numero secreto es Mayor');
        }
        Intentos++;
        limpiarCaja();
    }
    return;

}

function limpiarCaja() {
document.querySelector("#valorUsuario").value='';

}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1; 
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);


    if(listaNumerosSorteados.length == numeroMaximo ) {
        asignarTextoElemento('p','Ya se sortearon todos los posibles numeros');
    } else {
        // si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del Numero Screto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    Intentos = 1;
}



function reiniciarJuego() {
    //limpiar caja.
    limpiarCaja();
    // Indicar mensaje de intervalo de numeros
    // generar numero aleatorio
    // Inicializar el numero de intentos
    condicionesIniciales();
    // Deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


condicionesIniciales();

