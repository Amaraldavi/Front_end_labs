const display = document.querySelector("input[type='tel']");
const teclas = document.querySelectorAll("input[type='button']");
const botaoLimpar = document.querySelector(".icon");

teclas.forEach((tecla) => {
    tecla.addEventListener("click", () => {
        display.value += tecla.value;
    });
});

botaoLimpar.addEventListener("click", () => {
    display.value = "";
});
