//Técnica AJAX
var botaoAdicionar = document.querySelector("#buscar-pacientes-api"); //Adicionar # mais id

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest(); //Requisita um objeto externo XML
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientess"); // Importa do endereço de API disponível (url JSON)

    xhr.addEventListener("load", function(){
      var erroAjax = document.querySelector("#erro-ajax");
      if(xhr.status == 200){
          erroAjax.classList.add("invisivel");
          var resposta = xhr.responseText;
          var pacientes = JSON.parse(resposta);

          pacientes.forEach(function(paciente){
            adicionaPacienteApi(paciente);
          });

        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);

            erroAjax.classList.remove("invisivel");

        }

    });
  xhr.send();
});
