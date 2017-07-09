(function(){
	// Seleciona Elemento
	btn = document.querySelector('.opcoesDoCartao-remove')
	// Adiciona um Evento de click sem usar onclick e criando função anônima
	btn.addEventListener('click', function() {
		btn.parentNode.parentNode.remove()
	})

	btn.classList.remove('no-js')
})()
