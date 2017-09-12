;(function(){  
	const btnAjuda = document.querySelector('#btnAjuda')
	btnAjuda.addEventListener("click", function(){	
		const pegaAjudas = new XMLHttpRequest()
		pegaAjudas.open('GET', 'https://ceep.herokuapp.com/cartoes/instrucoes')
		pegaAjudas.responseType = "json"
		pegaAjudas.send()
		pegaAjudas.addEventListener("load", function(){
			const objeto = pegaAjudas.response
			const ajudas = objeto.instrucoes
			
			ajudas.forEach(function(ajuda){
				adicionaCartaoNoMural(ajuda)
			})	
		})		
	})
	
	btnAjuda.classList.remove('no-js')
})()