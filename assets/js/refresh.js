$(document).ready(function () {

    //Preloader
    $(window).on('load', function () { // makes sure the whole site is loaded
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({ 'overflow': 'visible' });
    })

    //Animate right hamburger icon and open sidebar
    // $('.menu-icon-trigger').click(function (e) {
    // $('.right-menu-icon-wrapper').click(function (e) {
    $('.right-menu-icon-wrapper').on("click", function (e) {
        e.preventDefault();
        $('.right-menu-icon-wrapper').toggleClass('open'); //new line
        var menu_id = $(this).attr('data-target');
        $(this).toggleClass('is-active');
        $("#" + menu_id).toggleClass('is-active');
        // $("#navbar-menu").toggleClass('is-active');
        $('.navbar.is-light').toggleClass('is-dark-mobile');
    });

    // Collapse-expand elements
    $('.collapsible').on("click", function(e){
        var elem_id = $(this).attr('data-target');
        $("#" + elem_id).slideToggle();
        $("i", this).toggleClass("fa-angle-down fa-angle-up");
    });

    

    //Toggle Tabs
    $('.tabs li').on("click", function(e){
        
        // $(".tabs a.has-background-white-ter").each(function(index, element){
        //     $(element).removeClass("has-background-white-ter");
        // });

        $(this).parent().children("li").each(function(index, element){
            $(element).removeClass("is-active")
            // $(element).removeClass("has-background-white-ter");
            var elem_id = $(element).attr('data-target');
            $("#" + elem_id).addClass("hide");
        });

        var elem_id = $(this).attr('data-target');
        $("#" + elem_id).removeClass("hide")
        $(this).addClass("is-active")
        // $(this).find("a").addClass("has-background-white-ter");
    });

    // change language
    // $( "#languageSelector" ).change(function() {
    //     window.location.href = $( "#languageSelector" ).val();
    // });
    

    //Mobile menu toggle
    // if ($('.navbar-burger').length) {
    //     $('.navbar-burger').on("click", function () {
    //         $('#right-menu-icon-wrapper').toggleClass('open'); //new line
    //         var menu_id = $(this).attr('data-target');
    //         $(this).toggleClass('is-active');
    //         $("#" + menu_id).toggleClass('is-active');
    //         $('.navbar.is-light').toggleClass('is-dark-mobile');
    //     });
    // }

    //Animate left hamburger icon and open sidebar
    // $('.menu-icon-trigger').click(function (e) {
    // $('.left-menu-icon-wrapper').click(function (e) {
    $('.left-menu-icon-wrapper').on("click", function (e) {
        e.preventDefault();
        // $('.menu-icon-wrapper').toggleClass('open');
        $('.left-menu-icon-wrapper').toggleClass('open');
        $('.sidebar').toggleClass('is-active');
    });

    //Close sidebar
    // $('.sidebar-close').click(function () {
    $('.sidebar-close').on("click", function () {
        $('.sidebar').removeClass('is-active');
        // $('.menu-icon-wrapper').removeClass('open');
        $('.left-menu-icon-wrapper').removeClass('open');
    })

    //Sidebar menu
    if ($('.sidebar').length) {
        $(".sidebar-menu > li.have-children a").on("click", function (i) {
            i.preventDefault();
            if (!$(this).parent().hasClass("active")) {
                $(".sidebar-menu li ul").slideUp();
                $(this).next().slideToggle();
                $(".sidebar-menu li").removeClass("active");
                $(this).parent().addClass("active");
            }
            else {
                $(this).next().slideToggle();
                $(".sidebar-menu li").removeClass("active");
            }
        });
    }

    //Navbar Clone
    if ($('#navbar-clone').length) {
        // $(window).scroll(function () {    // this will work when your window scrolled.
        $(window).on("scroll", function () {    // this will work when your window scrolled.
            var height = $(window).scrollTop();  //getting the scrolling height of window
            if (height > 50) {
                $("#navbar-clone").addClass('is-active');
            } else {
                $("#navbar-clone").removeClass('is-active');
            }
        });
    }

    //Init feather icons
    feather.replace();

    //reveal elements on scroll so animations trigger the right way
    var $window = $(window),
        win_height_padded = $window.height() * 1.1,
        isTouch = Modernizr.touchevents;

    $window.on('scroll', revealOnScroll);

    function revealOnScroll() {
        var scrolled = $window.scrollTop();
        $(".revealOnScroll:not(.animated)").each(function () {
            var $this = $(this),
                offsetTop = $this.offset().top;

            if (scrolled + win_height_padded > offsetTop) {
                if ($this.data('timeout')) {
                    window.setTimeout(function () {
                        $this.addClass('animated ' + $this.data('animation'));
                    }, parseInt($this.data('timeout'), 10));
                } else {
                    $this.addClass('animated ' + $this.data('animation'));
                }
            }
        });
    }

    // Back to Top button behaviour
    var pxShow = 600;
    var scrollSpeed = 500;
    // $(window).scroll(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= pxShow) {
            $("#backtotop").addClass('visible');
        } else {
            $("#backtotop").removeClass('visible');
        }
    });
    $('#backtotop a').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, scrollSpeed);
        return false;
    });

    //modals
    $('.modal-trigger').on('click', function(){
        var modalID = $(this).attr('data-modal');
        $('#' + modalID).addClass('is-active');
    })
    $('.modal-close, .close-modal').on('click', function(){
        $(this).closest('.modal').removeClass('is-active');
    })

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        // .click(function (event) {
        .on("click", function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    // event.preventDefault(); // removed to add history to the navigation
                    $('html, body').animate({
                        scrollTop: target.offset().top - ($('#navbar-clone').height() + 5)
                                  // '5' added as custom value
                    }, 550, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
})