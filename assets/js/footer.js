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
                        <p>We are the top architecture firm <br> to deliver best works. Innovative services <br> highly customized.
                        </p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5>Office</h5>
                        <p>Corporate Office- <br>
                            175 24th Street, OT- 35
                            London, <br> UK 265
                        </p>
                        <div class="company-email">
                            <p>Have a project in mind?</p>
                            <a href="#">info@Marvelith.com</a>
                        </div>
                        <div class="phone-number">
                            <p>Mon-Fri, 08.00 AM-09.00 PM</p>
                            <a href="#">+18-4675826</a>
                        </div>

                    </div>
                    <div class="col-lg-2 col-md-6 com-sm-12">
                        <h5>Links</h5>
                        <ul>
                            <li>
                                <a href="about.html">Company</a>
                                <a href="#">Careers</a>
                                <a href="#">Press Media</a>
                                <a href="services.html">Services</a>
                                <a href="project-standard.html">Projects</a>                                                    
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <h5>Follow Us</h5>
                        <ul>
                            <li>
                                <div class="social-area">
                                    <a href="#">Facebook</a>
                                    <a href="#">Instagram</a>                                    
                                    <a href="#">Medium</a>
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
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <p class="copyright-line">© 2025 Marvelith. All rights reserved.</p>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12 text-md-end">
                    <p class="privacy">Privacy Policy | Terms &amp; Conditions</p>
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

