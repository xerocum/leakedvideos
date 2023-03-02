
$(document).ready(function(){

	// after clicking on the theme button this function will switch between dark/bright themes
    $('.theme').on('click',function(){
        $('#theme').attr('href','./assets/css/'+( $(this).attr('data-id') !== 'dark' ? 'bright' : 'dark' ) + '.css');
        $(this).html('<i class="fa fa-'+( $(this).attr('data-id') !== 'dark' ? 'sun' : 'moon' )+'" aria-hidden="true"></i> &nbsp;Theme');
        $(this).attr('data-id', ( $(this).attr('data-id') === 'dark' ? 'bright' : 'dark' ) );
        sessionStorage.setItem("theme", ( $(this).attr('data-id') === 'dark' ? 'bright' : 'dark' ) );
    });

    // getting the theme dark/bright and assign it to session
    $('#theme').attr('href', './assets/css/'+ ( sessionStorage.getItem("theme") == null ? 'dark' : sessionStorage.getItem("theme") )  + '.css');
    $('.theme').html('<i class="fa fa-'+( sessionStorage.getItem("theme")  !== 'dark' ? 'sun' : 'moon' )+'" aria-hidden="true"></i> &nbsp;Theme');
});