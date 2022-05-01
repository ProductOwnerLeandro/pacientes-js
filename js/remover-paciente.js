var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    if (event.target.tagName == 'TD') {
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(function(){
              /* Outra maneira de remover
              var alvoEvento = event.target;
              var paiDoAlvo = alvoEvento.parentNode; //Remove a TR do paciente
              paiDoAlvo.remove(); */
          event.target.parentNode.remove();
          },500);
        }

    //console.log(event.target);
});

              //console.log(pacientes);
              /*
              pacientes.forEach(function(paciente){
                  paciente.addEventListener("dblclick", function(){
                    console.log("Duplo click ok");
                    this.remove(); //Palavra "this" se refere ao dono do evento no caso paciente.
                  });
              });
              */
