$(function() {
	$(".warn").css("display", "block");
	$(".sort li").eq(0).mouseover(function() {
		$(".category1").css("display", "block")
	})
	$(".sort li").eq(0).mouseout(function() {
		$(".category1").css("display", "none")
	})
	$(".sort li").eq(1).mouseover(function() {
		$(".category2").css("display", "block")
	})
	$(".sort li").eq(1).mouseout(function() {
		$(".category2").css("display", "none")
	})
	$(".sort li").eq(2).mouseover(function() {
		$(".category3").css("display", "block")
	})
	$(".sort li").eq(2).mouseout(function() {
		$(".category3").css("display", "none")
	})
	$(".sort li").eq(3).mouseover(function() {
		$(".category4").css("display", "block")
	})
	$(".sort li").eq(3).mouseout(function() {
		$(".category4").css("display", "none")
	})
	$(".sort li").eq(4).mouseover(function() {
		$(".category5").css("display", "block")
	})
	$(".sort li").eq(4).mouseout(function() {
		$(".category5").css("display", "none")
	})
	$(".sort li").eq(5).mouseover(function() {
		$(".category6").css("display", "block")
	})
	$(".sort li").eq(5).mouseout(function() {
		$(".category6").css("display", "none")
	})
	$(".sort li").eq(6).mouseover(function() {
		$(".category7").css("display", "block")
	})
	$(".sort li").eq(6).mouseout(function() {
		$(".category7").css("display", "none")
	})
	$(".sort li").eq(7).mouseover(function() {
		$(".category8").css("display", "block")
	})
	$(".sort li").eq(7).mouseout(function() {
		$(".category8").css("display", "none")
	})
	$(".sort li").eq(8).mouseover(function() {
		$(".category9").css("display", "block")
	})
	$(".sort li").eq(8).mouseout(function() {
		$(".category9").css("display", "none")
	})
	$(".sort li").eq(9).mouseover(function() {
		$(".category10").css("display", "block")
	})
	$(".sort li").eq(9).mouseout(function() {
		$(".category10").css("display", "none")
	})

	// 大轮播图

	$.getJSON("http://127.0.0.1:8000/pubg/index/banner1/", function(img) {
		for (var i = 0; i < img.length; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$("#box-list").append(li)
			var li2 = $("<li></li>")
			$('#list2').append(li2)
		}
		var _list1 = $("#box-list");
		var _list2 = $("#list2");
		var _li1 = $("#box-list li");
		var _li2 = $("#list2 li");

		_li1.first().clone().appendTo(_list1);

		var size = $("#box-list li").length;
		var i = 0;
		var timer = setInterval(function () {
			i++;
			move();
		}, 2000);

		function move() {
			if (i < 0) {
				_list1.css("left", -(size - 1) * 625);
				i = size - 2;
			}

			if (i >= size) {
				_list1.css("left", 0);
				i = 1;
			}

			_list1.stop().animate({
				left: -i * 750
			}, "slow");

			_li2.eq(i).removeClass().addClass("active").siblings().removeClass("active")
			if (i == size - 1) {
				_li2.eq(0).removeClass().addClass("active").siblings().removeClass("active")
			}
		}

		_li2.mouseenter(function () {
			var index = $(this).index();
			i = index;
			move();
		})

		$("#box").hover(function () {
				clearInterval(timer);
			},
			function () {
				clearInterval(timer);
				timer = setInterval(function () {
					i++;
					move();
				}, 2000);
			})
	})


	$(".main-right-bottom-title li").eq(1).click(function() {
		$(".main-right-bottom-title li span").eq(0).removeClass("on")
		$(".main-right-bottom-title li span").eq(1).addClass("on")
		$(".main-right-bottom-content2").css("display", "block")
		$(".main-right-bottom-content1").css("display", "none")
	})
	$(".main-right-bottom-title li").eq(0).click(function() {
		$(".main-right-bottom-title li span").eq(1).removeClass("on")
		$(".main-right-bottom-title li span").eq(0).addClass("on")
		$(".main-right-bottom-content2").css("display", "none")
		$(".main-right-bottom-content1").css("display", "block")
	})
	$(".friend li").eq(1).mouseover(function() {
		$(".friend li").eq(0).removeClass("cur")
		$(".friend li").eq(1).removeClass("cur").addClass("cur")
		$(".friend-shop").css("display", "none")
		$(".friend-link").css("display", "block")
	})
	$(".friend li").eq(0).mouseover(function() {
		$(".friend li").eq(1).removeClass("cur")
		$(".friend li").eq(0).removeClass("cur").addClass("cur")
		$(".friend-shop").css("display", "block")
		$(".friend-link").css("display", "none")
	})
	var index;
	$("#loutiNav li").click(function() {
		$(this).find("span").addClass("select").parent().siblings().find("span").removeClass("select");
		var index = $(this).index()-1;
		var _top = $(".louti").eq(index).offset().top;
		$("body, html").stop().animate({
			scrollTop: _top
		}, 1000);
	});
	var nav = $(".louti");
	var win = $(window);
	var sc = $(document);
	$("#loutiNav").hide();
	win.scroll(function() {
		if(sc.scrollTop() >= 600) {
			$("#loutiNav").show();
			var index = Math.floor(sc.scrollTop() / 520);
			$("#loutiNav ul li span").eq(index - 1).addClass("select").parent().siblings().find("span").removeClass("select");
		} else {
			$("#loutiNav").hide();
		}
	});
})