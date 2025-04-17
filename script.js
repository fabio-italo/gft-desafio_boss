let nome = "";

function salvar() {
    const input = document.getElementById("nome");
    nome = input.value;
}

function adicionarXp() {
    const experiencia = document.getElementById("adicionarXp");
    const xp = parseInt(experiencia.value);

    let result = "";

    if (xp <= 1000) {
        result = "O Herói de nome " + nome + " está no nível de FERRO";
    } else if (xp >= 1001 && xp <= 2000) {
        result = "O Herói de nome " + nome + " está no nível de BRONZE";
    } else if (xp >= 2001 && xp <= 5000) {
        result = "O Herói de nome " + nome + " está no nível de PRATA";
    } else if (xp >= 5001 && xp <= 7000) {
        result = "O Herói de nome " + nome + " está no nível de OURO";
    } else if (xp >= 7001 && xp <= 8000) {
        result = "O Herói de nome " + nome + " está no nível de PLATINA";
    } else if (xp >= 8001 && xp <= 9000) {
        result = "O Herói de nome " + nome + " está no nível de ASCENDENTE";
    } else if (xp >= 9001 && xp <= 10000) {
        result = "O Herói de nome " + nome + " está no nível de IMORTAL";
    } else if (xp >= 10001) {
        result = "O Herói de nome " + nome + " está no nível de RADIANTE";
    }

    document.getElementById("resultado").innerText = result;
}





