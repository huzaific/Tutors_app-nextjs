$(document).ready(function(){
    $(".navbar-toggler-icon").click(function () {
        $(".click-menu-btn").toggleClass("change-btn");
        $(".navbar-collapse").fadeToggle();
    });
    $('#datepicker1').datepicker({
        format: 'yyyy-mm-dd'
    });
    $('#datepicker2').datepicker({
        format: 'yyyy-mm-dd'
    });

    $('#datepicker3').datepicker({
        format: 'yyyy-mm-dd'
    });
    $('#datepicker4').datepicker({
        format: 'yyyy-mm-dd'
    });

    $('#datepicker5').datepicker({
        format: 'yyyy-mm-dd'
    });
    $('#datepicker6').datepicker({
        format: 'yyyy-mm-dd'
    });

    $('#datepicker7').datepicker({
        format: 'yyyy-mm-dd'
    });
    $('#datepicker8').datepicker({
        format: 'yyyy-mm-dd'
    });

    $(".tutoring-wrap .teacter-detail-wrap").click(function () {
        $(this).parent().find(".selected").removeClass("selected");
        $(this).addClass("selected");
    });


    $(".chat-with-teacher-wrap>li a").click(function () {
        $(".chat-with-teacher-wrap .chat-with-teacher").removeClass("hide");
        var chatdialogue = $(this).next(".chat-dialogue-wrap");
        if( chatdialogue.is(":visible") ){
            chatdialogue.slideUp();
        }else{
            chatdialogue.slideDown();
        }
    });


    $(".extra-menu").click(function () {
        $(".before-login-sidebar-outer-wrap").addClass("open-siderbar");
        // $("body").addClass("fixed");
    });

    $(".before-login-sidebar .close").click(function () {
        $(".before-login-sidebar-outer-wrap").removeClass("open-siderbar");
        // $("body").removeClass("fixed");
    });

    $(".my-tutoring .teacter-detail-wrap.tutoring-application-list-btn").click(function () {
        $(this).parent().parent().hide();
        $(this).parent().parent().parent().find(".tutoring-application-list-wrap").show();
        // $("body").removeClass("fixed");
    });

    $(".tutoring-deadline-btn .general-btn").click(function () {
        $(this).parent().parent().parent().hide();
        $(this).parent().parent().parent().parent().find(".tutoring-row").show();
        // $("body").removeClass("fixed");
    });


    $(".btn-moreinfo").click(function () {
        $(".faq-answer-detail").removeClass('hidden');
    });

    $('.faq-answer-img').each(function(){
                var content = $(this).children('.faq-answer-detail');
                var content_txt = content.html();
                var content_txt_short = content_txt.substring(0,200)+"...";
                content_txt.replace(/\n/g, '<br/>');
                content_txt_short.replace(/\n/g, '<br/>');
                var btn_more = $('<a href="javascript:void(0)" class="more">&#43; 전체보기</a>');


                $(this).append(btn_more);

                if(content_txt.length >= 200){;
                    content.html(content_txt_short);

                }else{
                    btn_more.hide()
                }

                btn_more.click(toggle_content);
                function toggle_content(){
                    if($(this).hasClass('short')){
                        // 접기 상태
                        $(this).html('&#43; 전체보기');
                        content.html(content_txt_short);
                        $(this).removeClass('short');
                    }else{
                        // 더보기 상태
                        $(this).html('&#45; 접기');
                        content.html(content_txt);
                        $(this).addClass('short');

                    }
                }
    });

});
