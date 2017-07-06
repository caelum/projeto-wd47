// Seleciona Elemento
let btnRemoveCartao = document.querySelector('.opcoesDoCartao-remove')
// Adiciona um Evento de click sem usar onclick
btnRemoveCartao.addEventListener('click', removerCartao)
// Cria a função que vai ser executada quando acontecer um click
function removerCartao() {
	btnRemoveCartao.parentNode.parentNode.remove()
}
