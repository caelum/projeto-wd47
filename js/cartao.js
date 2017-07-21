;(function(){
	// Seleciona Elemento
	const btn = document.querySelector('.opcoesDoCartao-remove')
	// Adiciona um Evento de click sem usar onclick e criando função anônima
	btn.addEventListener('click', function() {
		btn.parentNode.parentNode.remove()
	})

	// Falar para btnRemovea galera testar as funcionalidades feitas até agora para dar o efeito de mudar o botão;
	// Usar let para poder sobreescrever o valor e dai então falar do const (const pode gerar dúvidas na hora da IIFE)
	btn.classList.remove('no-js')
})()

