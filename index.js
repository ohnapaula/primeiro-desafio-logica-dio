//primeiro desafio de lógica do Felipão da DIO
let heroName = "Ana da Selva de Pedra"
let experiencePoints = -1

if (experiencePoints >= 0 && experiencePoints <= 1000) {
    console.log("O Herói de nome " + heroName + " está no nível Ferro!")
} else if (experiencePoints >= 1001 && experiencePoints <= 2000) {
    console.log("O Herói de nome " + heroName + " está no nível Bronze!")
} else if (experiencePoints >= 2001 && experiencePoints <= 5000) {
    console.log("O Herói de nome " + heroName + " está no nível Prata!")
} else if (experiencePoints >= 5001 && experiencePoints <= 7000) {
    console.log("O Herói de nome " + heroName + " está no nível Ouro!")
} else if (experiencePoints >= 7001 && experiencePoints <= 8000) {
    console.log("O Herói de nome " + heroName + " está no nível Platina!")
} else if (experiencePoints >= 8001 && experiencePoints <= 9000) {
    console.log("O Herói de nome " + heroName + " está no nível Ascendente!")
} else if (experiencePoints >= 9001 && experiencePoints <= 10000) {
    console.log("O Herói de nome " + heroName + " está no nível Imortal!")
} else if (experiencePoints >= 10001) {
    console.log("O Herói de nome " + heroName + " está no nível Radiante!")
} else {
    console.log("Erro: quantidade de XP inválida para classificação de Herói!")
}


