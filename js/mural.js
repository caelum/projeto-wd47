"use strict";

;(function () {
    "use strict";

    var numeroDoCartao = 0;

    window.adicionaCartaoNoMural = function (cartaoObj) {
        numeroDoCartao++;
        var conteudoDoCartao = cartaoObj.conteudo;
        var cartao = $("\n        <article id=\"cartao_" + numeroDoCartao + "\" tabindex=\"0\" class=\"cartao\" style=\"background-color:" + cartaoObj.cor + "\">\n            <div class=\"opcoesDoCartao\">\n                <button class=\"opcoesDoCartao-remove opcoesDoCartao-opcao\" tabindex=\"0\">\n                    <svg><use xlink:href=\"#iconeRemover\"></use></svg>\n                </button>\n\n                    <input type=\"radio\" name=\"corDoCartao" + numeroDoCartao + "\" value=\"#EBEF40\" id=\"corPadr\xE3o-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-radioTipo\" checked>\n                    <label for=\"corPadr\xE3o-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #EBEF40;\" tabindex=\"0\">\n                        Padr\xE3o\n                    </label>\n\n                    <input type=\"radio\" name=\"corDoCartao" + numeroDoCartao + "\" value=\"#F05450\" id=\"corImportante-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-radioTipo\">\n                    <label for=\"corImportante-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #F05450;\" tabindex=\"0\">\n                        Importante\n                    </label>\n\n                    <input type=\"radio\" name=\"corDoCartao" + numeroDoCartao + "\" value=\"#92C4EC\" id=\"corTarefa-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-radioTipo\">\n                    <label for=\"corTarefa-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #92C4EC;\" tabindex=\"0\">\n                        Tarefa\n                    </label>\n\n                <input type=\"radio\" name=\"corDoCartao" + numeroDoCartao + "\" value=\"#76EF40\" id=\"corInspira\xE7\xE3o-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-radioTipo\">\n                <label for=\"corInspira\xE7\xE3o-cartao" + numeroDoCartao + "\" class=\"opcoesDoCartao-tipo opcoesDoCartao-opcao\" style=\"color: #76EF40;\" tabindex=\"0\">\n                    Inspira\xE7\xE3o\n                </label>\n            </div>\n            <p class=\"cartao-conteudo\" contenteditable tabindex=\"0\">" + conteudoDoCartao + "</p>\n        </article>\n        ");

        // Navegação com focus via teclado nos cartões
        cartao.on("focusin", function () {
            cartao.addClass("cartao--focado");
        });
        cartao.on("focusout", function () {
            cartao.removeClass("cartao--focado");
        });

        // Funcionalidade muda cor dos cartões
        cartao.on("change", ".opcoesDoCartao-radioTipo", function mudaCor(event) {
            cartao.css("background-color", event.target.value);
        });

        cartao.on("keydown", function deixaClicarComEnter(event) {
            if (event.target.classList.contains("opcoesDoCartao-opcao") && (event.key === "Enter" || event.key === " ")) {
                event.target.click();
            }
        });

        //Funcionalidade remove cartão
        cartao.on('click', function (event) {
            var elementoSelecionado = event.target;
            if (elementoSelecionado.classList.contains('opcoesDoCartao-remove')) {
                cartao.addClass("cartao--some");
                cartao.on("transitionend", function () {
                    cartao.remove();
                });
            }
        });

        $(".mural").append(cartao);
    };

    $.ajax({
        url: "https://ceep.herokuapp.com/cartoes/carregar",
        method: "GET",
        data: { usuario: "artur.adam@caelum.com.br" },
        dataType: "jsonp",
        success: function success(objeto) {
            var cartoes = objeto.cartoes;
            cartoes.forEach(function (cartao) {
                adicionaCartaoNoMural(cartao);
            });
        }
    });
})();