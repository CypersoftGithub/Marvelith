(function ($) {
  "use strict";

  // Header Sticky 

  var windowOn = $(window);

  windowOn.on("scroll", function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 200) {
      $("#header-sticky").removeClass("header-sticky");
    } else {
      $("#header-sticky").addClass("header-sticky");
    }
  });

  //Header Search Form

  if ($(".search-trigger").length) {
    $(".search-trigger").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search, .search-back-drop").on("click", function () {
      $("body").removeClass("search-active");
    });
  }

  // Offcanvas menu

  $(".menu-trigger").on("click", function () {
    $(".extra-info,.offcanvas-overlay").addClass("active");
    return false;
  });
  $(".menu-close,.offcanvas-overlay").on("click", function () {
    $(".extra-info,.offcanvas-overlay").removeClass("active");
  });

  // data-backround

  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  // magnific popup

  $(".video-play-btn").magnificPopup({
    type: "iframe",
  });

  // Metis Menu

  $("#mobile-menu").metisMenu();

  $("#hamburger").on("click", function () {
    $(".mobile-nav").addClass("show");
    $(".overlay").addClass("active");
  });

  $(".close-nav").on("click", function () {
    $(".mobile-nav").removeClass("show");
    $(".overlay").removeClass("active");
  });

  $(".overlay").on("click", function () {
    $(".mobile-nav").removeClass("show");
    $(".overlay").removeClass("active");
  });

  // Hero Area Slider

  $(".homepage-slides").owlCarousel({
    items: 1,
    dots: true,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateIn: "fadeIn",
    smartSpeed: 2000,
    slideSpeed: 600,
    
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 1,
        nav: false,
        dots: false,
      },
      768: {
        items: 1,
      },
      1100: {
        items: 1,
      },
    },
  });

// Testimonial One

    $(".testimonial-wrapper").owlCarousel({
      items: 1,
      dots: false,
      nav: true,
      loop: true,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 3000,
      slideSpeed: 300,
      margin: 30,
      navText: [
        "<i class='las la-arrow-left'></i>",
        "<i class='las la-arrow-right'></i>",
      ],
    });

  // Service Slider

    $(".service-slider").owlCarousel({
      items: 1,
      dots: true,
      nav: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 3000,
      slideSpeed: 300,
      margin: 30,
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false,
        },
        600: {
          items: 1,
          nav: false,
          dots: false,
        },
        768: {
          items: 2,
          nav: false,
          dots: false,
        },
        1100: {
          items: 3,
          nav: false,
          dots: true,
        },
      },
      navText: [
        "<i class='las la-arrow-left'></i>",
        "<i class='las la-arrow-right'></i>",
      ],
    });

  // Testimonial Two

    $(".testimonial-carousel").owlCarousel({
      items: 1,
      dots: false,
      nav: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 3000,
      slideSpeed: 300,
      margin: 30,
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: false,
        },
        600: {
          items: 1,
          nav: false,
          dots: false,
        },
        768: {
          items: 2,
          nav: false,
          dots: false,
        },
        1100: {
          items: 3,
          nav: false,
          dots: true,
        },
      },
      navText: [
        "<i class='las la-arrow-left'></i>",
        "<i class='las la-arrow-right'></i>",
      ],
    });

  // Process Slider

  $(".process-wrapper").owlCarousel({
    items: 1,
    margin: 30,
    dots: true,
    nav: false,
    loop: true,
    autoplay: false,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },

      575: {
        items: 2,        
        dots: false,
      },

      767: {
        items: 2,        
        dots: true,
      },

      990: {
        items: 3,
        dots: false,        
      },
      1200: {
        items: 3,
        dots: true,        
      },
    },
  });


  // Project Slider

  $(".project-slider").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    autoplay: false,    
    margin:20,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 2,
        nav: false,
        dots: false,
      },
      768: {
        items: 3,
        nav: true,
        dots: false,
      },
      1100: {
        items: 4,
        nav: true,
        dots: false,
      },
    },
  });

    $(".project-slider-2").owlCarousel({
    items: 1,
    dots: false,
    nav: true,
    loop: true,
    autoplay: false,    
    margin:15,
    navText: [
      "<i class='las la-arrow-left'></i>",
      "<i class='las la-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      600: {
        items: 1,
        nav: false,
        dots: false,
      },
      768: {
        items: 2,
        nav: true,
        dots: false,
      },
      1100: {
        items: 2,
        nav: true,
        dots: false,
      },
    },
  });


  // Feature Slider

  $(".feature_item_one").slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
});


  //Progress Bar JS

  $("#bar1").barfiller({
    barColor: "#171717",
    duration: 5000,
  });

  $("#bar2").barfiller({
    barColor: "#171717",
    duration: 5000,
  });

  $("#bar3").barfiller({
    barColor: "#171717",
    duration: 5000,
  });

  //jQuery Animation
  new WOW().init();

  // Nice select
  $("select").niceSelect();

  // Pure Counter

	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});

  // Active Class

  $(".main-menu ul > li > ul li a").on("mouseover", function () {
    $(".main-menu ul > li > ul li a").removeClass("active");
    $(this).addClass("active");
  });

  // Odometer js

  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });


  // Masonry Filter

  $(window).on("load", function () {
    var e = $(".project-filter"),
      a = $("#menu-filter");
    e.isotope({
      filter: "*",
      layoutMode: "masonry",
      animationOptions: {
        duration: 750,
        easing: "linear",
      },
    }),
      a.find("a").on("click", function () {
        var o = $(this).attr("data-filter");
        return (
          a.find("a").removeClass("active"),
          $(this).addClass("active"),
          e.isotope({
            filter: o,
            animationOptions: {
              animationDuration: 750,
              easing: "linear",
              queue: !1,
            },
          }),
          !1
        );
      });
  });


  // Contact Form

  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    var $action = $(this).prop("action");
    var $data = $(this).serialize();
    var $this = $(this);

    $this.prevAll(".alert").remove();

    $.post(
      $action,
      $data,
      function (data) {
        if (data.response === "error") {
          $this.before(
            '<div class="alert alert-danger">' + data.message + "</div>"
          );
        }

        if (data.response === "success") {
          $this.before(
            '<div class="alert alert-success">' + data.message + "</div>"
          );
          $this.find("input, textarea").val("");
        }
      },
      "json"
    );
  });

  //Hide Loading Box (Preloader)
  function handlePreloader() {
    if ($("#loader").length) {
      $("#loader").delay(200).fadeOut(500);
    }
  }

  $(window).on("load", function () {
    handlePreloader();
  });


    // Visible From Right Slowly Animation
    
		let visibleSlowlyRight = document.querySelectorAll(".visible-slowly-right");
		if ($(visibleSlowlyRight).length > 0) {
			let char_come = gsap.utils.toArray(visibleSlowlyRight);
			char_come.forEach((char_come) => {
				let split_char = new SplitText(char_come, {
					type: "chars, words",
					lineThreshold: 0.5,
				});
				const tl2 = gsap.timeline({
					scrollTrigger: {
						trigger: char_come,
						start: "top 90%",
						end: "bottom 60%",
						scrub: false,
						markers: false,
						toggleActions: "play none none none",
					},
				});
				tl2.from(split_char.chars, {
					duration: 0.8,
					x: 70,
					autoAlpha: 0,
					stagger: 0.03,
				});
			});
		}

  // Mouse Custom Cursor
  function itCursor() {
    var myCursor = jQuery(".mouseCursor");
    if (myCursor.length) {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
            ($(this).is("a", "button") &&
              $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  }
  itCursor();

  // Tiles Calculator
  if ($("#calculateBtn").length) {
    // Tile size configurations (in mm)
    const tileSizes = {
      "250x375": { width: 250, height: 375, tilesPerBox: 10 },
      "300x300": { width: 300, height: 300, tilesPerBox: 11 },
      "300x600": { width: 300, height: 600, tilesPerBox: 5 },
      "400x400": { width: 400, height: 400, tilesPerBox: 6 },
      "450x450": { width: 450, height: 450, tilesPerBox: 5 },
      "600x600": { width: 600, height: 600, tilesPerBox: 4 },
      "300x450": { width: 300, height: 450, tilesPerBox: 7 },
      "400x800": { width: 400, height: 800, tilesPerBox: 3 }
    };

    // Conversion constants
    const FEET_TO_METER = 0.3048;
    const METER_TO_FEET = 3.28084;

    // Function to calculate tiles
    function calculateTiles() {
      const length = parseFloat($("#length").val());
      const width = parseFloat($("#width").val());
      const tileSizeKey = $("#tileSize").val();

      // Reset results if inputs are invalid
      if (!length || !width || length <= 0 || width <= 0) {
        $("#sqMeter").val("");
        $("#sqFeet").val("");
        $("#totalTiles").val("");
        $("#totalBoxes").val("");
        $("#diagramGrid").html("");
        return;
      }

      // Calculate area in square feet
      const areaSqFt = length * width;

      // Convert to square meters
      const lengthMeter = length * FEET_TO_METER;
      const widthMeter = width * FEET_TO_METER;
      const areaSqM = lengthMeter * widthMeter;

      // Get tile dimensions
      const tileSize = tileSizes[tileSizeKey];
      const tileWidthMeter = tileSize.width / 1000; // Convert mm to meter
      const tileHeightMeter = tileSize.height / 1000;

      // Calculate number of tiles needed (with 10% wastage)
      const tileAreaSqM = tileWidthMeter * tileHeightMeter;
      const tilesNeeded = Math.ceil((areaSqM / tileAreaSqM) * 1.1); // 10% wastage

      // Calculate boxes needed
      const boxesNeeded = Math.ceil(tilesNeeded / tileSize.tilesPerBox);

      // Display results
      $("#sqMeter").val(areaSqM.toFixed(2));
      $("#sqFeet").val(areaSqFt.toFixed(2));
      $("#totalTiles").val(tilesNeeded);
      $("#totalBoxes").val(boxesNeeded);

      // Update diagram
      updateDiagram(length, width, tileSize);
    }

    // Function to update diagram
    function updateDiagram(length, width, tileSize) {
      const grid = $("#diagramGrid");
      grid.html("");

      // Calculate approximate grid dimensions
      const tileWidthFt = (tileSize.width / 1000) * METER_TO_FEET;
      const tileHeightFt = (tileSize.height / 1000) * METER_TO_FEET;

      // Calculate number of tiles that fit
      const tilesPerRow = Math.floor(length / tileWidthFt);
      const tilesPerCol = Math.floor(width / tileHeightFt);

      // Limit grid size for display (max 8 columns, 3 rows)
      const displayCols = Math.min(tilesPerRow, 8);
      const displayRows = Math.min(tilesPerCol, 3);

      // Set grid template
      grid.css({
        "grid-template-columns": `repeat(${displayCols}, 1fr)`,
        "grid-template-rows": `repeat(${displayRows}, 1fr)`,
        "width": "100%",
        "max-width": "400px",
        "margin": "0 auto"
      });

      // Create tiles
      const totalTiles = displayCols * displayRows;
      for (let i = 0; i < totalTiles; i++) {
        const tile = $("<div>").addClass("diagram-tile");
        grid.append(tile);
      }

      // Update labels
      $(".diagram-label-top").text(length.toFixed(1) + " FT");
      $(".diagram-label-left").text(width.toFixed(1) + " FT");
    }

    // Event listeners
    $("#calculateBtn").on("click", function() {
      calculateTiles();
    });

    // Calculate on Enter key press
    $("#length, #width").on("keypress", function(e) {
      if (e.which === 13) {
        calculateTiles();
      }
    });

    // Update diagram when tile size changes
    $("#tileSize").on("change", function() {
      const length = parseFloat($("#length").val());
      const width = parseFloat($("#width").val());
      if (length && width) {
        const tileSizeKey = $("#tileSize").val();
        const tileSize = tileSizes[tileSizeKey];
        updateDiagram(length, width, tileSize);
      }
    });
  }
})(window.jQuery);

(function($){
    const exportFlags = [
        "zw","zm","za","yt","ye","xk","ws","wf","vu","vn","vi","vg","ve","vc","va","uz","uy","us","ug","um","ua","tz","tw","tv","tt","tr","to","tn","tm","tl","tk","tj","th","tg","tf","td","tc","sz","sy","sx","sv","st","ss","sr","so","sn","sm","sl","sk","sj","sh","si","sg","se","sd","sc","sb","sa","rw","ru","rs","ro","re","qa","py","pw","pt","ps","pr","pn","pm","pl","pk","ph","pg","pf","pe","pa","om","nz","nu","nr","np","no","nl","ni","ng","nf","ne","nc","na","mz","my","mx","mw","mv","mu","ms","mt","mr"
    ];

    const $slider = $(".export-flag-slider");
    if ($slider.length) {
        const slides = exportFlags.map(code => `
            <div class="single-export-flag text-center">
                <div class="export-flag-thumb">
                    <img src="assets/img/export/svg/${code}.svg" alt="${code.toUpperCase()} flag">
                </div>
                <p class="export-flag-label">${code.toUpperCase()}</p>
            </div>
        `);

        $slider.append(slides.join(""));

        $slider.owlCarousel({
            items: 4,
            margin: 16,
            dots: false,
            nav: false,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            loop: true,
            responsive: {
                0: { items: 2 },
                576: { items: 3 },
                992: { items: 5 },
                1200: { items: 6 }
            }
        });
    }
})(jQuery);