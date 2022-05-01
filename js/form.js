var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    // Extraindo informações do paciente do form.
    var paciente = obtenhoPacienteFormulario(form);
    console.log(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if (erros.length > 0){
      exibeMensagensErro(erros);
      return;
    }

//Verifica se as funções captaram erro na inserção
  /*  if (erros.length > 0){
      var mensagemErro = document.querySelector("#mensagem-erro");
      mensagemErro.textContent = erros;
      //form.reset();
      return;
    }else{
      var mensagemErro = document.querySelector("#mensagem-erro"); //Ok
      mensagemErro.textContent = "Adicionado com sucesso ";         //Ok
    }
*/

    // Adicionando o paciente na tabela.



//    console.log(pacienteTr);
  adicionaPacienteApi(paciente);

    form.reset();
    var mensagemErro =  document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = "- Adicionado com sucesso.";

});

//Função para importar array em API XML
function adicionaPacienteApi(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}



// Nova função diferente para mensagem de erro.
function exibeMensagensErro(erros){
  var ul = document.querySelector("#mensagens-erro");
ul.innerHTML = ""; // Apaga as mensagens do looping anterior.
  erros.forEach(function(erro){  //foreach é um FOR resumido.
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });

}



// Função para Extrair informações do paciente do form.
function obtenhoPacienteFormulario(form){
  var paciente = {
      nome: form.nome.value, //Atenção para vírgula comum  entre as propriedades.
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td")
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente){
  var erros = []; //array
  if(paciente.nome.length == 0) erros.push("- O campo nome não pode ser vazio.")

  if(!validaPeso(paciente.peso)) erros.push("- O peso é inválido.");

  if(!validaAltura(paciente.altura)) erros.push("- A altura é inválida.");

  if(paciente.altura.length == 0){
      erros.push("- A altura não pode ser vazio");
    }
  if(paciente.peso.length == 0){
          erros.push("- O peso não pode ser vazio");
        }
  if(paciente.gordura.length == 0){
      erros.push("- A gordura não pode ser vazio");
  }
return erros;
}

/*
titulo.addEventListener("click", function (){
    console.log("Olá -----");
});

function mostraMensagem(){
  console.log("Olá -----");
}
*/
