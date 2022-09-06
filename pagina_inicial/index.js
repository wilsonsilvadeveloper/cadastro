
var clicks = 0;
var busca = 0;

function pesquisar() {

    if (clicks == 0) {
        var escolha = document.querySelector("#escolha");
        var ocultaForm = document.querySelector(".barradepesquisa");
        ocultaForm.style.display = "flex";
        escolha.style.display = "none";
        clicks = 1;
    }
    
    else {
        alert("Recarregue a pagina !")
    }
   
        
}
  
function cadastrar() {

    if (clicks == 0) {
        var escolha = document.querySelector("#escolha");
        escolha.style.display = "none";
        var ocultaForm = document.querySelector("#cadastrar");
        ocultaForm.style.display = "flex";
        clicks = 1;
    }

    else {
        alert("Recarregue a pagina !")
    }
    
}

function cliente() {
    if (busca == 0){
        var cliente = document.querySelector("#buscar_c");
        cliente.style.display = "flex";
        busca = 1;
    }
    
    else {
        alert("Recarregue a pagina !")
    }
    
}
    
function funcionarios() {
    if (busca == 0){
        var cliente = document.querySelector("#buscar_f");
        cliente.style.display = "flex";
        busca = 1;
    }
    
    else {
        alert("Recarregue a pagina !")
    }
    
}
    
    