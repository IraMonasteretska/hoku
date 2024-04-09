
$(document).ready(function () {
    // header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.header').addClass('scrollheader');
        } else {
            $('.header').removeClass('scrollheader');
        }
    });

    if ($(this).scrollTop() > 20) {
        $('.header').addClass('scrollheader');
    } else {
        $('.header').removeClass('scrollheader');
    }

    // scroll
    // $("header.header nav ul").on("click", "a", function (event) {
    //     event.preventDefault();
    //     var id = $(this).attr('href'),
    //         top = $(id).offset().top - 100;
    //     $('body,html').animate({ scrollTop: top }, 800);
    // });

    // $("footer ul").on("click", "a", function (event) {
    //     event.preventDefault();
    //     var id = $(this).attr('href'),
    //         top = $(id).offset().top - 100;
    //     $('body,html').animate({ scrollTop: top }, 800);
    // });


    $('.menubtn').click(function () {
        $('.header__menuwrap ul').toggleClass('showmenu');
    })

    $('.header.header nav ul li a').click(function(){
        $('.header__menuwrap ul').removeClass('showmenu');
    });

    // accordeon
    const accordeonFields = document.querySelectorAll('.accordeonfield');

    if (accordeonFields.length > 0) {
        accordeonFields[0].querySelector('.titlebox').classList.add('active');
        accordeonFields[0].querySelector('.descrbox').style.display = 'block';
    }

    $('.accordeonfield .titlebox').click(function () {
        $('.accordeonfield .titlebox').not($(this)).removeClass('active');
        $(this).toggleClass('active');
        $('.accordeonfield .descrbox').not($(this).next('.descrbox')).slideUp();
        $(this).next('.descrbox').slideToggle();
    });


    const accordeonImage = document.getElementById('accordeonImage');

    accordeonFields.forEach(function (accordeonField) {
        accordeonField.addEventListener('click', function () {
            const imgPath = this.getAttribute('data-img');

            accordeonImage.src = imgPath;
        });
    });

    // slider
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2.5,
        spaceBetween: 40,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            576: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1.4,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 1.8,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 2.1,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 2.5,
                spaceBetween: 40,
            },
        },
    });

    // slider space
    //   Space containers
    var windowWidth = $(document).width(),
        containerWidth = $('.container').width(),
        paddingContainer = ((windowWidth - containerWidth) / 2)
    $('.sliderwrapper').css('padding-left', paddingContainer);
    $('.swiper-button-next').css('right', paddingContainer)
    $('.swiper-button-prev').css('right', paddingContainer + 70)

    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)
        $('.sliderwrapper').css('padding-left', paddingContainer);
    });


    // to top
    $(".totop").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({ scrollTop: top }, 800);
    });










});

