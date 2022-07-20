$(document).ready(function() {
    window.onscroll = function() {
        if ($(window).scrollTop() > 60) {
            $('.header').css({
                background: '#fff',
                borderBottom: '1px solid #eee'
            })
            $('.header .nav_list').css({
                color: '#000',
            })
            $('.header .logo').css({
                background: 'url(./images/logo2.png) no-repeat 0/100px',
            })
        } else {
            $('.header').css({
                background: 'none',
                borderBottom: 'none'
            })
            $('.header .nav_list').css({
                color: '#fff',
            })
            $('.header .logo').css({
                background: 'url(./images/logo.png) no-repeat 0/100px',
            })
        }
    }
})