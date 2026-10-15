const elementosFake = [
  { id: 1, tagName: 'DIV', style: { color: 'blue', display: 'flex' }, classList: ['container', 'active'] },
  { id: 2, tagName: 'H1', style: { color: 'red', display: 'block' }, classList: ['title'] },
  { id: 3, tagName: 'BUTTON', style: { color: 'white', display: 'inline-block' }, classList: ['btn', 'btn-primary'] },
  { id: 4, tagName: 'LI', style: { color: 'black', display: 'list-item' }, classList: ['item-lista', 'pending'] },
  { id: 5, tagName: 'LI', style: { color: 'black', display: 'list-item' }, classList: ['item-lista', 'done'] },
  { id: 6, tagName: 'SECTION', style: { color: 'gray', display: 'grid' }, classList: ['main-section'] },
  { id: 7, tagName: 'P', style: { color: 'green', display: 'block' }, classList: ['text-content'] },
  { id: 8, tagName: 'SPAN', style: { color: 'yellow', display: 'inline' }, classList: ['highlight'] },
  { id: 9, tagName: 'LI', style: { color: 'black', display: 'list-item' }, classList: ['item-lista', 'pending'] },
  { id: 10, tagName: 'FOOTER', style: { color: 'white', display: 'flex' }, classList: ['footer-area'] }
];
function exibir(titulo, dados) {
    console.log(`\n=== $(titulo) ===`)
    console.dir(dados, { depth: null});
}
for (const elemento of elementosFake) {
    elemento.style.backgroundColor = '#FFFFFF';
}
exibir('Atividade 1', elementosFake);

elementosFake.forEach((elemento) => {
    for (const chave in elemento) {
        if (chave === 'id') {
            elemento.id = `ID-${String(elemento.id).padStart(2, 0)}`;
        }
    }
});
exibir('Atividade 2', elementosFake);
elementosFake . forEach((elemento) => {
    const posicao = elemento.classlist.indexOf('pending');
    if (posicao !== -1) {
        elemento.classlist.splice(posicao, 1);
        elemento.classList.push('done');
        elemento.style.color = 'green';
        
    }
});
exibir('Atividade 3', elementosFake);
for (const elemento of elementosFake) {
    if (elementosFake.tagName === 'DIV') {
            elemento.classList.splice(posicao, 1); 
            elemento.classList.push('done');
            elemento.style.color = 'green';

    }
}
exibir('Atividade 4', elementosFake);
const relatorioDeEstilos = [];
elementosFake.forEach((elemento) => {
    relatorioDeEstilos.push({
        id: elemento.id,
        tagName: elemento.tagName,
        style: {...elemento.style }

    });
});
exibir('Atividade 5', relatorioDeEstilos);