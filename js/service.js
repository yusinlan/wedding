$(document).ready(function() {
    // 初始化 Wow.js
    new WOW().init();
  
    // 監聽滾動條事件
    $(window).scroll(function() {
    
        // 如果滾動條捲動到了 .wedding 的位置
        if ($(this).scrollTop() >= $('.service_banner').offset().top - 500) {
        
            // 為.service_banner li元素添加 rotateIn 動畫
            $('.service_banner li ').addClass('animate__animated animate__flipInY').attr("data-wow-duration", "1s");
        }
    });
});