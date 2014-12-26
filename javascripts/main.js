$(function() {

    var clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter'
    });

    clock.setCountdown(true);
    clock.setTime(Math.max(moment('2015-01-23 18:30').unix() - moment().unix(), 0));
    clock.start();

});