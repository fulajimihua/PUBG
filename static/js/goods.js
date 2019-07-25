$(function() {
	$(".allSort,.sort").mousemove(function() {
		$(".sort").css("display", "block")
	})
	$(".allSort,.sort").mouseout(function() {
		$(".sort").css("display", "none")
	})
	var _smallImg = $(".zoomPad");
	var _smallArea = $(".zoomUp");
	var _bigImg = $(".bigImg");
	var _bigArea = $(".zoomWindow");

	_bigArea.css("display", "none");
	_smallArea.width(_smallImg.width() / _bigImg.width() * _bigArea.width());
	_smallArea.height(_smallImg.height() / _bigImg.height() * _bigArea.height());

	var scale = _bigImg.width() / _smallImg.width();
	_smallImg.mousemove(function(e) {
		_smallArea.css("display", "block");
		_bigArea.css("display", "block");
		var x = e.pageX - _smallImg.offset().left - _smallArea.width() / 2;
		var y = e.pageY - _smallImg.offset().top - _smallArea.height() / 2;
		if(x < 0) {
			x = 0;
		} else if(x > _smallImg.width() - _smallArea.width()) {
			x = _smallImg.width() - _smallArea.width();
		}
		if(y < 0) {
			y = 0;
		} else if(y > _smallImg.height() - _smallArea.height()) {
			y = _smallImg.height() - _smallArea.height();
		}
		_smallArea.css({
			left: x,
			top: y
		});

		_bigImg.css({
			left: -x * scale,
			top: -y * scale
		});
	})
	_smallImg.mouseleave(function() {
		_smallArea.css("display", "none");
		_bigArea.css("display", "none")
	})
	$(".taocan li").eq(1).click(function() {
		$(".taocan li").eq(0).removeClass("select-pro")
		$(".taocan li").eq(1).addClass("select-pro")
		$(".iconSelect1").css("display", "none")
		$(".iconSelect2").css("display", "block")
	})
	$(".taocan li").eq(0).click(function() {
		$(".taocan li").eq(1).removeClass("select-pro")
		$(".taocan li").eq(0).addClass("select-pro")
		$(".iconSelect2").css("display", "none")
		$(".iconSelect1").css("display", "block")
	})
	$(".num-pre").click(function() {
		var val = $("#product-amount").val() - 0 + 1;
		if(val > 4) {
			return false;
		}
		$("#product-amount").val(val);
	})
	$(".num-next").click(function() {
		var val = $("#product-amount").val() - 0 - 1;
		if(val <= 0) {
			return false;
		}
		$("#product-amount").val(val);
	})
	$(".mobBuy").mousemove(function() {
		$(".erdCode").show("slow")
	})
	$(".mobBuy").mouseout(function() {
		$(".erdCode").hide()
	})
	$(".navList li").eq(0).click(function() {
		$(".navList li").eq(0).addClass("on")
		$(".navList li").eq(1).removeClass("on")
		$(".navList li").eq(2).removeClass("on")
		$(".navList li").eq(3).removeClass("on")
		$(".detail-tab").eq(0).show();
		$(".detail-tab").eq(1).show();
		$(".detail-tab").eq(2).show();
	})
	$(".navList li").eq(1).click(function() {
		$(".navList li").eq(1).addClass("on")
		$(".navList li").eq(0).removeClass("on")
		$(".navList li").eq(2).removeClass("on")
		$(".navList li").eq(3).removeClass("on")
		$(".detail-tab").eq(0).hide();
		$(".detail-tab").eq(1).show();
		$(".detail-tab").eq(2).hide();
	})
	$(".navList li").eq(2).click(function() {
		$(".navList li").eq(2).addClass("on")
		$(".navList li").eq(0).removeClass("on")
		$(".navList li").eq(1).removeClass("on")
		$(".navList li").eq(3).removeClass("on")
		$(".detail-tab").eq(0).hide();
		$(".detail-tab").eq(1).hide();
		$(".detail-tab").eq(2).show();
	})
	$(".navList li").eq(3).click(function() {
		$(".navList li").eq(3).addClass("on")
		$(".navList li").eq(1).removeClass("on")
		$(".navList li").eq(2).removeClass("on")
		$(".navList li").eq(0).removeClass("on")
		$(".detail-tab").eq(0).show();
		$(".detail-tab").eq(1).show();
		$(".detail-tab").eq(2).show();
	})
	var _box2Top = $(".detailMenu").offset().top;

	$(window).scroll(function() {

		var _scrollTop = $(document).scrollTop();

		if(_scrollTop >= _box2Top) {
			$(".detailMenu").css({
				"position": "fixed",
				top: 0
			});
		} else {
			$(".detailMenu").css("position", "static");
		}

	})
	$("#seriesCartButton").click(function() {
		var goodsId = $("#seriesCartButton").attr('goodsid');
		var goodsNum = $(".product-amount").val();
		$.get('/pubg/addgoods/', {goods_id:goodsId, add_num:goodsNum}, function (response) {
			if(response.statu == 1){
				$(".product-amount").val(0)
				alert("OK")
			}
			else{
				alert(response.msg)
			}
		})

	})

})