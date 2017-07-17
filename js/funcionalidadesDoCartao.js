// Seleciona Elemento
const btnRemove = document.querySelector('.opcoesDoCartao-remove')
// Adiciona um Evento de click sem usar onclick e criando função anônima
btnRemove.addEventListener('click', function() {
	btnRemove.parentNode.parentNode.remove()
})

// Falar para a galera testar as funcionalidades feitas até agora para dar o efeito de mudar o botão;
// Usar let para poder sobreescrever o valor e dai então falar do const (const pode gerar dúvidas na hora da IIFE)
btnRemove.classList.remove('no-js')