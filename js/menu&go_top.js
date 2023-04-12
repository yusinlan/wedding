$(function(){
    // menu
        let is_open = false // 關閉是false,開啟是true
        $(".top_menu .fa-bars").click(function(){
            if( is_open == false){
                $(".top_right").animate({top:"100px", opacity: 1},200);
                is_open = true;
            }else{
                $(".top_right").animate({top:"-1200px", opacity: 0},200);
                is_open = false;
            }
        });
    





     // go Top
     let btn = $("#up_icon");

     $(window).scroll(function() {
         if ($(window).scrollTop() > 300) {
             btn.addClass("show");
         } else {
             btn.removeClass("show");
         }
     });

     btn.on('click', function(e) {
        e.preventDefault();
         $('html, body').animate({scrollTop:0}, '900');
         $(".fa-circle-chevron-up").css({color:"rgb(98, 95, 95)"});
         
     });
 });