$(document).ready(function() {



    //bannerSlider

    $("#bannerSlider").owlCarousel({

        navigation: false,

        slideSpeed: 300,

        paginationSpeed: 400,

        singleItem: true,

        autoPlay: 7000,

        addClassActive: true,

        transitionStyle: "fade"

        //transitionStyle: "fadeUp"

        //transitionStyle: "goDown"

        //transitionStyle: "backSlide"

    });

    /**
   * Animation on scroll function and init
   */
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', () => {
      aos_init();
    });

    //ourJourneySlider
    $("#ourJourneySlider").owlCarousel({ 
        autoPlay: 6500, //Set AutoPlay to 3 seconds         
        //items : 1,
        singleItem : true,
        autoHeight: true,
        addClassActive:true,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [991,1]
      });
  

    //servicesSlider

    $("#servicesSlider").owlCarousel({

        navigation: false,

        slideSpeed: 400,

        paginationSpeed: 350,

        singleItem: true,

        autoPlay: 7500,

        autoHeight: true,

        addClassActive: true,

        pagination: false,

        navigation: true,

        navigationText: [

            "<i class='fa fa-angle-left'></i>",

            "<i class='fa fa-angle-right'></i>"

        ]

        //transitionStyle: "fade"

        //transitionStyle: "fadeUp"

        //transitionStyle: "goDown"

        //transitionStyle: "backSlide"

    });



    //jquery transit options

    //$('.banner-slider-mask').transition({ scale: 4.5 }, 1000, 'ease');

    //parallax scrolling bg

    var $window = $(window); //You forgot this line in the above example



    $('section[data-type="background"]').each(function() {

        var $bgobj = $(this); // assigning the object

        $(window).scroll(function() {

            var yPos = -($window.scrollTop() / $bgobj.data('speed'));

            // Put together our final background position

            var coords = '100% ' + yPos + 'px';

            // Move the background

            $bgobj.css({
                backgroundPosition: coords

            });

        });

    });



    //positioned parallax element

    function parallax() {

        var scrolled = $(window).scrollTop();

        $('.parallax-shape1 img').css('top', -(scrolled * 0.55) + 'px');

    }

    $(window).scroll(function(e) {

        parallax();

    });






    //testimonial-slider

    $("#testimonial-slider").owlCarousel({
        navigation: true,
        autoPlay: 7000, //Set AutoPlay to 3 seconds         

        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 2],
        pagination: false,
        autoPlay: 7000,

        addClassActive: true,

        // transitionStyle: "fade"

        //transitionStyle: "fadeUp"

        //transitionStyle: "goDown"

        transitionStyle: "backSlide",
        navigationText: [

            "<i class='fa fa-angle-left'></i>",

            "<i class='fa fa-angle-right'></i>"

        ]


    });
    //bannerSlider

    $("#clientSliders").owlCarousel({
        navigation: false,
        autoPlay: 6000,
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 4],
        itemsMobile: [320, 3],
        pagination: false,
    });


    // key indicators
    $('.project-fig h3 span').counterUp({ delay: 100, time: 4000 });

    //target link slide on click

    $('.down-arrow-box > a').click(function() {

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top - 0

        }, 1000);

        return false;

    });



    //scrollUp

    $(window).scroll(function() {

        if ($(this).scrollTop() > 300) {

            $('.scrollup').fadeIn();

            $(".navigationBar").addClass("navigationBarScroll");

        } else {

            $('.scrollup').fadeOut();

            $(".navigationBar").removeClass("navigationBarScroll");

        }

    });



    $('.scrollup').click(function() {

        $("html, body").animate({ scrollTop: 0 }, 600);

        return false;

    });



    //Fancybox

    /*

     *  Simple image gallery. Uses default settings

     */



    $('.fancybox').fancybox();



    /*

     *  Different effects

     */



    // Change title type, overlay closing speed

    $(".fancybox-effects-a").fancybox({

        helpers: {

            title: {

                type: 'outside'

            },

            overlay: {

                speedOut: 0

            }

        }

    });



    // Disable opening and closing animations, change title type

    $(".fancybox-effects-b").fancybox({

        openEffect: 'none',

        closeEffect: 'none',

        helpers: {

            title: {

                type: 'over'

            }

        }

    });



    // Set custom style, close if clicked, change title type and overlay color

    $(".fancybox-effects-c").fancybox({

        wrapCSS: 'fancybox-custom',

        closeClick: true,

        openEffect: 'none',

        helpers: {

            title: {

                type: 'inside'

            },

            overlay: {

                css: {

                    'background': 'rgba(238,238,238,0.85)'

                }

            }

        }

    });



    // Remove padding, set opening and closing animations, close if clicked and disable overlay

    $(".fancybox-effects-d").fancybox({

        padding: 0,

        openEffect: 'elastic',

        openSpeed: 150,

        closeEffect: 'elastic',

        closeSpeed: 150,

        closeClick: true,

        helpers: {

            overlay: null

        }

    });



    /*

     *  Button helper. Disable animations, hide close button, change title type and content

     */



    $('.fancybox-buttons').fancybox({

        openEffect: 'none',

        closeEffect: 'none',

        prevEffect: 'none',

        nextEffect: 'none',

        closeBtn: false,

        helpers: {

            title: {

                type: 'inside'

            },

            buttons: {}

        },

        afterLoad: function() {

            this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');

        }

    });





    /*

     *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked

     */



    $('.fancybox-thumbs').fancybox({

        prevEffect: 'none',

        nextEffect: 'none',

        closeBtn: false,

        arrows: false,

        nextClick: true,

        helpers: {

            thumbs: {

                width: 50,

                height: 50

            }

        }

    });



    /*

     *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.

     */

    $('.fancybox-media')

    .attr('rel', 'media-gallery')

    .fancybox({

        openEffect: 'none',

        closeEffect: 'none',

        prevEffect: 'none',

        nextEffect: 'none',

        arrows: false,

        helpers: {

            media: {},

            buttons: {}

        }

    });



    /*

     *  Open manually

     */



    $("#fancybox-manual-a").click(function() {

        $.fancybox.open('1_b.jpg');

    });



    $("#fancybox-manual-b").click(function() {

        $.fancybox.open({

            href: 'iframe.html',

            type: 'iframe',

            padding: 5

        });

    });



    $("#fancybox-manual-c").click(function() {

        $.fancybox.open([

            {

                href: '1_b.jpg',

                title: 'My title'

            }, {

                href: '2_b.jpg',

                title: '2nd title'

            }, {

                href: '3_b.jpg'

            }

        ], {

            helpers: {

                thumbs: {

                    width: 75,

                    height: 50

                }

            }

        });

    });





});