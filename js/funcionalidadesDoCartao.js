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
		// Remove o no-js de todos os botões
		btns[i].classList.remove('no-js')
	}

	const cartoes = document.querySelectorAll(".cartao")

	for(let j = 0; j < cartoes.length; j++){
		const cartao = cartoes[j]
		const opcoes = [...cartao.querySelectorAll(".opcoesDoCartao-opcao")]
		cartao.addEventListener("keydown", function(event){
			if(event.key === " "){
				opcoes.forEach(opcao => {
					opcao.setAttribute("tabindex", 0)
				})
				opcoes[0].focus()
			}
			if(event.key === "Escape"){
				cartao.focus()
				event.preventDefault()
			}
		})

		cartao.addEventListener("focusin", function(){
			cartao.classList.add("cartao--focado")
		})

		cartao.addEventListener("focusout", function(){
			cartao.classList.remove("cartao--focado")
			opcoes.forEach(opcao => {
				opcao.setAttribute("tabindex", -1)
			})
		})

	}

})()

