var campoFiltro = document.querySelector("#filtrar-tabela"); //Seleciona o campo de busca
//console.log(campoFiltro);
campoFiltro.addEventListener("input", function(){ //Evento de escuta que captura as teclas digitadas no campo filtro
  console.log(campoFiltro.value); // Ou this.value
  var pacientes = document.querySelectorAll(".paciente");

  if(this.value.length > 0){
    for(var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome"); //Busca dentro da trPaciente a classe td info-nome
      var nome = tdNome.textContent; //Extrai o conteúdo da td
      var expressao = new RegExp(this.value,"i");   //Cria expressão regular i = caseinsensitive

/*  Fintra por letra digitada sem uso de expressão regular
var comparavel = nome.substr(0, this.value.length);
var comparavelMinusculo = comparavel.toLowerCase();
var valorDigitadoMinusculo = this.value.toLowerCase();

if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
    paciente.classList.add("invisivel");
} else{
    paciente.classList.remove("invisivel");
}
*/
      if(!expressao.test(nome)){ //Busca campo ao digitar
        paciente.classList.add("invisivel");
      }else {
        paciente.classList.remove("invisivel");
      }
    }
  }else{    //Remove invisivel de cada paciente com o for
    for (var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    paciente.classList.remove("invisivel");
    }
  }

})
