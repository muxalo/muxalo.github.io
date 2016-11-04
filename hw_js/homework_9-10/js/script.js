$( function() {

    //  Main menu

    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );

    //  Style select

    $('select').styler();

} );
