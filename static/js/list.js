$(function() {
	$(".allSort,.sort").mousemove(function() {
		$(".sort").css("display", "block")
	})
	$(".allSort,.sort").mouseout(function() {
		$(".sort").css("display", "none")
	})
	$(".hd-allSort,.hd-sort").mousemove(function() {
		$(".sort").css("display", "block")
	})
	$(".hd-allSort,.hd-sort").mouseout(function() {
		$(".sort").css("display", "none")
	})
	$(".hd-sort li").eq(0).mouseover(function() {
		$(".category1").css("display", "block")
	})
	$(".hd-sort li").eq(0).mouseout(function() {
		$(".category1").css("display", "none")
	})
	$(".hd-sort li").eq(1).mouseover(function() {
		$(".category2").css("display", "block")
	})
	$(".hd-sort li").eq(1).mouseout(function() {
		$(".category2").css("display", "none")
	})
	$(".hd-sort li").eq(2).mouseover(function() {
		$(".category3").css("display", "block")
	})
	$(".hd-sort li").eq(2).mouseout(function() {
		$(".category3").css("display", "none")
	})
	$(".hd-sort li").eq(3).mouseover(function() {
		$(".category4").css("display", "block")
	})
	$(".hd-sort li").eq(3).mouseout(function() {
		$(".category4").css("display", "none")
	})
	$(".hd-sort li").eq(4).mouseover(function() {
		$(".category5").css("display", "block")
	})
	$(".hd-sort li").eq(4).mouseout(function() {
		$(".category5").css("display", "none")
	})
	$(".hd-sort li").eq(5).mouseover(function() {
		$(".category6").css("display", "block")
	})
	$(".hd-sort li").eq(5).mouseout(function() {
		$(".category6").css("display", "none")
	})
	$(".hd-sort li").eq(6).mouseover(function() {
		$(".category7").css("display", "block")
	})
	$(".hd-sort li").eq(6).mouseout(function() {
		$(".category7").css("display", "none")
	})
	$(".hd-sort li").eq(7).mouseover(function() {
		$(".category8").css("display", "block")
	})
	$(".hd-sort li").eq(7).mouseout(function() {
		$(".category8").css("display", "none")
	})
	$(".hd-sort li").eq(8).mouseover(function() {
		$(".category9").css("display", "block")
	})
	$(".hd-sort li").eq(8).mouseout(function() {
		$(".category9").css("display", "none")
	})
	$(".hd-sort li").eq(9).mouseover(function() {
		$(".category10").css("display", "block")
	})
	$(".hd-sort li").eq(9).mouseout(function() {
		$(".category10").css("display", "none")
	})
	var _box2Top = $(".nav").offset().top;
	$(window).scroll(function() {
		var _scrollTop = $(document).scrollTop();
		if(_scrollTop >= _box2Top) {
			$(".hd-nav").fadeIn(); //显示
			$(".hd-allSort,.hd-sort").mousemove(function() {
				$(".hd-sort").css("display", "block")
			});
			$(".hd-sort").mouseout(function() {
				$(".hd-sort").css("display", "none")
			})
		} else {
			$(".hd-nav").fadeOut(); //隐藏
			$(".hd-sort").css("display", "none")
		}
	});
	$.get("/pubg/listdetail/", function(data) {
		console.log(data)
		for(var i = 0; i < data.data.length; i++) {
			var obj1 = data.data[i].img;
			var obj2 = data.data[i].price;
			var obj3 = data.data[i].price2;
			var obj4 = data.data[i].name;
			var obj5 = data.data[i].id;

			var li = $("<a href='/pubg/goods/" + obj5 + "/'><li><div class='itemSearchResultCon'><img src='/static/" + obj1 + "' />" +
				"<p class='price'><span>￥" + obj2 + "</span>" +
				"<del>￥" + obj3 + "</del></p>" +
				"<p class='titleBox'><a class='productName'><span class='list-lable-self'>" +
				"</span>" + obj4 + "</a><a class='promoTitle'>"
				+ "拍下880元（限9.1-2两天）" + "</a></p>" +
				"<div class='sell-type-div'><span class='comment-right comment'>" +
				"<a>" + '评论' + '<em>' + "评论 条" + '</em>' + "327" + "</a>" +
				"</span><span class='goodseller-name self-name'>" + "1药网自营" + "</span>" +
				"</div><div class='search-list-op'>" +
				"<input type='button' class='search-list-reduce-gray'>" +
				"<input type='text' value='0' class='num'>" +
				"<input type='button' class='search-list-plus'>" +
				"<button class='add-cart-btn' goodsid = " + obj5 + ">" + "加入购物车" + "</button></div>" +
				"</li></a>");
			$(".itemSearchList").append(li)
			}
		$('.search-list-reduce-gray').click(function () {
			var num = parseInt($(this).next().val())
			// console.log(num)
			if (num > 1) {
				num--
				$(this).next().val(num)
			}
		});
		$('.search-list-plus').click(function () {
			var num = parseInt($(this).prev().val())
			// console.log(num)
			num++
			$(this).prev().val(num)
		});
		$('.add-cart-btn').click(function () {
			var goodsId = $(this).attr('goodsid');
			var goodsNum = $(this).siblings('.num').val();
			let that = this
			$.get('/pubg/addgoods/', {goods_id: goodsId, add_num: goodsNum}, function (response) {
				if (response.statu == 1) {
					$(that).siblings('.num').val(0)
					alert("OK")
				}
				else{
					alert(response.msg)
				}
			})

		})

	})
})