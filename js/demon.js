$(function(){
	//主页面的轮播图
	var indexW = $('.indexW');
	var index_slide = indexW.find('.index_slide');
	var $li = index_slide.find('li')
	var span = $('.cur_list > .cur');
	var index = 0;
	var timer = setInterval(carousel,4000);
	show();
	index_slide.hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(carousel,4000);
	});
	span.hover(function(){
		clearInterval(timer);
		index = $(this).index();
		show();
	},function(){
		timer = setInterval(carousel,4000);
	});


	function carousel(){
		index++;
		show();		
	};

	function show(){
		if(index >= $li.length-1){
		index_slide.css({left:0});
			index = 0;
		};
		index_slide.stop().animate({left:-index*$li.outerWidth()});
		span.css('backgroundColor','#646464');
		span.eq(index).css("backgroundColor","#fa9600");
	};

	// 轮播图上右边的图片
	$('.indexW_right').on("mouseenter",".indexW_right_a",function(){
		$('.overlay').show();
		$(this).find('.overlay').hide();
	});

	$('.indexW_right').on("mouseleave",".indexW_right_a",function(){
		$('.overlay').hide();
	});

	// 口碑甄选购物车
	var contnum = 0
	$(".bbig_pic").hover(function(){
		$(this).find(".btn_shopcar").stop(true).animate({bottom:10});
	},function(){
		$(this).find(".btn_shopcar").stop(true).animate({bottom:-50})
	});

	$(".btn_shopcar").on('click',function(){
		contnum++;
		$('.num').html(contnum);
		$('.s-cart-num').html(contnum);
	})


	// 添加倒计时
	var api = {
			getDate: function() {
				var endTime = new Date('2017/8/24/ 00:10:00'),
					nowTime = new Date(),
					time = endTime - nowTime;
					//console.log(time,"aa :"+endTime);
				if(time > 0) {
					var Hours = Math.floor(time/1000/60/60%24),
						Mintue = Math.floor(time/1000/60%60),
						second = Math.floor(time/1000%60);
				}
				$("#nexthour1").text(addZoo(Hours).toString().charAt(0));
				$("#nexthour2").text(addZoo(Hours).toString().charAt(1));
				$("#nextMin1").text(addZoo(Mintue).toString().charAt(0));
				$("#nextMin2").text(addZoo(Mintue).toString().charAt(1));
				$("#nextSencond1").text(addZoo(second).toString().charAt(0));
				$("#nextSencond2").text(addZoo(second).toString().charAt(1));
			}
		}

	function addZoo(item) {
		if(item < 10) {
			return '0' + item;
		}else{
			return item;
		}
	}
	setInterval(api.getDate, 1000, false);







	// 楼层购物车通道
	$('.pList').on('mouseenter','.pImg',function(){
		$(this).find('.gBtn').stop().animate({bottom:0});
	});
	$('.pList').on('mouseleave','.pImg',function(){
		$(this).find('.gBtn').stop().animate({bottom:-24});
	});
	$('.pList').on('click','.gBtn',function(){
		contnum++;
		$('.num').html(contnum);
		$('.s-cart-num').html(contnum);
		return false;
	});




	// 文章分享轮播
	function roll(){
		$('.srollbox ul').animate({top:-60},1000,function(){
			$('.srollbox ul').css({top:0});
			$('.srollbox ul li:first').remove().clone(true).appendTo('.srollbox ul');
			
		})
	}
	var startRoll = setInterval(roll,8000);
	$('.srollbox ul').hover(function(){
		clearInterval(startRoll);
	},function(){
		startRoll = setInterval(roll,8000);
	})

})