$(function () {
	all_select()
	get_total_price()
	// 增加数量
	$('.btn_add').click(function () {
		cart_id = $(this).attr('cartid')
		let that = this
		$.get('/pubg/cartadd/',{'cart_id':cart_id}, function (data) {
			if(data.statu == 1){
				console.log(data.data.num)
				console.log(data.data.all_price)
				$(that).prev().html(data.data.num)
				$(that).parent().siblings('.price2').html(data.data.all_price)
			}
			else if(data.statu == 0){
				location.href = '/pubg/login/'
			}
			else{
				alert(data.msg)
			}
		})
		// 获得数量变化后的总价
		get_total_price()
	})
	// 减少数量
	$('.btn_reduce').click(function () {
		cart_id = $(this).attr('cartid');
		let that = this;
		let num = $(this).next().html();
		if (num > 1){
			$.get('/pubg/cartreduce/',{'cart_id':cart_id}, function (data) {
				if(data.statu == 1){
					console.log(data.data.num);
					console.log(data.data.all_price);
					$(that).next().html(data.data.num);
					$(that).parent().siblings('.price2').html(data.data.all_price)
				}
				else if(data.statu == 0){
					location.href = '/pubg/login/'
				}
				else{
					alert(data.msg)
				}
			})}
		else{
			alert("商品最少为1件哦！")
		}
		// 获得数量变化后的总价
		get_total_price()
	})
	// 修改选中状态
	$('.cart_checkbox').click(function () {
		let that = this
		let cart_id = $(this).attr('cartid')
		$.ajax({url:'/pubg/altercheckbox/', data:{cart_id:cart_id},async:false, success:function (response) {
			console.log(response)
			if(response.statu == 1){
				if (response.data.is_select){
				$(that).attr('checked', true)
				$(that).attr('is_select',1)
				}
				else{
				$(that).removeAttr('checked')
				$(that).attr('is_select',0)
				}
			}
			else{
				alert(response.msg)
			}
		}})
		all_select()
		// 获得勾选变化后的总价
		get_total_price()
	})
	// 删除购物车
	$('.delete').click(function () {
		let that = this
		let cartid = $(this).attr('cartid')
		$.ajax({url:'/pubg/deletecart/',data:{cart_id:cartid},async:false, success:function (response) {
			if (response.statu == 1){
				$(that).parent().parent().remove()
			}
			else{
				alert(response.msg)
			}
		}})
		all_select()
		// 获得勾选变化后的总价
		get_total_price()
	})
	function all_select() {
		// console.log("调用了all_select")
		let all_select = 1
		let length =$('.cart_checkbox').length
		// console.log(length)
		for(var i=0;i<length; i++){
			all_select = parseInt($('.cart_checkbox').eq(i).attr('is_select'))&&all_select
		}
		console.log(all_select)
		if (all_select==1){
			$('#all_select').attr('checked',true)
			$('#all_select').attr('is_select',true)
			console.log('ok')
		}
		else{
			$('#all_select').removeAttr('checked')
			$('#all_select').attr('is_select',false)
		}
		// 获得勾选变化后的总价
		get_total_price()
	}
	$('#all_select').click(function () {
		if ($('#all_select').attr('is_select')=='false'){
			// console.log($('#all_select').attr('checked'))
			$('#all_select').attr('checked', true)
			$('#all_select').attr('is_select', true)
			cart_id=[]
			$('.cart_checkbox').each(function () {
				cart_id.push($(this).attr('cartid'))
			})
			console.log(cart_id, '勾选调用')
			$.ajax({type:'post', headers:{"X-CSRFtoken": $.cookie("csrftoken")}, url:'/pubg/allselect/',
				data:{cart_ids:cart_id}, async:false, success:function (response) {
				if (response.statu==1) {
					$('.cart_checkbox').attr('checked', true)
					$('.cart_checkbox').attr('is_select', 1)
				}
				else{
					alert(response.msg)
				}
			}})
		}
		else{
			$('#all_select').removeAttr('checked')
			$('#all_select').attr('is_select', false)
			cart_id=[]
			$('.cart_checkbox').each(function () {
				cart_id.push($(this).attr('cartid'))
			})
			console.log(cart_id, '消除勾选调用')
			$.ajax({type:'post', headers:{"X-CSRFtoken": $.cookie("csrftoken")}, url:'/pubg/cancelallselect/', data:{cart_ids:cart_id}, async:false, success:function (response) {
				if (response.statu==1){
					$('.cart_checkbox').removeAttr('checked')
					$('.cart_checkbox').attr('is_select', 0)
					}
				else {
					alert(response.msg)
				}
			}})
		}
	get_total_price()
	})
	// 获得勾选变化后的总价
	function get_total_price() {
		$.get('/pubg/gettotalprice/',function (response) {
			let total_price = response.data.total_price
			total_price = "￥"+total_price
			$('#total_price').html(total_price)
		})
	}

	// 跳转购物车
	$('.add-cart-btn2').click(
		function () {
			location.href="/pubg/ordersubmit/"
		}
	)
})