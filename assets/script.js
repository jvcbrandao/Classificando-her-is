function resultado() {
    event.preventDefault();/*Impede o carregamento*/
    var experiencia = document.getElementById('xp').value;
    var nome = document.getElementById('nome').value;

    if (isNaN(experiencia)) {
        alert('Por favor, informe uma quantidade válida de XP.');
        return;
    }

    if (experiencia < 1000) {
        document.getElementById('result').textContent = `O Herói de nome ${nome} está no nível de Ferro`;
        console.log(`O Herói de nome ${nome} está no nível de Ferro`);
    } else if (experiencia < 2000) {
        document.getElementById('result').textContent = `O Herói de nome ${nome} está no nível de Bronze`;
    } else if (experiencia < 5000) {
        document.getElementById('result').textContent = `O Herói de nome ${nome} está no nível de Prata`;
    } else if (experiencia < 7000) {
        document.getElementById('result').textContent = `O Herói de nome ${nome} está no nível de Ouro`;
    } else if (experiencia < 8000) {
        document.getElementById('result').textContent = `O Herói de nome ${nome} está no nível de Platina`;
    } else if (experiencia < 9000) {
        document.getElementById('result').textContent = `O Herói de nome ${nome} está no nível de Ascendente`;
    } else if (experiencia < 10000) {
        document.getElementById('result').textContent = `O Herói de nome ${nome} está no nível de Imortal`;
    } else {
        document.getElementById('result').textContent = `O Herói de nome ${nome} está no nível de Radiante`;
    }
}