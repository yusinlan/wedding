    $(window).on("load", function(){
        let viewport = $(window).width();
        if( viewport <= 1024){
                    
            // 最新消息的圖片
            let news_li = $(".news_content ul li");
            let news_img = $(".news_content ul li img");
            $(news_li).click(function(e){
                e.stopPropagation();  // 防止點擊圖片時也觸發空白區域的點擊事件
                // 放大圖片
                $(this).find("img").css({transform: "scale(1.1)"});
                // 恢復前一個被點擊的圖片
                $(news_li).not(this).find("img").css({transform: "scale(1)"})

            });
            

            $(document).click(function(e){
            // 判斷點擊的元素是否為最新消息區域內的圖片
                if (!$(e.target).closest('.news_content ul li').length) {
                    // 將所有圖片恢復顯示狀態
                    $(news_img).css({transform: "scale(1)"});
                }
            });
        }
    });