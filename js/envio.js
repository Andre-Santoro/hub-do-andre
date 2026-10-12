
const PUBLIC_KEY = "Wrb5O8Ag6IWV9JFBx";
const SERVICE_ID = "service_gsj04hl";
const TEMPLATE_ID = "template_kvd0u6h";

emailjs.init(PUBLIC_KEY);

const form = document.querySelector("#contact-form");
const mensagem = document.querySelector("#form-status");
const button = document.querySelector("#submit-btn");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const recaptchaResponse = grecaptcha.getResponse();

    if (!recaptchaResponse) {
        mensagem.textContent = "Por favor, confirme que você não é um robô.";
        mensagem.style.color = "red";
        return;
    }

  button.disabled = true;
  button.textContent = "Enviando...";
  mensagem.textContent = "";

  try {
    await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      form
    );

    mensagem.textContent = "Mensagem enviada com sucesso!";
    form.reset();

  } catch (error) {
    console.error("Erro ao enviar:", error);
    mensagem.textContent =
      "Não foi possível enviar. Tente novamente.";

  } finally {
    button.disabled = false;
    button.textContent = "Enviar mensagem";
  }
});

