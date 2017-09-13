;(function(){
    "use strict"

    let numeroDoCartao = 0
    const mural = document.querySelector(".mural")

    window.adicionaCartaoNoMural = function(cartaoObj){
        numeroDoCartao++
        const wrapperCartao = document.createElement("tpl")
        const conteudoDoCartao = cartaoObj.conteudo
        wrapperCartao.innerHTML = `
        <article id="cartao_${numeroDoCartao}" tabindex="0" class="cartao" style="background-color:${cartaoObj.cor}">
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
        `
    
        const cartao = wrapperCartao.querySelector(".cartao")

        // Navegação com focus via teclado nos cartões
        cartao.addEventListener("focusin", function(){
            cartao.classList.add("cartao--focado")
        })
        cartao.addEventListener("focusout", function(){
            cartao.classList.remove("cartao--focado")
        })

        // Funcionalidade muda cor dos cartões
        cartao.addEventListener("change", function mudaCor(event){
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

        //Funcionalidade remove cartão
        cartao.addEventListener('click', function(event) {
            const elementoSelecionado = event.target
            if(elementoSelecionado.classList.contains('opcoesDoCartao-remove')){
                cartao.classList.add("cartao--some")
                cartao.addEventListener("transitionend", function(){
                    cartao.remove()
                })
            }	
        })
    
        mural.appendChild(cartao)

    }

    $.ajax({
        url: "https://ceep.herokuapp.com/cartoes/carregar"
        ,method: "GET"
        ,data: {usuario: "artur.adam@caelum.com.br"}
        ,dataType: "jsonp"
        ,success: function (objeto){
            const cartoes = objeto.cartoes		
            cartoes.forEach(function(cartao){
                adicionaCartaoNoMural(cartao)
            })
        }
    })

})()
