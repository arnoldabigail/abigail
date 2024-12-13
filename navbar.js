class NavbarComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="nav">
        <img src="logo.png" alt="Logo" class="logo">
        <nav>
            <ul class="nav_links">
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="featured.html">Featured</a></li>
                <li><a href="deals.html">Deals</a></li>
                <li><a href="about.html">About</a></li>
            </ul>
        </nav>
        <a href="cart.html" class="cart"><img src="shopping-cart.png" id="carticon">Cart</a>
    </div>
      `;
    }
  }
  customElements.define('navbar-component', NavbarComponent);