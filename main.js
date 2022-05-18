$(document).ready(function(){
    $('.right-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.fa-angle-right').toggleClass('rotate');
    });
});

$(document).ready(function () {
    $('.menu-btn i').click(function () {
        $('.side-bar').toggleClass('active');
        // $(this).toggleClass('active-menubtn');
        $('.menu-btn i').toggleClass('active-menubtn');
        $('body').toggleClass('active-body')
        });
})

$(document).ready(function () {
    $('.userprofile').click(function () {
        $('.usericon').slideToggle();
    })
})