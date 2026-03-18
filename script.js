

function clique (numero){
    
   let num = document.getElementById('tela_resultado').innerHTML;
   document.getElementById('tela_resultado').innerHTML = num + numero;

  
}

function limpar(){
    document.getElementById('tela_resultado').innerHTML = " ";
}

function apagar(){
    let resultado = document.getElementById('tela_resultado').innerHTML;
    document.getElementById('tela_resultado').innerHTML = resultado.substring(0, resultado.length -1);
}


function soma(){

    let resultado = 0;
    let numero1 = Number(document.getElementById(numero1).value);
    let numero2 = Number(document.getElementById(numero2).value);


    resultado = numero1 + numero2;
    console.log(resultado);
    document.getElementById("tela_resultado").innerHTML = resultado;
    
} 

function subtracao(){

    let resultado = 0;
    let numero1 = Number(document.getElementById(numero1).value);
    let numero2 = Number(document.getElementById(numero2).value);


    resultado = numero1 - numero2;
    console.log(resultado);
    document.getElementById("tela_resultado").innerHTML = resultado;
    
} 

function multiplicacao(){

    let resultado = 0;
    let numero1 = Number(document.getElementById(numero1).value);
    let numero2 = Number(document.getElementById(numero2).value);


    resultado = numero1 * numero2;
    console.log(resultado);
    document.getElementById("tela_resultado").innerHTML = resultado;
    
} 


function divisao(){

    let resultado = 0;
    let numero1 = Number(document.getElementById(numero1).value);
    let numero2 = Number(document.getElementById(numero2).value);


    resultado = numero1 / numero2;
    console.log(resultado);
    document.getElementById("tela_resultado").innerHTML = resultado;
    
} 



    




  

