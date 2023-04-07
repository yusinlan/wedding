// 婚禮作品輪播

        // $(function(){
           /* $(document).ready(function(){
                // 設定輪播間隔時間
                var interval = 3000;
                
                // 設定輪播計時器
                var timer;

                // 設定初始索引值
                var currentIndex = 0;

                // 計算作品數量
                var itemCount = $('.wedding_content li').length;

                // 設定自動輪播函數
                function autoSlide() {
                    // 計算下一個索引值
                    var nextIndex = (currentIndex + 1) % itemCount;

                    // 切換圖片和內容
                    $('.wedding_content li').eq(currentIndex).fadeOut(1000);
                    $('.wedding_content li').eq(nextIndex).fadeIn(1000);

                    // 更新索引值
                    currentIndex = nextIndex;

                    // 設定下一次自動輪播
                    timer = setTimeout(autoSlide, interval);
                }

                // 啟動自動輪播
                autoSlide();

                // 設定手動控制
                $('.fa-chevron-left').click(function(){
                    // 取消自動輪播計時器
                    clearTimeout(timer);

                    // 計算上一個索引值
                    var prevIndex = (currentIndex + itemCount - 1) % itemCount;

                    // 切換圖片和內容
                    $('.wedding_content li').eq(currentIndex).fadeOut(1000);
                    $('.wedding_content li').eq(prevIndex).fadeIn(1000);

                    // 更新索引值
                    currentIndex = prevIndex;

                    // 設定下一次自動輪播
                    timer = setTimeout(autoSlide, interval);
                });

                $('.fa-chevron-right').click(function(){
                    // 取消自動輪播計時器
                    clearTimeout(timer);

                    // 計算下一個索引值
                    var nextIndex = (currentIndex + 1) % itemCount;

                    // 切換圖片和內容
                    $('.wedding_content li').eq(currentIndex).fadeOut(1000);
                    $('.wedding_content li').eq(nextIndex).fadeIn(1000);

                    // 更新索引值
                    currentIndex = nextIndex;

                    // 設定下一次自動輪播
                    timer = setTimeout(autoSlide, interval);
                });
            });*/


            // $(document).ready(function() {
            //     var slideCount = $('.wedding_content li').length;
            //     var slideWidth = $('.wedding_content li').outerWidth(true);
            //     var slideHeight = $('.wedding_content li').outerHeight();
            //     var sliderUlWidth = slideCount * slideWidth;

            //     $('.wedding').css({
            //         width: slideWidth,
            //         height: slideHeight
            //     });

            //     $('.wedding_content').css({
            //         width: sliderUlWidth,
            //         marginLeft: -slideWidth
            //     });

            //     $('.wedding_content li:last-child').prependTo('.wedding_content');

            //     function moveLeft() {

            //         $('.wedding_content').animate({
            //             left: +slideWidth
            //             }, 200, function() {
            //             $('.wedding_content li:last-child').prependTo('.wedding_content');
            //             $('.wedding_content').css('left', '');
            //             });
            //             };

            //             function moveRight() {
            //             $('.wedding_content').animate({
            //             left: -slideWidth
            //             }, 200, function() {
            //             $('.wedding_content li:first-child').appendTo('.wedding_content');
            //             $('.wedding_content').css('left', '');
            //             });
            //             };

            //             $('i.fa-chevron-left').click(function() {
            //             moveLeft();
            //             });

            //             $('i.fa-chevron-right').click(function() {
            //             moveRight();
            //             });

            //  });

            // $(document).ready(function() {
            //     var slideCount = $('.wedding_content li').length;
            //     var slideWidth = $('.wedding_content li').outerWidth();
            //     var slideHeight = $('.wedding_content li').outerHeight();
            //     var sliderUlWidth = slideCount * slideWidth;

            //     // $('.wedding').css({ width: slideWidth, height: slideHeight });
            //     // $('.wedding_content').css({ width: sliderUlWidth, marginLeft: - slideWidth });
            //     $('.wedding_content li:last-child').prependTo('.wedding_content');

            //     function moveLeft() {
            //         $('.wedding_content').animate({
            //         left: + slideWidth
            //         }, 200, function () {
            //         $('.wedding_content li:last-child').prependTo('.wedding_content');
            //         $('.wedding_content').css('left', '');
            //         });
            //     };

            //     function moveRight() {
            //         $('.wedding_content').animate({
            //         left: - slideWidth
            //         }, 200, function () {
            //         $('.wedding_content li:first-child').appendTo('.wedding_content');
            //         $('.wedding_content').css('left', '');
            //         });
            //     };

            //     $('i.fa-chevron-left').click(function () {
            //         moveLeft();
            //     });

            //     $('i.fa-chevron-right').click(function () {
            //         moveRight();
            //     });

            // });


            $(document).ready(function() {
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
                    slideLeft();
                    clearInterval(slideTimer); // 清除定時器
                    slideTimer = setInterval(function() { // 重新設定定時器
                        slideRight();
                    }, 3500);
                });

                // 當點擊後一張圖片的箭頭時，切換到下一張圖片
                $(".next").click(function() {
                    slideRight();
                    clearInterval(slideTimer); // 清除定時器
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