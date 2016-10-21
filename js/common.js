$(function(){
// 进入页面先判断是否有cookie
	var cookie = document.cookie;
	if(cookie){
		var arr = cookie.split(';');
		if(arr.length==3){
			var userInfo = arr[2].split('=')[1];
			$('.fr .login').html('嘿欢迎来顺风优选！'+userInfo);
		}

	}










// 点击关闭头部活动页面
	$('.closetop').on('click',function(){
		$('.toppromo').slideUp(500);
	});
// 鼠标滚动事件
	$(window).scroll(function(){
		if($(document).scrollTop() > 0){
			$('.fixed-c').last().css('display','block');
		}else{
			$('.fixed-c').last().css('display','none');
		}
	});
	$('.fixed-c').last().on('click',function(){
		$('html,body').animate({scrollTop:0},500);
		return false;
	})

	//扫码APP
	$('.s-app').hover(function(){
		$('.appInfo').show();
		$('.appItem').stop(true).animate({right:0});
	},function(){
		$('.appItem').stop(true).animate({right:-310},function(){
			$('.appInfo').hide();
		});
	})





})

