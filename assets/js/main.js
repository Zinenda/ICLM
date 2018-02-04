$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.tabs').tabs({
        swipeable: true
    });
    $('.materialboxed').materialbox();
    $('.fixed-action-btn').floatingActionButton();
    $('.slider').slider({
        height: 600
    });
    // Pause slider
    $('.slider').slider('pause');
    // Start slider
    $('.slider').slider('start');
    // Next slide
    $('.slider').slider('next');
    // Previous slide
    $('.slider').slider('prev');
    $('.tooltipped').tooltip();

    var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });
});