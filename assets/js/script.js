function maiorDeIdade() {
    idade = parseInt(prompt("Informe sua idade"))
    if (idade >= 18) {
        alert("Maior de idade, você pode dirigir")
    } else {
        alert("Menor de idade, você não pode dirigir")
    }
}

function calculadoraDeNotas() {
    nota = parseInt(prompt("Informe uma nota"))
    if (nota >= 60) {
        alert("Aprovado")
    } else {
        alert("Reprovado")
    }
}

function numerosParesEImpares() {
    numero = parseInt(prompt("Informe um número"))
    if (numero % 2 == 0) {
        alert("Par")
    } else {
        alert("Ímpar")
    }
}

function loginSimples() {
    var senhaCorreta = "sp"
    var usuarioCorreto = "senai"
    var usuario = prompt("Usuario: ")
    var senha = prompt("Senha: ")
    if (senha == senhaCorreta && usuario == usuarioCorreto) {
        alert("Boas Vindas " + usuarioCorreto)
    } else {
        alert("Erro")
    }
}

function classTemp() {
    var frio = [0, 10]
    var moderado = [11, 20]
    var quente = [21, 30]
    var temp = parseInt(prompt("Insira a Temperatura"))
    if (frio[0] <= temp && temp <= frio[1]) {
        alert("Frio")
    } else if (moderado[0] <= temp && temp <= moderado[1]){
        alert("Moderado")
    } else if (quente[0] <= temp && temp <= quente[1]){
        alert("Quente")
    } else {
        alert("Muito QUENTE")
    }
}

function advinhacao() {
    aleatorio = Math.random()
    aleatorio *= 10
    aleatorio = parseInt(aleatorio)
    for (var i = 0; i < 3;) {
        var numero = parseInt(prompt("Tente Adivinhar um numero"))
        if (numero == aleatorio) {
            alert("Você acertou")
            break
        } else if (numero < aleatorio) {
            alert("Baixo demais")
        } else {
            alert("Alta demais")
        }
    }
    alert(aleatorio)
}

function maioridade() {
    var idade = parseInt(prompt("Insira sua idade"))
    var brasil = 18
    var eua = 21
    var japao = 20
    var maior = "Nenhum"
    if (idade >= brasil) {
        maior = "Brasil "
    }
    if (idade >= japao) {
        maior += "Japão "
    }
    if (idade >= eua) {
        maior += "EUA "
    }
    alert(maior)
}

function notasPorConceitos() {
    var nota = parseInt(prompt("Insira sua nota"))
    var A = [90, 100]
    var B = [80, 89]
    var C = [70, 79]
    var D = [60, 69]
    var F = 59
    if (A[0] <= nota && nota <= A[1]) {
        nota = "A"
    }
    if (B[0] <= nota && nota <= B[1]) {
        nota = "B"
    }
    if (C[0] <= nota && nota <= C[1]) {
        nota = "C"
    }
    if (D[0] <= nota && nota <= D[1]) {
        nota = "D"
    }
    if  (nota <= F) {
        nota = "F"
    }
    alert(nota)
}

function menuRestaurante() {
    var escolha = parseInt(prompt("Insira o número da comida escolhida \n\n 1- Prato 1 \n 2- Prato 2 \n 3- Prato 3 \n 4- Prato 4"))
    if (escolha == 1) {
        var preco = 29.99
    }
    if (escolha == 2) {
        var preco = 59.90
    }
    if (escolha == 3) {
        var preco = 67.55
    }
    if (escolha == 4) {
        var preco = 60.20
    }
    alert("Você escolheu o prato " + escolha + ", seu preço é R$" + preco)
}

function cousinVerify() {
    var numero = parseInt(prompt("Insira um numero"))
    var primo = true
    for (i = 2; i < numero; i++) {
        if (numero % i == 0) {
            primo = false
            break
        }
    }
    if (numero == 2) {
        primo = true
    }
    if (numero > 0 && numero < 101) {
        alert(primo)
    }
}