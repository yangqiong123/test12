$(function(){
	// 给 + 号绑定点击事件
	$('.addnum').on('click',function(){
		//得到当前的父辈元素（当前商品的行）
		var $parents = $(this).parents('.clearit');
		// 得到当前数量文本框中的值 和当前商品的价格 
		var $num = parseInt($(this).prev().val());
		var $price = parseFloat($parents.find('strong').html())
		//每次点击+按钮 让 文本框中的数字+1
		$(this).prev().val($num+1);
		var a =$price*($num+1);
		a = parseFloat(a.toFixed(2));
		//价格小计
		$parents.find('.total_price').html(a);

		//判断 当当前商品行选中状态时，对输出总价进行操作
		if ($parents.find('.putong').prop("checked")){
			var $allMoney = parseFloat($('#allMoney').html());
			var $cartTopPrice = parseFloat($('.cartTopPrice').html());
			//重量的得到
			var $pWeight =  parseFloat($parents.find('.pWeight').html());
			var $allWeight = parseFloat($('#allWeight').html());
									
			$('#allMoney').html(parseFloat(($price + $allMoney).toFixed(2)));
			$('.cartTopPrice').html(parseFloat(($price + $cartTopPrice).toFixed(2)));
			$('#allWeight').html(parseFloat(($pWeight + $allWeight).toFixed(2)) + "kg")
		}
		return false;		
	});

	// 给 - 号绑定点击事件
	
	$('.reducenum').on('click',function(){
		//得到当前的父辈元素（当前商品的行）
		var $parents = $(this).parents('.clearit');
		// 得到当前数量文本框中的值 和当前商品的价格
		var $num = parseInt($(this).next().val());
		var $price = Number($parents.find('strong').html())
		//每次点击+按钮 让 文本框中的数字-1
		if($num>1){
			$(this).next().val($num-1);
			var a =$price*($num-1);
			a = parseFloat(a.toFixed(2));
			//价格小计
			$parents.find('.total_price').html(a);

			if ($parents.find('.putong').prop("checked")){
				var $allMoney = parseFloat($('#allMoney').html());
				var $cartTopPrice = parseFloat($('.cartTopPrice').html());
				//重量的得到
				var $pWeight =  parseFloat($parents.find('.pWeight').html());
				var $allWeight = parseFloat($('#allWeight').html());
										
				$('#allMoney').html(parseFloat((-$price + $allMoney).toFixed(2)));
				$('.cartTopPrice').html(parseFloat((-$price + $cartTopPrice).toFixed(2)));
				$('#allWeight').html(parseFloat((-$pWeight + $allWeight).toFixed(2)) + "kg")
			}
		};
		return false;
	});

	$('.cartPInfo :checkbox').prop('checked',false);
	$('#Zall').prop('checked',false);

	//
	$('#Zall,#Zpu').on('click',function(){
		var checked = $(this).prop('checked');
		$('.cartPInfo :checkbox').prop('checked',checked);
		var t = 0;
		var w = 0;
		var m = 0;
		if(checked == true){
			for(var i=0;i<$('.cartPInfo :checkbox').length;i++){
				var sum = Number($('.cartPInfo :checkbox').eq(i).parents('.cartPInfo').find('.amount').val());
				console.log(1)
				t=t+Number($('.cartPInfo :checkbox').eq(i).parents('.cartPInfo').find('.total_price').html());

				m=m+parseFloat($('.cartPInfo :checkbox').eq(i).parents('.cartPInfo').find('.pWeight').html())*sum;
				t=parseFloat(t.toFixed(2));
				m=parseFloat(m.toFixed(2));
			}
			$('#allMoney').html(t);
			$('.cartTopPrice').html(t);
			$('#allWeight').html(m+'kg');
		}else{
			$('#allMoney').html(0);
			$('.cartTopPrice').html(0);
			$('#allWeight').html(0+'kg');
		}

	})

	$('.cartPInfo :checkbox').on('click',function(){
		$zongjia = $('.cartTopPrice').html();
		$wig = $('#allWeight').html();

		$danweig =$(this).parents('.cartPInfo').find('.pWeight').html()
		$xiaoji = $(this).parents('.cartPInfo').find('.total_price').html();
		$mun = $(this).parents('.cartPInfo').find('.amount').val();
		var j = parseFloat($wig) - parseFloat($danweig)*$mun;
		var d = parseFloat($wig)+ parseFloat($danweig)*$mun;		
		if($(this).prop('checked')){
			
			$('.cartTopPrice').html(parseFloat($zongjia) + parseFloat($xiaoji));
			$('#allMoney').html(parseFloat($zongjia) + parseFloat($xiaoji));
			$('#allWeight').html(j+'kg');
		}else{
			$('.cartTopPrice').html(parseFloat($zongjia) - parseFloat($xiaoji));
			$('#allMoney').html(parseFloat($zongjia) - parseFloat($xiaoji));
			$('#allWeight').html(d+'kg');
		}	
	});

	$('.cartDel').on('click',function(){
		sel = $(this).parents('.cartPInfo');
		$('.body-box').show();
		$('.tangchuang').show();
		$('#popup_cancel').on('click',function(){
			$('.body-box').hide();
			$('.tangchuang').hide();

		});
		$('#popup_ok').on('click',function(){
			$('.body-box').hide();
			$('.tangchuang').hide();
			sel.remove();
		})
	});


	$('.cartclear').on('click',function(){
		$('.cartPInfo').remove();

	});

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
});