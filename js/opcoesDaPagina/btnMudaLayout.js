const btn = document.querySelector('#btnMudaLayout') 

btn.onclick = function mudaTexto() {
    if(btn.textContent == 'Blocos') {
        btn.textContent = 'Linhas'
    } else {
        btn.textContent = 'Blocos'
    }
}