document.addEventListener("DOMContentLoaded", function () {
  // Crear un enlace al archivo CSS
  const cssLink = document.createElement('link');
  cssLink.rel = 'stylesheet';
  cssLink.type = 'text/css';
  cssLink.href = 'Styles/header-footer.css';

  // Agregar el enlace CSS al head del documento
  document.head.appendChild(cssLink);

  // Generar el header
  function generateHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
      <nav class="navbar container">
        <picture>
          <a href="index.html">
            <img class="logoMenu" src="multimedia/branding/logo_light_horizontal.svg" alt="logo">
          </a>
        </picture>
        <ul class="navbar__menu">
          <li class="navbar__item with-submenu">
            <a class="navbar__link with-icon" href="shop.html">SHOP<iconify-icon icon="tabler:chevron-down"></iconify-icon></a>
            <ul class="submenu">
              <li class="submenu__item">
                <a href="#">Funkos</a>
              </li>
              <li class="submenu__item">
                <a href="#">Remeras</a>
              </li>
              <li class="submenu__item">
                <a href="#">Llaveros</a>
              </li>
            </ul>
          </li>
          <li><a class="navbar__link" href="#">CONTACTO</a>
          </li>
          <li><a class="navbar__link" href="admin/login.html">LOGIN</a>
          </li>
          <li class="carritoDibujo">
            <a class="menuHeader-link" href="cart.html">
              <img src="multimedia/icons/cart-icon.svg" alt="carrito">
            </a>
            <p id="cartBadge" class="noDisplay">0</p>
          </li>
        </ul>
      </nav>
    `;
    document.body.prepend(header);
  }

  // Generar el footer
  function generateFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
    <nav class="navbar container">
      <ul class="navbar__item"> 
        <li class="navbar__item"><a class="navbar__link" href="shop.html">SHOP</a></li>
        <li class="navbar__item"><a class="navbar__link" href="admin/login.html">INGRESAR</a></li>
        <li class="navbar__item"><a class="navbar__link" href="#">CONTACTO</a></li>
      </ul>
      <picture>
        <img src="multimedia/branding/isotype.svg" alt="Logo Funkoshop">
      </picture>
    </nav>
    <p class="footerCopy">All rights reserved 2023 - Funkoshop</p>
    `;
    document.body.appendChild(footer); // Cambia 'prepend' a 'appendChild' para ubicarlo al final del body
  }

  generateHeader();
  generateFooter();

  if (window.location.href.includes("cart.html")) {
    const cartBadge = document.getElementById('cartBadge');
    cartBadge.className = "cartBadge";
}
});