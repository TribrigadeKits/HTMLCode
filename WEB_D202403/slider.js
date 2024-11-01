$(function(){
	$(".humburger").click(function(){
	$(".humburger").toggleClass("active");
	if($(".humburger").hasClass("active")){
	$("ul.menu").addClass("slide");
	}else{
	$("ul.menu").removeClass("slide");
	}
	});
	$(".slider").bxSlider({
	pager:false,
	controls:false,
	auto:true,
	mode:"fade",
	});
	$(window).scroll(function  (){
	           $(".fadein").each(function(){
	           var position=$(this).offset().top;
	           var scroll=$(window).scrollTop();
	           var windowHeight=$(window).height();
	           if(scroll>position-windowHeight +200)
	           {$(this).addClass("active");}
	           });
	});           
	         
	           
});