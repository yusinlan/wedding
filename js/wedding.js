$(document).ready(function() {
    // 初始化 Wow.js
    new WOW().init();
  
    // 監聽滾動條事件
    $(window).scroll(function() {
    
        // 如果滾動條捲動到了 .wedding 的位置
        if ($(this).scrollTop() >= $('.wedding').offset().top - 500) {
        
            // 為wedding_1元素添加 backInLeft & backInRight 動畫
            $('.wedding_1_left').addClass('animate__animated animate__flipInX').attr("data-wow-duration", "1s");
            $('.wedding_1_right').addClass('animate__animated animate__flipInX').attr('data-wow-delay', '1s');

        
            // 為 .wedding_2 元素添加 backInLeft & backInRight 動畫
            $('.wedding_2_left').addClass('animate__animated animate__flipInX').attr("data-wow-delay", "1s");
            $('.wedding_2_right').addClass('animate__animated animate__flipInX').attr("data-wow-duration", "1s");

            // 為 .wedding_3 元素添加 backInLeft & backInRight 動畫
            $('.wedding_3_left').addClass('animate__animated animate__flipInX').attr("data-wow-duration", "1s");
            $('.wedding_3_right').addClass('animate__animated animate__flipInX').attr('data-wow-delay', '1s');
        }
    });
});