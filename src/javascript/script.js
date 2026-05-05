$(document).ready(function() {

    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItemsDesktop = $('#nav_list .nav-item');
    const navItemsMobile = $('#mobile_nav_list .nav-item');

    $(window).on('scroll', function () {

        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        sections.each(function(i) {
            const sectionTop = $(this).offset().top - header.outerHeight();
            const sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        // remove de todos
        navItemsDesktop.removeClass('active');
        navItemsMobile.removeClass('active');

        // adiciona nos dois menus
        $(navItemsDesktop[activeSectionIndex]).addClass('active');
        $(navItemsMobile[activeSectionIndex]).addClass('active');
    });
});