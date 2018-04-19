$(document).ready(function () {
    var last = JSON.parse(window.sessionStorage.getItem('last'));
    last.push(window.location.href);
    window.sessionStorage.setItem('last', JSON.stringify(last));

    $("#content").addClass('animated').addClass('fadeIn');
    $("a").addClass('prevented');
    $("a").click(function (e) {
        if ($(this).hasClass('prevented')) {
            e.preventDefault();
        }
    });
    setTimeout(function () {
        $("a").removeClass("prevented");
        $("a:not(#back)").click(function (e) {
            e.preventDefault();
            var go = $(this).attr('href');
            $("#content").removeClass('fadeIn').addClass('fadeOut');
            setTimeout(function () {
                window.location.href = go;
            }, 200);
        });
    }, 400);

    $("img").css('height', ($(window).height() - 10)).css('width', $(window).width());
    $("#back").click(function (e) {
        e.preventDefault();
        let last = JSON.parse(window.sessionStorage.getItem('last'));
        last.pop();
        last.pop();
        let go = last[last.length-1];
        $("#content").removeClass('fadeIn').addClass('fadeOut');
        setTimeout(function () {
            window.location.href = go;
        }, 200);

    });


});
var myScroll;

function loaded() {
    myScroll = new iScroll('content', {
        zoom: true,
        zoomMax: 4,
        onBeforeScrollStart: false
    });
}

document.addEventListener('DOMContentLoaded', loaded, false);
$(document).ready(function () {
    var selects = document.getElementsByTagName('select');
    for (var i = 0; i < selects.length; i++) {
        selects[i].addEventListener('touchstart' /*'mousedown'*/, function (e) {
            e.stopPropagation();
        }, false);
    }
});