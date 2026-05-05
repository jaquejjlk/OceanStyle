$(document).ready(function () {

    // MENU MOBILE
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn i').toggleClass('fa-x');
    });

    // NAV ACTIVE
    const sections = $('section');
    const navItems = $('#nav_list .nav-item');

    $(window).on('scroll', function () {
        const scroll = $(window).scrollTop();

        sections.each(function (i) {
            if (scroll >= $(this).offset().top - 100) {
                navItems.removeClass('active');
                $(navItems[i]).addClass('active');
            }
        });
    });

    // CONTADORES
    let likes = 0;
    let cart = 0;

    // CURTIR ❤️
    $('.collection-heart, .fashion-heart, .jewel-heart').click(function () {

        const icon = $(this).find('i');

        if (!icon.hasClass('liked')) {
            icon.addClass('liked');
            likes++;
        } else {
            icon.removeClass('liked');
            likes--;
        }

        $('#like_count').text(likes);
    });

    // CARRINHO 🛒
    $('.btn-default').click(function () {
        cart++;
        $('#cart_count').text(cart);
    });

});