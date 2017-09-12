;(function(){
    const cartoes = document.querySelectorAll(".cartao")
    
    for(let j = 0; j < cartoes.length; j++){
        const cartao = cartoes[j]
        
        cartao.addEventListener("focusin", function(){
            cartao.classList.add("cartao--focado")
        })
        
        cartao.addEventListener("focusout", function(){
            cartao.classList.remove("cartao--focado")
        })
        
    }
})()