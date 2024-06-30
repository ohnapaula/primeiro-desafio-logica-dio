//primeiro desafio de lógica do Felipão da DIO
let nomeHeroi = "Ana da Selva de Pedra"
let quantidadeExperiencia = -1

if (quantidadeExperiencia >= 0 && quantidadeExperiencia <= 1000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ferro!")
} else if (quantidadeExperiencia >= 1001 && quantidadeExperiencia <= 2000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Bronze!")
} else if (quantidadeExperiencia >= 2001 && quantidadeExperiencia <= 5000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Prata!")
} else if (quantidadeExperiencia >= 5001 && quantidadeExperiencia <= 7000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ouro!")
} else if (quantidadeExperiencia >= 7001 && quantidadeExperiencia <= 8000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Platina!")
} else if (quantidadeExperiencia >= 8001 && quantidadeExperiencia <= 9000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Ascendente!")
} else if (quantidadeExperiencia >= 9001 && quantidadeExperiencia <= 10000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Imortal!")
} else if (quantidadeExperiencia >= 10001) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível Radiante!")
} else {
    console.log("Erro: quantidade de XP inválida para classificação de Herói!")
}


