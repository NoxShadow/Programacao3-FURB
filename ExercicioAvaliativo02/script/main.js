const caminhos = ["index.html",
    "parte1.html",
    "parte2.html",
    "parte3.html",
    "parte4.html",
    "parte5.html",
    "parte6.html"];

function createHeader(pos) {
    const h1 = document.createElement('h1');
    h1.innerText = 'Exercício Avaliativo 2';
    const header = document.createElement('header');
    header.appendChild(h1);

    const nav = document.createElement('nav');
    nav.id = 'main-nav';
    for (let index = 0; index < caminhos.length; index++) {
        const caminho = caminhos[index];
        const a = document.createElement('a');

        if (pos === index) {
            a.classList.add('current');
        }

        a.href = caminho;

        a.innerText = getTextPosicao(index);

        nav.appendChild(a);
    }

    const body = document.getElementById('content');
    body.appendChild(header);
    body.appendChild(nav);
}

function getTextPosicao(pos) {
    if (typeof (pos) !== 'number') {
        return;
    }
    if (pos === 0) {
        return 'Introdução';
    }
    return 'Parte ' + pos;
}