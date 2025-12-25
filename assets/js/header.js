// Header Component
function renderHeader() {
    const headerHTML = `
    <!-- Header Area  -->
    <div class="header-area absolute-header">
        <div id="header-sticky">
            <div class="navigation">
                <div class="container">
                    <div class="row align-items-center">                        
                        <div class="col-xl-4 col-lg-3 col-6">        
                            <div class="logo">                                
                                <a href="index.html" class="logo"><img src="assets/img/logo/logo-white.png" alt=""></a>                                                                                           
                            </div>
                            
                        </div>
                        <div class="col-xl-7 col-lg-6 d-none d-lg-block text-lg-end">
                            <div class="main-menu">
                               <ul class="navigation clearfix">
    <li><a class="navlink" href="index.html">Home</a></li>
    <li><a class="navlink" href="about.html">About</a></li>

    <li class="dropdown"><a class="navlink" href="#">Product</a>
        <ul class="sub-menu">

            <li class="dropdown"><a href="#">Porcelain Tiles</a>
                <ul class="sub-menu">
                <li><a href="products-600x600.html">600x600</a></li>
                <li><a href="products-600x1200.html">600x1200</a></li>
                <li><a href="products-800x1600.html">800x1600</a></li>
                </ul>
            </li>

            <li class="dropdown"><a href="#">Porcelain Slabs</a>
                <ul class="sub-menu">
                    <li><a href="products-800x2400.html">800x2400</a></li>
                    <li><a href="products-800x3000.html">800x3000</a></li>
                    <li><a href="products-800x3200.html">800x3200</a></li>
                    <li><a href="products-1200x1800.html">1200x1800</a></li>
                    <li><a href="products-1200x2400.html">1200x2400</a></li>
                    <li><a href="products-1200x2800.html">1200x2800</a></li>
                    <li><a href="products-1600x3200.html">1600x3200</a></li>
                </ul>
            </li>

        </ul>
    </li>

    <li class="dropdown"><a class="navlink" href="#">Utilities</a>
        <ul class="sub-menu">
            <li><a href="Tiles-calculate.html">Tiles Calculate</a></li>
            <li><a href="PackingDetails.html">Packing Details</a></li>
            <li><a href="Technical-Specifications.html">Technical Specifications</a></li>
        </ul>
    </li>

    <li><a class="navlink" href="Export.html">Export</a></li>
    <li><a class="navlink" href="contact.html">Contact</a></li>
</ul>

                            </div>
                        </div>
                        <div class="col-xl-1 col-lg-1 d-none d-lg-inline-block">
                            <div class="header-right">
                                <!-- Header Button -->
                                <div class="header-btn">
                                    <div class="menu-trigger">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
    
                            </div>
                        </div>                        
                        <!-- Mobile Menu -->
                        <div class="mobile-nav-bar col-6 d-block d-lg-none">
                            <div class="mobile-nav-wrap">
                                <div id="hamburger">
                                    <i class="las la-bars"></i>
                                </div>
                                <!-- mobile menu - responsive menu  -->
                                <div class="mobile-nav">
                                    <button type="button" class="close-nav">
                                        <i class="las la-times-circle"></i>
                                    </button>
                                    <nav class="sidebar-nav">
                                        <ul class="metismenu" id="mobile-menu">
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a class="has-arrow" href="#">Product</a>
                                                <ul class="sub-menu">
                                                    <li><a class="has-arrow" href="#">Porcelain Tiles</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="products-600x600.html">600x600</a></li>
                                                            <li><a href="products-600x1200.html">600x1200</a></li>
                                                            <li><a href="products-800x1600.html">800x1600</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a class="has-arrow" href="#">Porcelain Slabs</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="products-800x2400.html">800x2400</a></li>
                                                            <li><a href="products-800x3000.html">800x3000</a></li>
                                                            <li><a href="products-800x3200.html">800x3200</a></li>
                                                            <li><a href="products-1200x1800.html">1200x1800</a></li>
                                                            <li><a href="products-1200x2400.html">1200x2400</a></li>
                                                            <li><a href="products-1200x2800.html">1200x2800</a></li>
                                                            <li><a href="products-1600x3200.html">1600x3200</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a class="has-arrow" href="#">Utilities</a>
                                                <ul class="sub-menu">
                                                    <li><a href="Tiles-calculate.html">Tiles Calculate</a></li>
                                                    <li><a href="Packing-Details.html">Packing Details</a></li>
                                                    <li><a href="Technical-Specifications.html">Technical Specifications</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="Export.html">Export</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                    <div class="action-bar">
                                        <a href="mailto:info@marvelithsurfaces.com"><i class="las la-envelope"></i>info@marvelithsurfaces.com</a>
                                        <a href="tel:7575090963"><i class="fal fa-phone"></i>+91 7575090963</a>
                                        <a href="contact.html" class="theme-btn">Contact Us</a>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Off-canvas Area-->
    <div class="extra-info">
        <div class="close-icon menu-close">
            <button>
                <i class="las la-times"></i>
            </button>
        </div>
        <div class="logo-side">
            <div class="logo">
                <a href="index.html" class="logo"><img src="assets/img/logo/logo-white.png" alt=""></a>                                                
            </div>
        </div>
        <div class="side-info">
            <div class="contact-list mb-40">                
                <p>Welcome to Marvelith Surfaces, a leading manufacturer and global exporter of premium ceramic and porcelain tiles.</p>

                <img src="assets/img/offcanvas-img.jpg" alt="">

                <div class="mt-30 mb-30">
                    <a href="contact.html" class="white-btn">Get In Touch</a>
                </div>
            </div>
            <div class="social-area-wrap">
                <a href="https://www.facebook.com/share/17aEz8Feqo/"><i class="lab la-facebook-f"></i></a>                                    
                <a href="https://www.instagram.com/marvelithsurfaces?igsh=MXA0bHNteGE0MDQxdQ=="><i class="lab la-instagram"></i></a>
            </div>
        </div>
    </div>

    <div class="offcanvas-overlay"></div>
    `;

    // Find the header container and insert the HTML
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;

        // Apply dark theme styles if body has dark class
        if (document.body.classList.contains('dark')) {
            const navigation = headerContainer.querySelector('.navigation');
            const container = headerContainer.querySelector('.container');
            const headerArea = headerContainer.querySelector('.header-area');

            // Initially transparent for absolute-header
            if (headerArea && headerArea.classList.contains('absolute-header')) {
                if (navigation) {
                    navigation.style.backgroundColor = 'transparent';
                }
                if (container) {
                    container.style.backgroundColor = 'transparent';
                }
                if (headerArea) {
                    headerArea.style.backgroundColor = 'transparent';
                }
            } else {
                // Solid header
                if (navigation) {
                    navigation.style.backgroundColor = '#000';
                }
                if (container) {
                    container.style.backgroundColor = '#000';
                }
                if (headerArea) {
                    headerArea.style.backgroundColor = '#000';
                }
            }

            // Apply menu item colors for dark theme
            const menuLinks = headerContainer.querySelectorAll('.main-menu ul > li > a.navlink');
            menuLinks.forEach(link => {
                link.style.color = '#fff';
            });

            // If absolute-header (transparent), ensure all text is white
            if (headerArea && headerArea.classList.contains('absolute-header')) {
                const allHeaderLinks = headerContainer.querySelectorAll('.main-menu ul > li > a');
                allHeaderLinks.forEach(link => {
                    link.style.color = '#fff';
                });

                const logo = headerContainer.querySelector('.logo img');
                if (logo) {
                    // Logo should be white version for transparent header
                    logo.src = logo.src.replace('logo-white', 'logo-white') || 'assets/img/logo/logo-white.png';
                }
            }

            // Apply submenu item colors
            const submenuLinks = headerContainer.querySelectorAll('.main-menu ul > li > ul li a');
            submenuLinks.forEach(link => {
                link.style.color = '#868686';
            });

            // Ensure menu trigger lines are white
            const menuTriggerSpans = headerContainer.querySelectorAll('.menu-trigger span');
            menuTriggerSpans.forEach(span => {
                span.style.backgroundColor = '#fff';
            });
        }

        // Dispatch custom event to notify that header is rendered
        if (typeof window.CustomEvent !== 'undefined') {
            window.dispatchEvent(new CustomEvent('headerRendered'));
        }

        // Don't initialize here - let the timeout handle it to ensure all scripts are loaded
    }
}

// Flag to prevent double initialization
let headerInitialized = false;

// Function to initialize header-related animations and interactions
function initializeHeaderFunctions() {
    // Prevent double initialization
    if (headerInitialized) {
        return;
    }

    // Wait for jQuery to be available
    if (typeof jQuery === 'undefined') {
        // Retry after a short delay if jQuery isn't loaded yet
        setTimeout(initializeHeaderFunctions, 100);
        return;
    }

    var $ = jQuery;

    // Check if header elements exist
    if (!$("#header-sticky").length) {
        // Header not rendered yet, retry
        setTimeout(initializeHeaderFunctions, 100);
        return;
    }

    // Re-initialize Metis Menu for mobile menu
    if ($("#mobile-menu").length && typeof $.fn.metisMenu !== 'undefined') {
        try {
            $("#mobile-menu").metisMenu();
        } catch (e) {
            console.log('MetisMenu initialization:', e);
        }
    }

    // Re-initialize mobile menu handlers (remove existing handlers first)
    $("#hamburger").off('click.headerInit').on("click.headerInit", function () {
        $(".mobile-nav").addClass("show");
        $(".overlay").addClass("active");
    });

    $(".close-nav").off('click.headerInit').on("click.headerInit", function () {
        $(".mobile-nav").removeClass("show");
        $(".overlay").removeClass("active");
    });

    $(".overlay").off('click.headerInit').on("click.headerInit", function () {
        $(".mobile-nav").removeClass("show");
        $(".overlay").removeClass("active");
    });

    // Re-initialize offcanvas menu
    $(".menu-trigger").off('click.headerInit').on("click.headerInit", function () {
        $(".extra-info,.offcanvas-overlay").addClass("active");
        return false;
    });

    $(".menu-close,.offcanvas-overlay").off('click.headerInit').on("click.headerInit", function () {
        $(".extra-info,.offcanvas-overlay").removeClass("active");
    });

    // Re-initialize active class for submenu
    $(".main-menu ul > li > ul li a").off('mouseover.headerInit').on("mouseover.headerInit", function () {
        $(".main-menu ul > li > ul li a").removeClass("active");
        $(this).addClass("active");
    });

    // Header scroll functionality - make transparent initially, solid after scroll
    var windowOn = $(window);
    var headerSticky = $("#header-sticky");
    var headerArea = $(".header-area");

    function handleHeaderScroll() {
        var scroll = windowOn.scrollTop();
        if (scroll < 100) {
            // At top - keep transparent
            headerSticky.removeClass("header-sticky");
            headerArea.addClass("absolute-header");
        } else {
            // Scrolled - make solid
            headerSticky.addClass("header-sticky");
            headerArea.removeClass("absolute-header");
        }
    }

    // Initial check
    handleHeaderScroll();

    // On scroll
    windowOn.off('scroll.headerScroll').on("scroll.headerScroll", handleHeaderScroll);

    headerInitialized = true;
}

// Function to render header when ready
function renderHeaderWhenReady() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        renderHeader();
        return true;
    }
    return false;
}

// Try to render immediately if container exists
if (!renderHeaderWhenReady()) {
    // If container doesn't exist yet, wait for DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            renderHeaderWhenReady();
            // Initialize after a short delay to ensure all scripts are loaded
            setTimeout(initializeHeaderFunctions, 300);
        });
    } else {
        // DOM already loaded, try again
        setTimeout(function () {
            if (renderHeaderWhenReady()) {
                setTimeout(initializeHeaderFunctions, 300);
            }
        }, 50);
    }
} else {
    // Header rendered immediately, initialize after scripts load
    setTimeout(initializeHeaderFunctions, 300);
}

// Also re-initialize after window load to ensure everything is ready
window.addEventListener('load', function () {
    setTimeout(initializeHeaderFunctions, 100);
});

