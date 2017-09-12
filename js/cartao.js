;(function(){

	const cartoes = document.querySelectorAll(".cartao")

	for(let j = 0; j < cartoes.length; j++){
		const cartao = cartoes[j]

		// Navegação com focus via teclado nos cartões
		cartao.addEventListener("focusin", function(){
			cartao.classList.add("cartao--focado")
		})
		cartao.addEventListener("focusout", function(){
			cartao.classList.remove("cartao--focado")
		})

		// Funcionalidade muda cor dos cartões
		cartao.addEventListener("change", function mudaCor(event){
			const elementoSelecionado = event.target
			const isRadioTipo = elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo')
			if(isRadioTipo) {
				cartao.style.backgroundColor = elementoSelecionado.value
			}
        })

		cartao.addEventListener("keydown", function deixaClicarComEnter(event){
			if(event.target.classList.contains("opcoesDoCartao-opcao") && (event.keyCode === 13 || event.keyCode === 32)){
				event.target.click()
			}
		})
		
        //Funcionalidade remove cartão
        cartao.addEventListener('click', function(event) {
            const elementoSelecionado = event.target
            if(elementoSelecionado.classList.contains('opcoesDoCartao-remove')){
                cartao.classList.add("cartao--some")
                cartao.addEventListener("transitionend", function(){
                    cartao.remove()
                })
            }	
        })

	}

})()