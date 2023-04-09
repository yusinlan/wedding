        // 婚禮作品輪播


            $(window).on("load", function() {
                // 設定每個圖片的寬度，方便控制顯示的位置
                let slideWidth = $(".wedding_content li").width();

                // 把最後一張圖片放到第一張圖片前面，方便實現循環播放
                // $(".wedding_content li:last-child").prependTo(".wedding_content");

                // 設定輪播的定時器，每 3500 毫秒切換到下一張圖片
                let slideTimer = setInterval(function() {
                    slideRight();
                }, 3500);

                // 當點擊前一張圖片的箭頭時，切換到上一張圖片
                $(".prev").click(function() {
                    clearInterval(slideTimer); // 清除定時器
                    slideLeft();
                    slideTimer = setInterval(function() { // 重新設定定時器
                        slideRight();
                    }, 3500);
                });

                // 當點擊後一張圖片的箭頭時，切換到下一張圖片
                $(".next").click(function() {
                    clearInterval(slideTimer); // 清除定時器
                    slideRight();
                    slideTimer = setInterval(function() { // 重新設定定時器
                        slideRight();
                    }, 3500);
                });

        
                function slideLeft() {
                    $(".wedding_content").animate({
                        marginLeft: "+=" + slideWidth
                        }, 500, function() {
                        // 把最後一張圖片放到第一張圖片前面，方便實現循環播放
                        $(".wedding_content li:last-child").prependTo(".wedding_content");
                        // 把 margin-left 設回 0，方便下一次切換
                        $(".wedding_content").css("margin-left", "0");
                    });
                }
                    

                // 切換到下一張圖片的函式
                function slideRight() {
                    $(".wedding_content").animate({
                        marginLeft: "-=" + slideWidth
                    }, 500, function() {
                        // 把第一張圖片放到最後一張圖片後面，方便實現循環播放
                        $(".wedding_content li:first-child").appendTo(".wedding_content");
                        // 把 margin-left 設回 0，方便下一次切換
                        $(".wedding_content").css("margin-left", "0");

                    });
                }
            });