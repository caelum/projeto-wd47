;(function(){  
    const btnAjuda = document.querySelector('#btnAjuda')
    btnAjuda.addEventListener("click", function(){
        const ajudas = [
            "Bem Vindo ao Ceep"
            ,"Clique no btn Linhas para mudar o layout"
        ]		
        
        ajudas.forEach(function(ajuda){
            alert(ajuda)
        })
        
    })
    btnAjuda.classList.remove('no-js')
})()