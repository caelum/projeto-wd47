// Seleciona Elemento
const btnRemove = document.querySelector('.opcoesDoCartao-remove')
// Adiciona um Evento de click sem usar onclick e criando função anônima
btnRemove.addEventListener('click', function() {
	btnRemove.parentNode.parentNode.remove()
})