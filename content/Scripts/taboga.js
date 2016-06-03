(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$(document).ready(function () {
    var contentHeight = $("body").height();
    $("#left-panel").css('height', contentHeight);

    // Sparklines
    $('.sparklines').sparkline('html', { enableTagOptions: true });

    // Login page
    if ($("body").hasClass("login")) {
        $.backstretch("/img/bg_full.png");
    }

    // Select2
    $(".select2").select2();
});