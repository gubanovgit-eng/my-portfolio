const contactButton = document.querySelector("#contact-button");
const message = document.querySelector("#message");

contactButton.addEventListener("click", function () {
    message.textContent = "Отлично! JS работает 🚀";
});