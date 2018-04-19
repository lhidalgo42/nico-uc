document.addEventListener('DOMContentLoaded', loaded, false);
let myScroll;


function loaded() {
    myScroll = new iScroll('content', {
        zoom: true,
        zoomMax: 4,
        onBeforeScrollStart: false
    });
}
$(document).ready(function () {
    let selects = document.getElementsByTagName('select');
    for (let i = 0; i < selects.length; i++) {
        selects[i].addEventListener('touchstart' /*'mousedown'*/, function (e) {
            e.stopPropagation();
        }, false);
    }

    let last = JSON.parse(window.sessionStorage.getItem('last'));
    last.push(window.location.pathname);
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
        let go = last.pop();
        window.sessionStorage.setItem('last', JSON.stringify(last));

        $("#content").removeClass('fadeIn').addClass('fadeOut');
        setTimeout(function () {
            window.location.href = go;
        }, 200);
    });


});
