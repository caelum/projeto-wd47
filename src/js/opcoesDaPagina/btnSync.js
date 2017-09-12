;(function(){
    const btnSalva = $("#sync")
    btnSalva.click(function(){
        btnSalva.addClass("botaoSync--esperando")
        btnSalva.removeClass("botaoSync--sincronizado")
    
        const salvadorDeCartoes = new XMLHttpRequest()
        salvadorDeCartoes.open('POST', 'https://ceep.herokuapp.com/cartoes/salvar')
        salvadorDeCartoes.setRequestHeader("Content-Type", "application/json")
        
        const cartoes = document.querySelectorAll(".cartao")
        const infosDoMural = {
            usuario: "artur.adam@caelum.com.br" 
            ,cartoes: Array.from($(".cartao")).map(function(cartao){
                return {
                    conteudo: cartao.querySelector(".cartao-conteudo").textContent
                    ,cor: getComputedStyle(cartao).getPropertyValue("background-color")
                }
            })
        }
        
        salvadorDeCartoes.send(JSON.stringify(infosDoMural))
    
        salvadorDeCartoes.addEventListener("load", function(){
            btnSalva.removeClass("botaoSync--esperando")
            btnSalva.addClass("botaoSync--sincronizado")
        })
    
        salvadorDeCartoes.addEventListener("error", function(){
            btnSalva.removeClass("botaoSync--esperando")
            btnSalva.addClass("botaoSync--deuRuim")
        })
    })
    
    btnSalva.removeClass('no-js')
})()
