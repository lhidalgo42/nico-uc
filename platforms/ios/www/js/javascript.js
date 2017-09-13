
$(document).ready(function () {
    $("img").css('height', ($(window).height() - 10)).css('width', $(window).width());
    $("#back").click(function (e) {
        e.preventDefault();
        var last = JSON.parse(window.sessionStorage.getItem('last'));
        var go = last.pop();
        window.sessionStorage.setItem('last', JSON.stringify(last));
        window.location.href = go;
    });
    $("a:not(#back)").click(function (e) {
            e.preventDefault();
            var last = JSON.parse(window.sessionStorage.getItem('last'));
            last.push(window.location.pathname);
            console.log(last);
            window.sessionStorage.setItem('last', JSON.stringify(last));
            window.location.href = $(this).attr('href');
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