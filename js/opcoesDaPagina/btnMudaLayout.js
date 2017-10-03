const btn = document.querySelector('#btnMudaLayout') 

function mudaTexto() {
    if(btn.textContent == 'Blocos') {
        btn.textContent = 'Linhas'
    } else {
        btn.textContent = 'Blocos'
    }
}

btn.onclick = mudaTexto