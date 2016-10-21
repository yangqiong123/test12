$(function(){
	$('.categories').hover(function(){
		$('.allSort').show();
	},function(){
		$('.allSort').hide();
	});

	// 右边菜单的显示与隐藏
	$('.catitem h3').on('click',function(){
		$(this).parent('.catitem').toggleClass('change');
	});


	// 显示隐藏
	$('.s-more').on('click',function(){
		$(this).parents('.attr').toggleClass('show-hide');
		if($(this).html() == '更多↓'){
			$(this).html('收起↑');
		}else if($(this).html() == '收起↑'){
			$(this).html('更多↓');
		}
	});

	$('.attrs-extra div').on('click',function(){
		if($(this).html()=="查看更多（价格）↓"){
			$(this).html("收起↑");
			$('.attr').last().show();
		}else if($(this).html()=="收起↑"){
			$(this).html("查看更多（价格）↓");
			$('.attr').last().hide();
		}
	})
// 地址选择
	$('#store-selector').hover(function(){
		$('.adress').show();
		$('.adress-top').on('click','span',function(){
			$('.adress-top span').removeClass('mt');
			$(this).addClass('mt');
			$('.city-cont').removeClass('xianshi');
			$('.city-cont').eq($(this).index()).addClass('xianshi');
		});
	},function(){
		$('.adress').hide();
	});


// 当滚动条移动到一定位置时候，让列表fixed在浏览器上方
	var $fliterTop = $(".r-filter").offset().top;
	$(window).scroll(function(){
		if($(document).scrollTop() > $fliterTop){
			$(".r-filter").addClass('fliterScroll')
		}else{
			$(".r-filter").removeClass('fliterScroll')
		}
	})

// 底下的点击切换商品


	$('.left-arrow').on('click',function(){
		$('.tuijian').stop().animate({left:-500},function(){
			$('.tuijian').css('left',-250);
			$('.tuijian li:first').remove().clone().appendTo('.tuijian')
		});

	});

	$('.right-arrow').on('click',function(){
		$('.tuijian').stop().animate({left:0},function(){
			$('.tuijian').css('left',-250);
			$('.tuijian li:last').remove().clone().prependTo('.tuijian')
		});
	});
});