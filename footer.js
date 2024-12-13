class FooterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <!-- HTML for Kamera Footer -->
<footer class="footer">
    <div class="footer-container">
        <!-- About Section -->
        <div class="footer-section about">
            <h2>Kamera</h2>
            <p>Your one-stop destination for carefully curated vintage cameras. Experience the charm of analog photography with our hand-picked collection.</p>
        </div>

        <!-- Quick Links Section -->
        <div class="footer-section links">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Shop</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="cart.html">Cart</a></li>
            </ul>
        </div>

        <!-- Contact Section -->
        <div class="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: <a href="mailto:kamera@auf.edu.ph">kamera@auf.edu.ph</a></p>
            <p>Phone: +123-456-7890</p>
            <p>Location: 295 Mcarthur Lane, Angeles City</p>
        </div>

        <!-- Social Media Section -->
        <div class="footer-section social">
            <h3>Follow Us</h3>
            <a href="#"><img src="facebook-icon.png" alt="Facebook"></a>
            <a href="#"><img src="instagram-icon.png" alt="Instagram"></a>
            <a href="#"><img src="twitter-icon.png" alt="Twitter"></a>
        </div>
    </div>

    <div class="footer-bottom">
        <p>&copy; 2024 Kamera. All rights reserved.</p>
    </div>
</footer>

      `;
    }
  }
  customElements.define('footer-component', FooterComponent);