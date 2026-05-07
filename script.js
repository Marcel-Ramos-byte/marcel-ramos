//execução do bloco
(() => {
  //busca de elementos no html
  const toggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav.nav-menu');
  const navLinks = navMenu ? navMenu.querySelectorAll('a') : [];
  //fecha menu
  const closeMenu = () => {
    if (!navMenu || !toggle) {
      return;
    }
    navMenu.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  };
  //abre/fecha menu
  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
          closeMenu();
        }
      });
    });

    document.addEventListener('click', (event) => {
      if (!navMenu.contains(event.target) && !toggle.contains(event.target)) {
        closeMenu();
      }
    });
  }
})();

//função de validação do formulario
const formulario = document.getElementById("form-contato");
const statusMensagem = document.getElementById("mensagem-status");
if (formulario && statusMensagem){
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    if (!nome || !email || !mensagem) {
      mostraMensagem("Preencha nome, e-mail e mensagem antes de enviar.", "erro");
      return;
    }
    if (!emailValido(email)){
      mostraMensagem("Informe um e-mail no formato usuario@dominio.com", "erro");
      return;
    }
    mostraMensagem("Mensagem enviada com sucesso!", "sucesso");
    formulario.reset()
  });
}
function emailValido(email){
  const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return padrao.test(email);
}
function mostraMensagem(texto, tipo) {
  statusMensagem.textContent = texto;
  statusMensagem.className = tipo;
}