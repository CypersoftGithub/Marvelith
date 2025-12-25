// Footer Component
function renderFooter() {
    const footerHTML = `
    <!-- Footer Area -->
    <footer class="footer-area">
        <div class="container">
            <div class="footer-up">
                <div class="row gy-5">
                    <div class="col-lg-4 col-md-6 col-sm-12">                        
                        <a href="index.html" class="logo"><img src="assets/img/logo/logo-white.png" alt=""></a>                                                                                                
                        <p>Marvelith Surfaces is a premium tiles brand delivering quality,
                            innovation, and elegant surface solutions for modern spaces.
                        </p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5>Address</h5>
                        <p>
                            Opp. Sipok Cera, <br>
                            Bela Rangpar, Morbi,<br>
                            Gujarat, India

                        </p>
                        <div class="company-email">
                            <h5>Email</h5>
                           <p> <a href="mailto:info@marvelithsurfaces.com">info@marvelithsurfaces.com</a></p>
                        </div>
                        <div class="phone-number">
                             <h5>Phone</h5>
                            <a href="tel:7575090963">+91 75750 90963</a>
                        </div>

                    </div>
                    <div class="col-lg-2 col-md-6 com-sm-12">
                        <h5>Links</h5>
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                                <a href="about.html">About</a>
                                <a href="export.html">Export</a>
                                <a href="contact.html">Contact Us</a>                                                    
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <h5>Follow Us</h5>
                        <ul>
                            <li>
                                <div class="social-area">
                                    <a href="https://www.facebook.com/share/17aEz8Feqo/">Facebook</a>
                                    <a href="https://www.instagram.com/marvelithsurfaces?igsh=MXA0bHNteGE0MDQxdQ==">Instagram</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </footer>

    <!-- Footer Bottom Area -->
    <div class="footer-bottom">
        <div class="container">
            <div class="row justify-content-center align-items-center justify-content-center">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <p class="copyright-line">© 2026 Marvelith. All rights reserved by <a target="_blank" href="https://www.cypersoft.com/">Cypersoft</a></p>
                </div>
            </div>
        </div>
    </div>
    `;

    // Find the footer container and insert the HTML
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
}

// Auto-render footer when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
} else {
    renderFooter();
}

