document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contato-form");
    const mensagem = document.getElementById("mensagem-confirmacao");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // impede envio real
  
      // reseta o formulário
      form.reset();
  
      // exibe a mensagem
      mensagem.classList.add("visivel");
  
      // oculta depois de alguns segundos (opcional)
      setTimeout(() => {
        mensagem.classList.remove("visivel");
      }, 5000);
    });
  });