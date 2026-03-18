

function clique (numero){
    
   let num = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = num + numero;

  
}

function limpar(){
    document.getElementById('resultado').innerHTML = " ";
}

function apagar(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}


function soma(){

    let resultado = 0;
    let numero1 = Number(document.getElementById(numero1).value);
    let numero2 = Number(document.getElementById(numero2).value);


    resultado = numero1 + numero2;
    
} 





  

