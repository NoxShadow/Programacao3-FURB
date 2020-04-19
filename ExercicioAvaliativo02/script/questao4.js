
var filmes = [];

function criarInicial() {
    filmes.push(new Filme('Eragon', 2006, 'Fantasia'));
    filmes.push(new Filme('Minha mãe é uma peça 3', 2019, 'Comédia'));
    filmes.push(new Filme('O chamado', 2002, 'Terror'));
}

function renderizarFilmes() {
    const filmesRenderList = document.getElementById('filmesLista');

    filmesRenderList.innerHTML = '';

    filmes.forEach(filme => {
        const ul = criarUlFilme(filme);
        filmesRenderList.appendChild(ul);
        filmesRenderList.appendChild(document.createElement('br'));
    });
}

function criarUlFilme(filme) {
    const filmeNewRenderList = document.createElement('ul');

    for (const key in filme) {
        if (filme.hasOwnProperty(key)) {
            const element = filme[key];
            const filmeListItem = document.createElement('li');

            filmeListItem.innerText = `${key}: ${element.toString()}`;

            filmeNewRenderList.appendChild(filmeListItem);
        }
    }

    return filmeNewRenderList;
}

function getValueAndClear(element) {
    const value = element.value;
    element.innerText = '';

    return value;
}

class Filme {

    constructor(titulo, ano, genero) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
    }

}