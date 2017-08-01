;(function(){
	const mural = document.querySelector(".mural")
	let numeroDoCartao = 0

	window.adicionaCartaoNoMural = function(conteudoDoCartao){
		numeroDoCartao++

		const templateCartao = document.createElement("tpl")

		//declarativo
		templateCartao.innerHTML = 
		`<article id="cartao_${numeroDoCartao}" tabindex="0" class="cartao">
			<div class="opcoesDoCartao">
				<button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
					<svg><use xlink:href="#iconeRemover"></use></svg>
				</button>

				<input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
				<label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
					Padrão
				</label>

				<input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
				<label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
					Importante
				</label>

				<input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
				<label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
					Tarefa
				</label>

				<input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
				<label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
					Inspiração
				</label>
			</div>
			<p class="cartao-conteudo" contenteditable tabindex="0">${conteudoDoCartao}</p>
		</article>`

		const cartao = templateCartao.querySelector("article")

		cartao.addEventListener('click', function() {
			if(event.target.classList.contains("opcoesDoCartao-remove")){
				cartao.classList.add("cartao--some")
				cartao.addEventListener("transitionend", function(){
					cartao.remove()
				})
			}
		})

		// Navegação com focus via teclado nos cartões
		cartao.addEventListener("focusin", function(){
			cartao.classList.add("cartao--focado")
		})

		cartao.addEventListener("focusout", function(){
			cartao.classList.remove("cartao--focado")
		})

		// Funcionalidade muda cor dos cartões		
		cartao.addEventListener("click", function mudaCor(event){
			const elementoSelecionado = event.target
			const isRadioTipo = elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo')
			if(isRadioTipo) {
				cartao.style.backgroundColor = elementoSelecionado.value
			}
		})

		cartao.addEventListener("keydown", function deixaClicarComEnter(event){
			if(event.target.classList.contains("opcoesDoCartao-opcao") && (event.key === "Enter" || event.key === " ")){
				window.getSelection().removeAllRanges()
				event.target.click()
			}
		})

		mural.appendChild(cartao)
		cartao.focus()
	}

})()
