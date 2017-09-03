/**
 * Created by lhida on 29-01-2017.
 */
$("#back").click(function () {
    history.go(-1);
    navigator.app.backHistory();
    window.history.back();
});