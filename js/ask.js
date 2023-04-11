
$(document).ready(function() {
    // 當輸入框內容變更時，移除紅色邊框
    $('input[type="text"], input[type="tel"], input[type="email"], #time').change(function() {
      $(this).css('border-color', '');
    });

    $('input[type="text"], input[type="tel"], input[type="email"], select').on('keydown', function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        const fields = $(this).closest('.form').find('input[type="text"], input[type="tel"], input[type="email"], select');
        const index = fields.index(this);
        if (index > -1 && (index + 1) < fields.length) {
          fields.eq(index + 1).focus();
        }
      }
    });


    $('.send').click(function() {
        let name = $('#name').val();
        let phone = $('#phone').val();
        let email = $('#E-mail').val();
        let date = $('#date').val();
        let time = $('#time').val();
        let site = $('#site').val();
        let valid = true;
        let errorMsg = "";
      
      // 檢查姓名欄位是否有填寫,姓名格式是否是中文名稱
      let chinesePattern = /^[\u4e00-\u9fa5]+$/; 
      if (name == '' ) {
        $('#name').css({borderColor: "red"});
        valid = false;
        errorMsg += "請填寫姓名\n";
      } else if(!chinesePattern.test(name)){
        $('#name').css({borderColor: "red"});
        valid = false;
        errorMsg += "請輸入中文姓名\n";
      }else{
        $('#name').css({borderColor: ""});
      }
      
      // 檢查欄位是否有填寫,電話格式是否正確
      let phoneReg = /^[0-9]{10}$/;
      if (phone == '' || !phoneReg.test(phone)) {
        $('#phone').css({borderColor: "red"});
        valid = false;
        errorMsg += "請填寫正確的手機號碼\n";
      } else {
        $('#phone').css({borderColor: ""});
      }
      
      // 檢查欄位是否有填寫,E-mail格式是否正確
      var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (email == '' || !emailReg.test(email)) {
        $('#E-mail').css({borderColor: "red"});
        valid = false;
        errorMsg += "請填寫正確的Email\n";
      } else {
        $('#E-mail').css({borderColor: ""});
      }
      
      // 檢查欄位是否有填寫,服務日期格式是否正確
      var dateReg = /^\d{4}\/\d{2}\/\d{2}$/;
      if (date == '' || !dateReg.test(date)) {
        $('#date').css({borderColor: "red"});
        valid = false;
        errorMsg += "請填寫正確的日期格式 (ex:2023/02/25)\n";
      } else {
        $('#date').css({borderColor: ""});
      }

      if (time === '') {
        $('#time').css({borderColor: "red"});
        valid = false;
        errorMsg += "請選擇服務時段\n";
      }else {
        $('#time').css({borderColor: ""});
      }
      
      // 檢查預計宴客場地欄位是否有填寫
      if (site == '') {
        $('#site').css({borderColor: "red"});
        valid = false;
        errorMsg += "請填寫預計宴客場地\n";
      } else {
        $('#site').css({borderColor: ""});
      }

      // 如果沒有選擇任何服務項目，提示選擇
        if (!$('#service_1').is(':checked') &&
          !$('#service_2').is(':checked') &&
          !$('#service_3').is(':checked') &&
          !$('#service_4').is(':checked')) {
            errorMsg += "請選擇一項服務項目\n";
        }
      

      if (valid) {
        // 如果全部欄位 valid = true, 送出表單
        $('form').submit();
        alert("表單送出成功");

         // 提交表單時清空欄位值
        $('#name').val('');
        $('#phone').val('');
        $('#E-mail').val('');
        $('#date').val('');
        $('#time').val('');
        $('#site').val('');
        $('#service_1').prop('checked', false);
        $('#service_2').prop('checked', false);
        $('#service_3').prop('checked', false);
        $('#service_4').prop('checked', false);
        $('#textarea').val('');
        return true;
      } else {
        // 如果欄位有 valid = false 顯示錯誤訊息且畫面回到頂端
        alert(errorMsg);
        $('html, body').animate({
          scrollTop: $('.form li:has([style*="border-color: red"])').first().offset().top - 200
        }, 500);
        $(".send").css({borderColor:"rgb(235, 221, 221)"});
        return false;
      }
    });
  });





  