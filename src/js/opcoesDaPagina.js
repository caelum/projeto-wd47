;(function() {
	// Ao clicarmos no botaoMudaLayout que possui o onclick atribuido
	const mural = document.querySelector('.mural')
	const btn = document.querySelector('#btnMudaLayout')

	// Se 
	function mudaLayout() {
		mural.classList.toggle('mural--linha')

		if (mural.classList.contains('mural--linha')) {
			btn.textContent = 'Bloco'
		} else {
			btn.textContent = 'Linhas'
		}
	}

	btn.addEventListener('click', mudaLayout)

	btn.classList.remove('no-js')

	const btnAjuda = document.querySelector('#btnAjuda')
	btnAjuda.addEventListener("click", function(){	
		const pegaAjudas = new XMLHttpRequest()
		pegaAjudas.open('GET', 'https://ceep.herokuapp.com/cartoes/instrucoes')
		pegaAjudas.responseType = "json"
		pegaAjudas.send()
		pegaAjudas.addEventListener("load", function(){
			const objeto = pegaAjudas.response
			const ajudas = objeto.instrucoes
			
			ajudas.forEach(function(ajuda){
				adicionaCartaoNoMural(ajuda)
			})	
		})		
	})
	
	btnAjuda.classList.remove('no-js')
	
	const btnSalva = $("#sync")
	btnSalva.click(function(){
		btnSalva.addClass("botaoSync--esperando")
		btnSalva.removeClass("botaoSync--sincronizado")

		const salvadorDeCartoes = new XMLHttpRequest()
		salvadorDeCartoes.open('POST', 'https://ceep.herokuapp.com/cartoes/salvar')
		salvadorDeCartoes.setRequestHeader("Content-Type", "application/json")
		
		const cartoes = document.querySelectorAll(".cartao")
		const infosDoMural = {
			usuario: "artur.adam@caelum.com.br" 
			,cartoes: Array.from($(".cartao")).map(function(cartao){
				return {
					conteudo: cartao.querySelector(".cartao-conteudo").textContent
					,cor: getComputedStyle(cartao).getPropertyValue("background-color")
				}
			})
		}
		
		salvadorDeCartoes.send(JSON.stringify(infosDoMural))

		salvadorDeCartoes.addEventListener("load", function(){
			btnSalva.removeClass("botaoSync--esperando")
			btnSalva.addClass("botaoSync--sincronizado")
		})

		salvadorDeCartoes.addEventListener("error", function(){
			btnSalva.removeClass("botaoSync--esperando")
			btnSalva.addClass("botaoSync--deuRuim")
		})
	})

	btnSalva.removeClass('no-js')

})()