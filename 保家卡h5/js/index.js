$(function() {
    // 自适应
    $(window).resize(infinite);

    function infinite() {
        let htmlWidth = $('html').width()
        if (htmlWidth <= 750) {
            $('html').css('font-size', 30 / 750 * htmlWidth + 'px')
        } else {
            $('html').css('font-size', '30px')
        }
    }
    infinite()
});

// 显示中间四位带*
$(function() {
    var phone = $('.numble').html();
    var mobile = phone.substr(0, 3) + '****' + phone.substring(7, 11)

    $('.numble').text(mobile);
})