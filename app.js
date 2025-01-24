let numeroSecreto = 0; // Es de alcance global
let intento = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10; 
/*
let titulo = document.querySelector("h1"); // Es un tipo de dato objeto, tiene metodos que definen su comportamiento
titulo.innerHTML = "Juego del número secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Dame un número del 1 al 10";
*/
/*
function intentoDeUsuario(){
    alert('Click desde la funcion');
    return;
}
*/
function asignarTextoElemento (etiqueta, frase) {
    let elementoTextoHTML = document.querySelector(etiqueta);
    elementoTextoHTML.innerHTML = frase ;
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(numeroMaximo == listaNumerosSorteados.length){
        asignarTextoElemento('p',"ya se sortearon todos los numeros posibles");       
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    /*console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario == numeroSecreto);
    console.log(numeroDeUsuario === numeroSecreto);
    */
   //El usuario no acerto
    console.log(intento);
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Felicidades, Acertaste en ${intento} ${(intento === 1 ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //Remueve atributos 
    } else {
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p',"El numero secreto es menor");        
        } else {
            asignarTextoElemento('p',"El numero secreto es mayor");         
        }
        intento++;
        limpiarTextBox();
    }
    return;
}

function limpiarTextBox() {
    document.querySelector('#valorUsuario').value = ' '; //se puede obtener el id de esta forma igual con queryselector
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Dame un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intento = 1;
}

function reiniciarJuego() {
    // limpiar caja
    limpiarTextBox();
    // Indicar intervalo de numeros
    // Inicializar el numero de intentos
    condicionesIniciales();
    // Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true'); // se le pasa el atributo que queremos cambiar y la condicion que queremos que sea
}

condicionesIniciales();



