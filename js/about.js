$(document).ready(function() {
    // 初始化 Wow.js
    new WOW().init();
    
    // 監聽滾動條事件
    $(window).scroll(function() {
        // 如果滾動條捲動到了 .team 的位置
        if ($(this).scrollTop() >= $('.team').offset().top - 500) {
            // 為.team ul元素添加 fadeInRight 動畫
            $('.team ul').addClass('animate__animated animate__fadeInRight').attr("data-wow-duration", "1s");
        }
    });
});