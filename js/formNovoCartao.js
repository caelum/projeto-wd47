;(function(){
    const form = document.querySelector(".formNovoCartao")
    const mural = document.querySelector(".mural")

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

            //imperativo
            // const cartao = document.createElement("article")
            // cartao.classList.add("cartao")
            // cartaoConteudo.setAttribute("tabindex", 0)
            // const cartaoConteudo = document.createElement("p")
            // cartaoConteudo.classList.add("cartao-conteudo")
            // cartaoConteudo.setAttribute("tabindex", 0)
            // cartaoConteudo.textContent = textarea.value
            // cartao.appendChild(cartaoConteudo)
            
            const wrapperCartao = document.createElement("div")
            
            numeroDoCartao++
            const conteudoDoCartao = textarea.value
            wrapperCartao.innerHTML = `
            <article id="cartao_${numeroDoCartao}" tabindex="0" class="cartao">
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
            </article>
            `
            
            mural.appendChild(wrapperCartao)

        }        
    })    
        
    form.classList.remove("no-js")
})()