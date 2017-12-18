$(document).ready(function () {
    //Materialize
    $('.modal').modal();
    $('.button-collapse').sideNav({
        menuWidth: 300
    }
    );
    $('.tooltipped').tooltip({ delay: 50 });
    $('.slider').slider();
    $('.carousel').carousel();
    $('.materialboxed').materialbox();
    $('select').material_select();
    //Filtr
    $(function () {
        $('.filtr-container').filterizr();
    });
});
function CerrarSideNav() {
    $('button-collapse').sideNav('hide');
};     
