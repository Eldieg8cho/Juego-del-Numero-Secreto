let numeroSecreto = 0;
let intentos = 0;
let numeroMaximoIntentos = 3;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log (numeroSecreto)
function asignarTextoElemento (elemento,texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return; 
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if( numeroDeUsuario === numeroSecreto){ // si el usuario acerto
        asignarTextoElemento ('p', `${(intentos === 1) ? 'Acertaste al primer intento :)' : `Acertaste en ${intentos} intentos :)`}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { // si el usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor :(')
        } else {
            asignarTextoElemento('p','El numero secreto es mayor :(')
        } if (intentos >= numeroMaximoIntentos){
            asignarTextoElemento('h1', 'GAME OVER');
            asignarTextoElemento('p','Gracias por jugar');
            document.getElementById('reiniciar').removeAttribute ('disabled');
        } else {
            
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() { //este es para limpiar la caja donde se escribe
    document.querySelector('#valorUsuario').value = '';
}

function generarNumSecreto() { 
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya fueron sorteados todos los numeros posibles')
    } else {

    }

    //si el numero generdo ya esta en la lista se hace algo o no
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumSecreto();
    }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto'); //el asignar texto elemento se utiliza para poder escribir el texto deseado en el elemento que queremos
    asignarTextoElemento('p',`Indica un numero de el 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //kimpiar la caja, que se haga como si recargaras la pagina
    limpiarCaja();
    //indicar mensaje de inicio 
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();

