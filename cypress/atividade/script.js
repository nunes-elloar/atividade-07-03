const email = document.querySelector("#email")
const senha = document.querySelector("#senha")
const validacaoE = document.querySelector(".validacao")
const validacaoS = document.querySelector(".validacao2")

emailValor = email.value;
senhaValor = senha.value;
validacaoValor= validacaoE.value;
validacao2Valor= validacaoS.value;

function validacao(){
    if(emailValor != "elloar.nunes@gmail.com"){
        document.validacaoValor.inneHTML +=  "<p>Email errado</p>"
    }

    if(senhaValor != "654321"){
        document.validacao2Valor.inneHTML += "<p>Senha errado</p>"
    }
}
