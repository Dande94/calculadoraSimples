function inserir(simbolo){
    var visor = document.getElementById("visor");
    visor.value = visor.value + simbolo;
};

function limpar(){
    var visor = document.getElementById("visor").value ="";
}

function calcular(){
    var visor = document.getElementById("visor");
    if(visor.value.length > 0){
        visor.value = eval(visor.value);
    }
}