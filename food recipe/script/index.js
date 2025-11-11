// SCRIPT DO MENU RESPONSIVO

// Pega os elementos do DOM
const iconeMenu = document.getElementById("icone-menu");
const iconeFechar = document.getElementById("icone-fechar");
const menuPrincipal = document.getElementById("menu-principal");

// Abre o menu (ao clicar no ícone hambúrguer)
if (iconeMenu) {
  iconeMenu.addEventListener("click", () => {
    menuPrincipal.classList.add("ativo");   // Mostra o menu
    iconeMenu.style.display = "none";       // Esconde o ícone hambúrguer
    iconeFechar.style.display = "flex";     // Mostra o X
  });
}

// Fecha o menu (ao clicar no X)
if (iconeFechar) {
  iconeFechar.addEventListener("click", () => {
    menuPrincipal.classList.remove("ativo"); // Esconde o menu
    iconeFechar.style.display = "none";      // Esconde o X
    iconeMenu.style.display = "flex";        // Mostra o hambúrguer novamente
  });
}

// Fecha o menu automaticamente ao clicar em um link (no mobile)
const linksMenu = document.querySelectorAll("#menu-principal a");
linksMenu.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 1024) { // só fecha se estiver em tela pequena
      menuPrincipal.classList.remove("ativo");
      iconeFechar.style.display = "none";
      iconeMenu.style.display = "flex";
    }
  });
});
