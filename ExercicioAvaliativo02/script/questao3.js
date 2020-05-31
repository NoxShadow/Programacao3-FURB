var listaInicial = ['isso', 'é', 'um', 'teste'];
var listaId = 'listaConteudo';
var inputId = 'addListTextInput';
var posAttribute = 'posId';

function renderList() {
    const lista = document.getElementById(listaId);
    lista.innerHTML = '';

    for (let index = 0; index < listaInicial.length; index++) {
        const texto = listaInicial[index];

        lista.appendChild(createListItem(texto, index));
    }
}

function remove(pos) {
    const lista = document.getElementById(listaId);
    const listaChildren = lista.children;

    for (let index = 0; index < listaChildren.length; index++) {
        const element = listaChildren[index];

        if (element.getAttribute(posAttribute) == pos) {
            listaInicial.splice(pos, 1);
            break;
        }
    }

    renderList();
}

function createListItem(texto, index) {
    const item = document.createElement('li');
    item.setAttribute(posAttribute, index);
    item.innerText = texto;
    item.onclick = function () {
        remove(index);
    };

    return item;
}

function addListItem() {
    const input = document.getElementById(inputId);
    const texto = input.value;
    listaInicial.push(texto);

    renderList();
}