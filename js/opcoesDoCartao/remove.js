;(function(){
	// Seleciona Elemento
	const btn = document.querySelector('.opcoesDoCartao-remove')
	// Adiciona um Evento de click sem usar onclick e criando função anônima
	btn.addEventListener('click', function() {
		const cartao = btn.parentNode.parentNode
		cartao.classList.add("cartao--some")
		cartao.addEventListener("transitionend", function(){
			cartao.remove()
		})
	})
})()

