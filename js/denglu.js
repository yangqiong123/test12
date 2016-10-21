$(function(){
	$('.loginnav').on('click','li',function(){
		$('.loginnav li').removeClass('curr');
		$(this).addClass('curr');
		$('.loginco ul').hide();
		$('.loginco ul').eq($(this).index()).show();

	})

	// 登录验证
	// 用户名验证
	// /^1\d{10}$/  /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
	$('.user').on('keyup',function(){
		if(/^1\d{10}$/.test($(this).val()) || /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test($(this).val()) ){
			$(this).next().attr('src','../img/../img/icon1.jpg');
		}else{
			
			$(this).next().attr('src','../img/../img/icon.jpg');
		}

	});

	// 手机验证
	$('#userName').on('keyup',function(){
		if(!/^1[34578]\d{9}$/.test($(this).val())){
			$(this).next().attr('src','../img/../img/icon.jpg');
		}else{
			$(this).next().attr('src','../img/../img/icon1.jpg');
		}
	});

	//密码验证
	/*
			密码  
				长度小于20 大于8
				不能包含空格
		 	*/
	$('.pass').on('keyup',function(){
		if(!/^\S{8,20}$/.test($(this).val())){
			$(this).next().attr('src','../img/../img/icon.jpg');
		}else{
			$(this).next().attr('src','../img/../img/icon2.jpg');
		}
	});


// 判断登录时候的密码和帐号，成功后将之存如页面
	var now = new Date();
		now.setDate(now.getDate() + 10);
	var cookie = document.cookie;
	var arr = cookie.split(';');
	var name = arr[0];
	name = name.split('=');
	var mima = arr[1];
	mima = mima.split('=');
	$('.login-btn').on('click',function(){
		if($('.user').val()==name[1] && $('.pass').val() ==mima[1] ){
			var userInfo = $('.user').val();
			document.cookie = 'userInfo=' + userInfo + ';expires=' + now;
			alert("你登录成功，点击进入主页");
		}else{
			alert('用户名或密码错误！');
			return false;
		}
	})













})

