;(function(){
	// Seleciona Elemento
	const btns = document.querySelectorAll('.opcoesDoCartao-remove')
	// Adiciona um Evento de click sem usar onclick e criando função anônima
	for(let i = 0; i < btns.length; i++) {

		btns[i].addEventListener('click', function() {
			btns[i].parentNode.parentNode.remove()
		})
		// Remove o no-js de todos os botões
		btns[i].classList.remove('no-js')
	}
})()

