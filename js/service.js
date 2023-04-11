$(document).ready(function() {
    // 初始化 Wow.js
    new WOW().init();
  
    // 監聽滾動條事件
    $(window).scroll(function() {
    
        // 如果滾動條捲動到了 .wedding 的位置
        if ($(this).scrollTop() >= $('.service_banner').offset().top - 100) {
        
            // 為wedding_1元素添加 backInLeft & backInRight 動畫
            $('.service_banner li ').addClass('animate__animated animate__rotateIn').attr("data-wow-duration", "1s");
            // $('.wedding_1_right').addClass('animate__animated animate__backInRight').attr('data-wow-delay', '1s');

        }
    });
});