/*Var */
let numero1 = (parseFloat);
let numero2 = (parseFloat);
let operacao = "";
let numero = 0;
/*  */ 


function clique (numero){
    
   let tela = document.getElementById('resultado').innerHTML;

   if(numero === "+" || numero === "-" || numero === "*" || numero === "/"){
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
  
   
