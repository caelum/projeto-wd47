"use strict";

;(function () {
    var form = document.querySelector(".formNovoCartao");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var textarea = form.querySelector(".formNovoCartao-conteudo");
        var isTextAreaVazio = textarea.value.trim().length === 0;
        if (isTextAreaVazio) {
            var msgErro = document.createElement("div");
            msgErro.classList.add("formNovoCartao-msg");
            msgErro.textContent = "Formulário inválido. Não digite vários nada!";

            var btnSubmit = form.children[form.children.length - 1];
            form.addEventListener("animationend", function (event) {
                event.target.remove();
            });
            form.insertBefore(msgErro, btnSubmit);
        } else {
            adicionaCartaoNoMural({ conteudo: textarea.value });
        }
    });

    form.classList.remove("no-js");
})();