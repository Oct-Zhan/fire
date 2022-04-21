$(function(){
	// 自适应
	 $(window).resize(infinite);
	 function infinite(){
		 let htmlWidth = $('html').width()
		 if(htmlWidth <= 750){
			 $('html').css('font-size', 30 / 750 * htmlWidth + 'px')
		 }else{
			$('html').css('font-size', '30px')
		 }
	 }infinite()
})