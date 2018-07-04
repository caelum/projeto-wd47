"use strict";

;(function () {
    var btnSync = $("#btnSync");
    btnSync.click(function () {
        btnSync.addClass("botaoSync--esperando");
        btnSync.removeClass("botaoSync--sincronizado");

        var salvadorDeCartoes = new XMLHttpRequest();
        salvadorDeCartoes.open('POST', 'https://ceep.herokuapp.com/cartoes/salvar');
        salvadorDeCartoes.setRequestHeader("Content-Type", "application/json");

        var cartoes = document.querySelectorAll(".cartao");
        var infosDoMural = {
            usuario: "artur.adam@caelum.com.br",
            cartoes: Array.from($(".cartao")).map(function (cartao) {
                return {
                    conteudo: cartao.querySelector(".cartao-conteudo").textContent,
                    cor: getComputedStyle(cartao).getPropertyValue("background-color")
                };
            })
        };

        salvadorDeCartoes.send(JSON.stringify(infosDoMural));

        salvadorDeCartoes.addEventListener("load", function () {
            btnSync.removeClass("botaoSync--esperando");
            btnSync.addClass("botaoSync--sincronizado");
        });

        salvadorDeCartoes.addEventListener("error", function () {
            btnSync.removeClass("botaoSync--esperando");
            btnSync.addClass("botaoSync--deuRuim");
        });
    });

    btnSync.removeClass('no-js');
})();