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
		const ajudas = [
			"Bem Vindo ao Ceep"
			,"Clique no btn Linhas para mudar o layout"
		]
		

		ajudas.forEach(function(ajuda){
			alert(ajuda)
		})
		
	})
	btnAjuda.classList.remove('no-js')

})()