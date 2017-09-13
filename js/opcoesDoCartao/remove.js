;(function(){
	// Seleciona Elemento
	const btns = document.querySelectorAll('.opcoesDoCartao-remove')
	// Adiciona um Evento de click sem usar onclick e criando função anônima
	for(let i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click', function() {
			const cartao = btns[i].parentNode.parentNode
			cartao.classList.add("cartao--some")
			cartao.addEventListener("transitionend", function(){
				cartao.remove()
			})
		})
	}
})()

