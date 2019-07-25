$(function() {
	$(".close").click(function() {
		$(".warn").fadeOut(300)
		$("#mini-shop").css("top", 112)
		$("#header-6-ul").css("top", 38)
	})
	$(".header-nav-left").mouseover(function() {
		$(".list").css("display", "block")
		$(".header-nav-left p i").removeClass("icon-arrow01down").addClass("icon-arrow01up")
	})
	$(".header-nav-left").mouseout(function() {
		$(".list").css("display", "none")
		$(".header-nav-left p i").removeClass("icon-arrow01up").addClass("icon-arrow01down")
	})
	$(".header-nav-right ul li").eq(2).mouseover(function() {
		$("#header-3 i").removeClass("icon-arrow01down").addClass("icon-arrow01up")
	})
	$(".header-nav-right ul li").eq(2).mouseout(function() {
		$("#header-3 i").removeClass("icon-arrow01up").addClass("icon-arrow01down")
	})

	$("#header-3").mouseover(function() {
		$("#header-3-ul").css("display", "block")
	})
	$("#header-3").mouseout(function() {
		$("#header-3-ul").css("display", "none")
	})
	$("#header-6").mouseover(function() {
		$("#header-6-ul").css("display", "block")
	})
	$("#header-6").mouseout(function() {
		$("#header-6-ul").css("display", "none")
	})
	$("#search").focus(function() {
		$(this).attr("value", "")
		$("#search-text").show()
	})
	$("#search").blur(function() {
		$("#search-text").hide()
		$(this).attr("value", "请输入商品名、症状、人群等")
	})
	$(".search button").click(function() {
		window.open("http://www.baidu.com")
	})
	$(".search-p span").eq(0).css("color", "red")
	$(".search-p span").eq(3).css("color", "red")
	$("#shop,#mini-shop").mouseover(function() {
		$("#mini-shop").css("display", "block")
	})
	$("#shop,#mini-shop").mouseout(function() {
		$("#mini-shop").css("display", "none")
	})
	$("#sitenav li,#mobile0").eq(8).mouseover(function() {
		$("#sitenav li i").removeClass("icon-arrow01down").addClass("icon-arrow01up")
		$("#mobile0").css("display", "block")
	})
	$("#sitenav li,#mobile0").eq(8).mouseout(function() {
		$("#sitenav li i").removeClass("icon-arrow01up").addClass("icon-arrow01down")
		$("#mobile0").css("display", "none")
	})
	$("#mobile1").mouseover(function() {
		$("#mobile1 img").css("display", "block")
	})
	$("#mobile1").mouseout(function() {
		$("#mobile1 img").css("display", "none")
	})
	$("#mobile2").mouseover(function() {
		$("#mobile2 img").css("display", "block")
	})
	$("#mobile2").mouseout(function() {
		$("#mobile2 img").css("display", "none")
	})
	$("#mobile3").mouseover(function() {
		$("#mobile3 img").css("display", "block")
	})
	$("#mobile3").mouseout(function() {
		$("#mobile3 img").css("display", "none")
	})
	$("#top").click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, "slow");
	})
	$(".header-seach #shop").click(function() {
		window.open("shoppingcart.html", "_self")
	})
})