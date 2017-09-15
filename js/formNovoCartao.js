;(function(){
    const form = document.querySelector(".formNovoCartao")

    let numeroDoCartao = 0
    form.addEventListener("submit", function(event){
        event.preventDefault()
        const textarea = form.querySelector(".formNovoCartao-conteudo")
        const isTextAreaVazio = textarea.value.trim().length === 0
        if(isTextAreaVazio){ 
            const msgErro = document.createElement("div")
            msgErro.classList.add("formNovoCartao-msg")
            msgErro.textContent = "Formulário inválido. Não digite vários nada!"
            
            const btnSubmit = form.children[form.children.length-1]
            form.addEventListener("animationend", function(event){
                event.target.remove()
            })
            form.insertBefore(msgErro, btnSubmit)
        } else {
            
            numeroDoCartao++
            const conteudoDoCartao = textarea.value
            const cartao = $(`
            <article id="cartao_${numeroDoCartao}" tabindex="0" class="cartao">
                <div class="opcoesDoCartao">
                    <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                        <svg><use xlink:href="#iconeRemover"></use></svg>
                    </button>

                    <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo" checked>
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
            </article>
            `)

            // Navegação com focus via teclado nos cartões
            cartao.on("focusin", function(){
                cartao.addClass("cartao--focado")
            })
            cartao.on("focusout", function(){
                cartao.removeClass("cartao--focado")
            })

            // Funcionalidade muda cor dos cartões
            cartao.on("change", ".opcoesDoCartao-radioTipo", function mudaCor(event){
                cartao.css("background-color", event.target.value)
            })

            cartao.on("keydown", function deixaClicarComEnter(event){
                if(event.target.classList.contains("opcoesDoCartao-opcao") && (event.key === "Enter" || event.key === " ")){
                    event.target.click()
                }
            })

            //Funcionalidade remove cartão
            cartao.on('click', function(event) {
                const elementoSelecionado = event.target
                if(elementoSelecionado.classList.contains('opcoesDoCartao-remove')){
                    cartao.addClass("cartao--some")
                    cartao.on("transitionend", function(){
                        cartao.remove()
                    })
                }	
            })
            
            $(".mural").append(cartao)

        }        

        textarea.value = ''
    })    
        
    form.classList.remove("no-js")
})()