$(function(){
	//放大镜左边的小图效果
	var liHeight = $('.sm-pic-list ul li').outerHeight();
	$('.sm-upbt').on('click',function(){			
		var $top = $('.sm-pic-list ul').position().top;
		if($top<=0 && $top>-2*liHeight){
			$('.sm-pic-list ul').stop().animate({top:$top-liHeight});
		};	
	});
	$('.sm-downbt').on('click',function(){
		var $top = $('.sm-pic-list ul').position().top;
		if($top<0){
			$('.sm-pic-list ul').stop().animate({top:$top+liHeight});
		}		
	});
	$('.sm-pic-list ul').on('mouseenter','li',function(){
		$('.jqzoom img').attr('src',$(this).find('img').attr("src"));
		$('.zoomdiv img').attr('src',$(this).find('img').attr("src"));
	});
	//放大镜效果
	var box1 = $('.jqzoom');
	var pic = $('.pic')
	var box2 = $('.zoomdiv');
	var pic_big = box2.find('img');
	var pwidth = (box1.outerWidth()/pic_big.outerWidth())*box2.outerWidth();
	var pheight = (box1.outerHeight()/pic_big.outerHeight())*box2.outerHeight();
	pic.css({
		width:pwidth,
		height:pheight
	});
	var dw = pic.outerWidth();
	var dh = pic.outerHeight();
	box1.mousemove(function(e){
		// 2.鼠标移动时让pic跟着移动
		//2.1记录鼠标移动的坐标减去box1距离文档的偏移量再减去一半的pic；让鼠标在pic的中间
		var disX = e.pageX -box1.offset().left - dw/2;
		var disY = e.pageY - box1.offset().top -  dh/2;
		//进行判断
		var fold = box2.outerWidth()/dw;
		if(disX <= 0){
			disX = 0;
		}else if(disX >= box1.outerWidth() -dw){
			disX = box1.outerWidth - dw;
		};
		if(disY <= 0){
			disY = 0;
		}else if(disY >= box1.outerHeight() -dh){
			disY = box1.outerHeight() - dh;
		};
		pic.css({
			left:disX,
			top:disY
		});
		pic_big.css({
			left:-disX*fold,
			top:-disY*fold
		});
	});
	//鼠标移开后 放大镜消失
	$('.jqzoom').hover(function(){
		$('.zoomdiv').show();
		$('.pic').show();
	},function(){
		$('.zoomdiv').hide();
		$('.pic').hide();
	});
	
	//点击加减输入进文本框
	var t = 1 ;
	$('.add-num').on('click',function(){
		t++;
		$('.numt').val(t);
		return false;
	});
	$('.reduce-num').on('click',function(){
		t--;
		if(t<=1){
			t=1;			
		};
		$('.numt').val(t);
		return false;
	});
	
	//底下轮播图效果
	var $ul = $('.ysSlide ul');
	var ysIcon = $('.ysIcons div');
	var ysPic = $('.ysPic');
	var contXq = 0 ; 
	var timeone = setInterval(star,3000);
	showXq();
	$('.ysSlide').hover(function(){
		clearInterval(timeone);
	},function(){
		timeone = setInterval(star,3000);
	});
	ysIcon.hover(function(){
		clearInterval(timeone);
		contXq = $(this).index();
		showXq();
	},function(){
		timeone = setInterval(star,3000);
	});


	function star(){
		contXq++;
		showXq();		
	};

	function showXq(){
		if(contXq >= ysPic.length-1){
		$ul.css({left:0});
			contXq = 0;
		};
		$ul.stop().animate({left:-contXq*ysPic.outerWidth()});
		ysIcon.removeClass('white');
		ysIcon.eq(contXq).addClass("white");
	};

	var $commentAllTtop = $('.top-top').offset().top;
	$(window).scroll(function(){
		if($(document).scrollTop() > $commentAllTtop){
			$('.top-top').addClass('commentAllScroll')
		}else{
			$('.top-top').removeClass('commentAllScroll')
		}
	})





})
