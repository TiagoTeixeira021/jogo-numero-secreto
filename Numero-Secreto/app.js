// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Boas-vindas ao jogo / Número (1 - 100):"

let listaNumeroSorteados = [];
let numeroLimite = 100;
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;



function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


function exebirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", `Boas-vindas ao jogo / Número (1 - ${numeroLimite})`);
}

exebirMensagemInicial()


function verificarChute() {

    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela("p", `Você acertou o número secreto com (${tentativas}) ${palavraTentativa}!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela("p", "O número secreto é menor");
        tentativas++;
        limparCampo()
    } else {
        exibirTextoNaTela("p", "O número secreto é maior");
        tentativas++;
        limparCampo()
    }

}


function geraNumeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeNumerosLista = listaNumeroSorteados.length;

    if (quantidadeNumerosLista == numeroLimite) {
        listaNumeroSorteados = [];
    }

    if (listaNumeroSorteados.includes(numeroEscolhido)) {
        return geraNumeroAleatorio()
    } else {
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
        return numeroEscolhido;
    }

}


function limparCampo() {
    chute = document.querySelector("input");
    chute.value = null;
}


function novoJogo() {
    numeroSecreto = geraNumeroAleatorio();
    limparCampo()
    tentativas = 1;
    exebirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true)
}