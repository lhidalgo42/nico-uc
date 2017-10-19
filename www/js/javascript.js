
$(document).ready(function () {
    $("#content").addClass('animated').addClass('fadeIn');
    $("a").addClass('prevented');
    $("a").click(function (e) {
        if($(this).hasClass('prevented')){
            e.preventDefault();
        }
    });
    setTimeout(function () {
        $("a").removeClass("prevented");
        $("a:not(#back)").click(function (e) {
            e.preventDefault();
            var last = JSON.parse(window.sessionStorage.getItem('last'));
            last.push(window.location.pathname);
            console.log(last);
            window.sessionStorage.setItem('last', JSON.stringify(last));
            var go = $(this).attr('href');
            $("#content").removeClass('fadeIn').addClass('fadeOut');
            setTimeout(function () {
                window.location.href = go;
            },400);
        });
    },400);

    $("img").css('height', ($(window).height() - 10)).css('width', $(window).width());
    $("#back").click(function (e) {
        e.preventDefault();
        var last = JSON.parse(window.sessionStorage.getItem('last'));
        var go = last.pop();
        window.sessionStorage.setItem('last', JSON.stringify(last));
        $("#content").removeClass('fadeIn').addClass('fadeOut');
        setTimeout(function () {
            window.location.href = go;
        },400);

    });


});
var myScroll;
function loaded() {
    myScroll = new iScroll('content', {
        zoom: true,
        zoomMax: 4,
        onBeforeScrollStart:false
    });
}

document.addEventListener('DOMContentLoaded', loaded, false);
$(document).ready(function () {
    var selects = document.getElementsByTagName('select');
    for(var i=0;i<selects.length;i++) {
        selects[i].addEventListener('touchstart' /*'mousedown'*/, function (e) {
            e.stopPropagation();
        }, false);
    }
});