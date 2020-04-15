function createHead(pos) {
    return '<header>\n'
        + '    <h1>Exercício Avaliativo 2</h1> \n'
        + '</header > \n'
        + '<nav> \n'
        + '     <a  href="index.html" ' + (pos === 0 ? "class='current'" : "") + '>Introdução</a> \n'
        + '     <a  href="parte1.html" ' + (pos === 1 ? "class='current'" : "") + '>Numero 1</a> \n'
        + '     <a  href="parte2.html" ' + (pos === 2 ? "class='current'" : "") + '>Numero 2</a> \n'
        + '     <a  href="parte3.html" ' + (pos === 3 ? "class='current'" : "") + '>Numero 3</a> \n'
        + '     <a  href="parte4.html" ' + (pos === 4 ? "class='current'" : "") + '>Numero 4</a> \n'
        + '     <a  href="parte5.html" ' + (pos === 5 ? "class='current'" : "") + '>Numero 5</a> \n'
        + '     <a  href="parte6.html" ' + (pos === 6 ? "class='current'" : "") + '>Numero 6</a> \n'
        + '</nav> \n';
}