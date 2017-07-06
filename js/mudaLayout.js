function mudaLayout() {
	$mural = document.querySelector('.mural')
	
	$mural.classList.toggle('mural--linha')

	if ($mural.classList.contains('mural--linha')) {
		document.querySelector('#btnMudaLayout').textContent = 'Bloco'
	} else {
		document.querySelector('#btnMudaLayout').textContent = 'Linhas'
	}
}