// Seleciona Elemento
$btn = document.querySelector('.opcoesDoCartao-remove')
// Adiciona um Evento de click sem usar onclick e criando função anônima
$btn.addEventListener('click', function() {
	this.parentNode.parentNode.remove() // "this", nesse caso, seleciona o elemento que o evento está sendo aplicado
})