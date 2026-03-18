/*Var */
let numero1 = 0;
let numero2 = 0;
let operacao = "";
/*  */ 


function clique (numero){
    
   let tela = document.getElementById('resultado').innerHTML;

   if(numero == "+" || numero == "-" || numero == "*" || numero == "/"){
    numero1 = tela;
    operacao = numero;
   }
   document.getElementById('resultado').innerHTML = tela + numero;
}

function limpar(){
    document.getElementById('resultado').innerHTML = " ";
}

function apagar(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}


function calcular(){
  
    numero2 = document.getElementById('resultado').innerHTML;

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

let resultado;

if(operacao == "+"){
        resultado = Number(numero1) + Number(numero2)
    }
else if(operacao == "-"){
    resultado = Number(numero1) - Number(numero2)
}

else if(operacao == "*"){
    resultado = Number(numero1) * Number(numero2)
}

else if(operacao == "/"){
    resultado = Number(numero1) / Number(numero2)
}
    document.getElementById('resultado').innerHTML = resultado;
}
