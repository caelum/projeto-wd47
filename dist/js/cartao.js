"use strict";

;(function () {
    "use strict";

    var numeroDoCartao = 0;
    var mural = document.querySelector(".mural");

    window.adicionaCartaoNoMural = function (cartaoObj) {
        numeroDoCartao++;
        var wrapperCartao = document.createElement("tpl");
        var conteudoDoCartao = cartaoObj.conteudo;
        wrapperCartao.innerHTML = "\n        <article id=\"cartao_" + numeroDoCartao + "\" tabindex=\"0\" class=\"cartao\" style=\"background-color:" + cartaoObj.cor + "\">\n            <div class=\"opcoesDoCartao\">\n                <button class=\"opcoesDoCartao-remove opcoesDoCartao-opcao\" tabindex=\"0\">\n                    <svg><use xlink:href=\"#iconeRemover\"></use></svg>\n                </button>\n\n                <input type=\"radio\" name=\"corDoCartao" + numeroDoCartao + "\" value=\"#EBEF40\" id=\"corPadr\xE3o-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-radioTipo\">\n                <label for=\"corPadr\xE3o-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #EBEF40;\" tabindex=\"0\">\n                    Padr\xE3o\n                </label>\n\n                <input type=\"radio\" name=\"corDoCartao" + numeroDoCartao + "\" value=\"#F05450\" id=\"corImportante-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-radioTipo\">\n                <label for=\"corImportante-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #F05450;\" tabindex=\"0\">\n                    Importante\n                </label>\n\n                <input type=\"radio\" name=\"corDoCartao" + numeroDoCartao + "\" value=\"#92C4EC\" id=\"corTarefa-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-radioTipo\">\n                <label for=\"corTarefa-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #92C4EC;\" tabindex=\"0\">\n                    Tarefa\n                </label>\n\n                <input type=\"radio\" name=\"corDoCartao" + numeroDoCartao + "\" value=\"#76EF40\" id=\"corInspira\xE7\xE3o-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-radioTipo\">\n                <label for=\"corInspira\xE7\xE3o-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #76EF40;\" tabindex=\"0\">\n                    Inspira\xE7\xE3o\n                </label>\n            </div>\n            <p class=\"cartao-cownteudo\" contenteditable tabindex=\"0\">" + conteudoDoCartao + "</p>\n        </article>\n        ";

        var cartao = wrapperCartao.querySelector(".cartao"

        // Navegação com focus via teclado nos cartões
        );cartao.addEventListener("focusin", function () {
            cartao.classList.add("cartao--focado");
        });
        cartao.addEventListener("focusout", function () {
            cartao.classList.remove("cartao--focado");
        }

        // Funcionalidade muda cor dos cartões
        );cartao.addEventListener("change", function mudaCor(event) {
            var elementoSelecionado = event.target;
            var isRadioTipo = elementoSelecionado.classList.contains('opcoesDoCartao-radioTipo');
            if (isRadioTipo) {
                cartao.style.backgroundColor = elementoSelecionado.value;
            }
        }

        //Funcionalidade remove cartão
        );cartao.addEventListener('click', function (event) {
            var elementoSelecionado = event.target;
            if (elementoSelecionado.classList.contains('opcoesDoCartao-remove')) {
                cartao.classList.add("cartao--some");
                cartao.addEventListener("transitionend", function () {
                    cartao.remove();
                });
            }
        });

        cartao.addEventListener("keydown", function deixaClicarComEnter(event) {
            if (event.target.classList.contains("opcoesDoCartao-opcao") && (event.key === "Enter" || event.key === " ")) {
                window.getSelection().removeAllRanges();
                event.target.click();
            }
        });

        mural.appendChild(cartao);
    };
})();