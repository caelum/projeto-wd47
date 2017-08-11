'use strict';

;(function () {
	// Ao clicarmos no botaoMudaLayout que possui o onclick atribuido
	var mural = document.querySelector('.mural');
	var btn = document.querySelector('#btnMudaLayout');

	// Se 
	function mudaLayout() {
		mural.classList.toggle('mural--linha');

		if (mural.classList.contains('mural--linha')) {
			btn.textContent = 'Bloco';
		} else {
			btn.textContent = 'Linhas';
		}
	}

	btn.addEventListener('click', mudaLayout);
	btn.classList.remove('no-js');

	var btnAjuda = document.querySelector('#btnAjuda');
	btnAjuda.addEventListener("click", function () {
		var ajudas = [{ conteudo: "Bem Vindo ao Ceep", cor: "#F05450" }, { conteudo: "Clique no botão Linhas para alterar o layout", cor: "#92C4EC" }];

		ajudas.forEach(function (ajuda) {
			adicionaCartaoNoMural(ajuda);
		});
	});

	btnAjuda.classList.remove('no-js');
})();