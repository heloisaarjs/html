function comparaSenhas(){
let senha = document.getElementById("senha").value
let confirmaSenha=document.getElementById("confirmaSenha").value

if (senha==confirmaSenha){
    document.getElementById("senha").style.color="green"
    document.getElementById("confirmaSenha").style.color="green"

}
else{
    document.getElementById("senha").style.color="red"
    document.getElementById("confirmaSenha").style.color="red"
}
}

function mascaraCep(input) {
    let cep = input.value.replace(/\D/g, '');

    if (cep.length > 5) {
        cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');
    }

    input.value = cep;
}

function mascaraCpf(input){
let cpf=input.value.replace(/\D/g,'')
if (cpf.length>10){
    cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/,'$1.$2.$3-$4')
}
input.value = cpf
}

function mascaraCpf(input){
    let cpf=input.value.replace(/\D/g,'')
    if (cpf.length>10){
        cpf = cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/,'$1.$2.$3-$4')
    }
    input.value = cpf
    }