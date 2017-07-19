;(function(){
	// Seleciona Elemento para aplicar a função de remover
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
		// Remove o no-js de todos os botões de remover
		btns[i].classList.remove('no-js')
	}

	// - Pega todos os Cartões
	const cartoes = document.querySelectorAll(".cartao")
	// Funções dos Cartões
	for(let j = 0; j < cartoes.length; j++){
		const cartao = cartoes[j]
		const tiposDoCartao = cartao.querySelector('.opcoesDoCartao-tipos')

		// Navegação via teclado
		cartao.addEventListener("focusin", function(){
			cartao.classList.add("cartao--focado")
		})
		cartao.addEventListener("focusout", function(){
			cartao.classList.remove("cartao--focado")
		})



		// Habilita o click para as labels
		tiposDoCartao.addEventListener("keydown", function(event){
			console.log(event.target)
			if(event.key === "Enter" || event.key === " "){
				event.target.click()
			}
		})
		// Event delegation do click do cartao
		cartao.querySelector('.opcoesDoCartao').addEventListener('click', function() {
			var elementoClicado = event.target

			// Clicou nas cores
			if(elementoClicado.className.match('opcoesDoCartao-radioTipo')) {
				const corSelecionada = elementoClicado.value
				cartao.style.backgroundColor = corSelecionada
			}

		})

		// Removendo a class no-js da opcao de mudar tipo
		tiposDoCartao.classList.remove('no-js')
	}

	// const tipoRadio = document.querySelectorAll(".opcoesDoCartao-radioTipo")
	// const tipoLabel = document.querySelectorAll(".opcoesDoCartao-tipo")
	//
	// for(let k = 0; k < tipoRadio.length; k++){
	// 	const radio = tipoRadio[k];
	// 	const label = tipoLabel[k];
	//
	// 	radio.addEventListener("onchange", function(event){
	// 		console.log(event.target.value)
	// 	})
		// label.classList.remove("no-js")
	// 	label.addEventListener("keydown", function(event){
	// 		if(event.key === "Enter" || event.key === " "){
	// 			event.target.click()
	// 		}
	// 	})
	// }

})()
