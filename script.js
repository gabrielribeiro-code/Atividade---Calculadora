
function soma(){

    let resultado_tela = 0;
    let numero1 = Number(document.getElementById('n1').value);
    let numero2 = Number(document.getElementById('n2').value);


    resultado_tela = numero1 + numero2;
    console.log(resultado_tela);
    document.getElementById('tela_resultado').innerHTML = resultado_tela;
    
} 

function subtracao(){

    let resultado_tela = 0;
    let numero1 = Number(document.getElementById("n1").value);
    let numero2 = Number(document.getElementById("n2").value);


    resultado_tela = numero1 - numero2;
    console.log(resultado_tela);
    document.getElementById('tela_resultado').innerHTML = resultado_tela;
    
} 

function multiplicacao(){

    let resultado_tela = 0;
    let numero1 = Number(document.getElementById("n1").value);
    let numero2 = Number(document.getElementById("n2").value);


    resultado_tela = numero1 * numero2;
    console.log(resultado_tela);
    document.getElementById('tela_resultado').innerHTML = resultado_tela;
    
} 


function divisao(){

    let resultado_tela = 0;
    let numero1 = Number(document.getElementById("n1").value);
    let numero2 = Number(document.getElementById("n2").value);

        if(numero2 === 0 || numero1 === 0){
            alert("ERRO! Não pode dividir número por 0.");
            return;
        }

    resultado_tela = numero1 / numero2;
    console.log(resultado_tela);
    document.getElementById('tela_resultado').innerHTML = resultado_tela;
    
} 

function limpar(){

    let numero1 = Number(document.getElementById("n1").value = "");
    let numero2 = Number(document.getElementById("n2").value = "");
    document.getElementById("tela_resultado").innerHTML = "";
    
}

    




  

