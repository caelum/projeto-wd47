// Ao clicarmos no botaoMudaLayout que possui o onclick atribuido
let mural = document.querySelector('.mural')
let btn = document.querySelector('#btnMudaLayout')
// Se 
function mudaLayout() {
	mural.classList.toggle('mural--linha')

	if (mural.classList.contains('mural--linha')) {
		btn.textContent = 'Bloco'
	} else {
		btn.textContent = 'Linhas'
	}
}


btn.classList.remove('no-js')