$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.tabs').tabs({
        swipeable: true
    });
    $('.materialboxed').materialbox();
    $('.fixed-action-btn').floatingActionButton();
    $('.slider').slider({
        height: 720
    });
    $('.tooltipped').tooltip();

    var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });
});