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

})()