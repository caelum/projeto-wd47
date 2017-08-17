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

})()