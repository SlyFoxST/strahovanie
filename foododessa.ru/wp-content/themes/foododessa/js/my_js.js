jQuery(document).ready(function ($) {

$(document).on('click','.hide-nav',function(){
		var nav = $('.nav_list');
		$('.hide-nav').toggleClass('active');
		nav.toggleClass('show')
	})
   $(window).load(function() { 
	$("#loaderInner").fadeOut(); 
	$("#loader").delay(400).fadeOut("slow"); 
});


$(function(){
 $(window).scroll(function() { 
  var top = $(document).scrollTop();
  if (top > 30) $('#aside1').addClass('fixed'); //200 - это значение высоты прокрутки страницы для добавления класс
  else $('.floating').removeClass('fixed');
 });
});
$(".wc-backward").attr("href","/")
$(".wpmenucart-contents").attr("href", "/cart");
$('.woocommerce-Button').attr('href','/');


	
	


});