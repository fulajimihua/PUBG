$(function() {
	var floor1_title = "http://127.0.0.1:8000/pubg/index/floortitle/1/"
	var floor2_title = "http://127.0.0.1:8000/pubg/index/floortitle/2/"
	var floor1_banner = "http://127.0.0.1:8000/pubg/index/floorbanner/1/"
	var floor2_banner = "http://127.0.0.1:8000/pubg/index/floorbanner/2/"
	var floor1_img = "http://127.0.0.1:8000/pubg/index/floorimg/1/"
	var floor2_img = "http://127.0.0.1:8000/pubg/index/floorimg/2/"
	var floor1_goods = "http://127.0.0.1:8000/pubg/index/floorgoods/1/"
	var floor2_goods = "http://127.0.0.1:8000/pubg/index/floorgoods/2/"
	$.getJSON(floor1_title, function(name) {
		for(var i = 0; i < name.length; i++) {
			var obj = name[i];
			var li = $("<li>" + obj.name + "</li>");
			$(".floor1-left-content ul").append(li);
			$("li:odd").css("border-right", "0px")
		}
	})
	$.getJSON(floor1_banner, function(img) {
		for(var i = 0; i < 3; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$("#floor1-right-banner-img").append(li)
			var li = $("<li></li>")
			$(".floor1-right-banner-btn").append(li)
		}
		var _list1 = $("#floor1-right-banner-img");
		var _list2 = $(".floor1-right-banner-btn");
		var _li1 = $("#floor1-right-banner-img li");
		var _li2 = $(".floor1-right-banner-btn li");

		_li1.first().clone().appendTo(_list1);

		var size = $("#floor1-right-banner-img li").length;
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move();
		}, 2000);

		function move() {
			if(i < 0) {
				_list1.css("left", -(size - 1) * 605);
				i = size - 2;
			}

			if(i >= size) {
				_list1.css("left", 0);
				i = 1;
			}

			_list1.stop().animate({
				left: -i * 605
			}, "slow");

			_li2.eq(i).removeClass().addClass("active").siblings().removeClass("active")
			if(i == size - 1) {
				_li2.eq(0).removeClass().addClass("active").siblings().removeClass("active")
			}
		}

		_li2.mouseenter(function() {
			var index = $(this).index();
			i = index;
			move();
		})

		$("#floor1-right-banner").hover(function() {
				clearInterval(timer);
			},
			function() {
				clearInterval(timer);
				timer = setInterval(function() {
					i++;
					move();
				}, 2000);
			})

	})
	$.getJSON(floor1_img, function(img) {
		for(var i = 0; i < 2; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$(".floor1-right-img-top").append(li)
		}
	})
	$.getJSON(floor1_goods, function(data) {
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var obj1 = data[i].img;
			var obj2 = data[i].title;
			var obj3 = data[i].price;
			var li = $('<li><img src="' + obj1 + '"/><p>' + obj2 + '</p><span>' + obj3 + '</span></li>');
			$(".floor1-right-img-bottom ul").append(li);
		}
	})
	$.getJSON(floor2_title, function(name) {
		for(var i = 0; i < name.length; i++) {
			var obj = name[i];
			var li = $("<li>" + obj.name + "</li>");
			$(".floor2-left-content ul").append(li);
			$("li:odd").css("border-right", "0px")
		}
	})
	$.getJSON(floor2_banner, function(img) {
		for(var i = 0; i < 3; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$("#floor2-right-banner-img").append(li)
			var li = $("<li></li>")
			$(".floor2-right-banner-btn").append(li)
		}
		var _list1 = $("#floor2-right-banner-img");
		var _list2 = $(".floor2-right-banner-btn");
		var _li1 = $("#floor2-right-banner-img li");
		var _li2 = $(".floor2-right-banner-btn li");

		_li1.first().clone().appendTo(_list1);

		var size = $("#floor2-right-banner-img li").length;
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move();
		}, 2000);

		function move() {
			if(i < 0) {
				_list1.css("left", -(size - 1) * 605);
				i = size - 2;
			}

			if(i >= size) {
				_list1.css("left", 0);
				i = 1;
			}

			_list1.stop().animate({
				left: -i * 605
			}, "slow");

			_li2.eq(i).removeClass().addClass("active").siblings().removeClass("active")
			if(i == size - 1) {
				_li2.eq(0).removeClass().addClass("active").siblings().removeClass("active")
			}
		}

		_li2.mouseenter(function() {
			var index = $(this).index();
			i = index;
			move();
		})

		$("#floor2-right-banner").hover(function() {
				clearInterval(timer);
			},
			function() {
				clearInterval(timer);
				timer = setInterval(function() {
					i++;
					move();
				}, 2000);
			})

	})
	$.getJSON(floor2_img, function(img) {
		for(var i = 0; i < 2; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$(".floor2-right-img-top").append(li)
		}
	})
	$.getJSON(floor2_goods, function(data) {
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var obj1 = data[i].img;
			var obj2 = data[i].title;
			var obj3 = data[i].price;
			var li = $('<li><img src="' + obj1 + '"/><p>' + obj2 + '</p><span>' + obj3 + '</span></li>');
			$(".floor2-right-img-bottom ul").append(li);
		}
	})
	$.getJSON(floor1_title, function(name) {
		for(var i = 0; i < name.length; i++) {
			var obj = name[i];
			var li = $("<li>" + obj.name + "</li>");
			$(".floor3-left-content ul").append(li);
			$("li:odd").css("border-right", "0px")
		}
	})
	$.getJSON(floor1_banner, function(img) {
		for(var i = 0; i < 3; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$("#floor3-right-banner-img").append(li)
			var li = $("<li></li>")
			$(".floor3-right-banner-btn").append(li)
		}
		var _list1 = $("#floor3-right-banner-img");
		var _list2 = $(".floor3-right-banner-btn");
		var _li1 = $("#floor3-right-banner-img li");
		var _li2 = $(".floor3-right-banner-btn li");

		_li1.first().clone().appendTo(_list1);

		var size = $("#floor3-right-banner-img li").length;
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move();
		}, 2000);

		function move() {
			if(i < 0) {
				_list1.css("left", -(size - 1) * 605);
				i = size - 2;
			}

			if(i >= size) {
				_list1.css("left", 0);
				i = 1;
			}

			_list1.stop().animate({
				left: -i * 605
			}, "slow");

			_li2.eq(i).removeClass().addClass("active").siblings().removeClass("active")
			if(i == size - 1) {
				_li2.eq(0).removeClass().addClass("active").siblings().removeClass("active")
			}
		}

		_li2.mouseenter(function() {
			var index = $(this).index();
			i = index;
			move();
		})

		$("#floor3-right-banner").hover(function() {
				clearInterval(timer);
			},
			function() {
				clearInterval(timer);
				timer = setInterval(function() {
					i++;
					move();
				}, 2000);
			})

	})
	$.getJSON(floor1_img, function(img) {
		for(var i = 0; i < 2; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$(".floor3-right-img-top").append(li)
		}
	})
	$.getJSON(floor1_goods, function(data) {
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var obj1 = data[i].img;
			var obj2 = data[i].title;
			var obj3 = data[i].price;
			var li = $('<li><img src="' + obj1 + '"/><p>' + obj2 + '</p><span>' + obj3 + '</span></li>');
			$(".floor3-right-img-bottom ul").append(li);
		}
	})
	$.getJSON(floor2_title, function(name) {
		for(var i = 0; i < name.length; i++) {
			var obj = name[i];
			var li = $("<li>" + obj.name + "</li>");
			$(".floor4-left-content ul").append(li);
			$("li:odd").css("border-right", "0px")
		}
	})
	$.getJSON(floor2_banner, function(img) {
		for(var i = 0; i < 3; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$("#floor4-right-banner-img").append(li)
			var li = $("<li></li>")
			$(".floor4-right-banner-btn").append(li)
		}
		var _list1 = $("#floor4-right-banner-img");
		var _list2 = $(".floor4-right-banner-btn");
		var _li1 = $("#floor4-right-banner-img li");
		var _li2 = $(".floor4-right-banner-btn li");

		_li1.first().clone().appendTo(_list1);

		var size = $("#floor4-right-banner-img li").length;
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move();
		}, 2000);

		function move() {
			if(i < 0) {
				_list1.css("left", -(size - 1) * 605);
				i = size - 2;
			}

			if(i >= size) {
				_list1.css("left", 0);
				i = 1;
			}

			_list1.stop().animate({
				left: -i * 605
			}, "slow");

			_li2.eq(i).removeClass().addClass("active").siblings().removeClass("active")
			if(i == size - 1) {
				_li2.eq(0).removeClass().addClass("active").siblings().removeClass("active")
			}
		}

		_li2.mouseenter(function() {
			var index = $(this).index();
			i = index;
			move();
		})

		$("#floor4-right-banner").hover(function() {
				clearInterval(timer);
			},
			function() {
				clearInterval(timer);
				timer = setInterval(function() {
					i++;
					move();
				}, 2000);
			})

	})
	$.getJSON(floor2_img, function(img) {
		for(var i = 0; i < 2; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$(".floor4-right-img-top").append(li)
		}
	})
	$.getJSON(floor2_goods, function(data) {
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var obj1 = data[i].img;
			var obj2 = data[i].title;
			var obj3 = data[i].price;
			var li = $('<li><img src="' + obj1 + '"/><p>' + obj2 + '</p><span>' + obj3 + '</span></li>');
			$(".floor4-right-img-bottom ul").append(li);
		}
	})
	$.getJSON(floor1_title, function(name) {
		for(var i = 0; i < name.length; i++) {
			var obj = name[i];
			var li = $("<li>" + obj.name + "</li>");
			$(".floor5-left-content ul").append(li);
			$("li:odd").css("border-right", "0px")
		}
	})
	$.getJSON(floor1_banner, function(img) {
		for(var i = 0; i < 3; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$("#floor5-right-banner-img").append(li)
			var li = $("<li></li>")
			$(".floor5-right-banner-btn").append(li)
		}
		var _list1 = $("#floor5-right-banner-img");
		var _list2 = $(".floor5-right-banner-btn");
		var _li1 = $("#floor5-right-banner-img li");
		var _li2 = $(".floor5-right-banner-btn li");

		_li1.first().clone().appendTo(_list1);

		var size = $("#floor5-right-banner-img li").length;
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move();
		}, 2000);

		function move() {
			if(i < 0) {
				_list1.css("left", -(size - 1) * 605);
				i = size - 2;
			}

			if(i >= size) {
				_list1.css("left", 0);
				i = 1;
			}

			_list1.stop().animate({
				left: -i * 605
			}, "slow");

			_li2.eq(i).removeClass().addClass("active").siblings().removeClass("active")
			if(i == size - 1) {
				_li2.eq(0).removeClass().addClass("active").siblings().removeClass("active")
			}
		}

		_li2.mouseenter(function() {
			var index = $(this).index();
			i = index;
			move();
		})

		$("#floor5-right-banner").hover(function() {
				clearInterval(timer);
			},
			function() {
				clearInterval(timer);
				timer = setInterval(function() {
					i++;
					move();
				}, 2000);
			})

	})
	$.getJSON(floor1_img, function(img) {
		for(var i = 0; i < 2; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$(".floor5-right-img-top").append(li)
		}
	})
	$.getJSON(floor1_goods, function(data) {
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var obj1 = data[i].img;
			var obj2 = data[i].title;
			var obj3 = data[i].price;
			var li = $('<li><img src="' + obj1 + '"/><p>' + obj2 + '</p><span>' + obj3 + '</span></li>');
			$(".floor5-right-img-bottom ul").append(li);
		}
	})
	$.getJSON(floor2_title, function(name) {
		for(var i = 0; i < name.length; i++) {
			var obj = name[i];
			var li = $("<li>" + obj.name + "</li>");
			$(".floor6-left-content ul").append(li);
			$("li:odd").css("border-right", "0px")
		}
	})
	$.getJSON(floor2_banner, function(img) {
		for(var i = 0; i < 3; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$("#floor6-right-banner-img").append(li)
			var li = $("<li></li>")
			$(".floor6-right-banner-btn").append(li)
		}
		var _list1 = $("#floor6-right-banner-img");
		var _list2 = $(".floor6-right-banner-btn");
		var _li1 = $("#floor6-right-banner-img li");
		var _li2 = $(".floor6-right-banner-btn li");

		_li1.first().clone().appendTo(_list1);

		var size = $("#floor6-right-banner-img li").length;
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move();
		}, 2000);

		function move() {
			if(i < 0) {
				_list1.css("left", -(size - 1) * 605);
				i = size - 2;
			}

			if(i >= size) {
				_list1.css("left", 0);
				i = 1;
			}

			_list1.stop().animate({
				left: -i * 605
			}, "slow");

			_li2.eq(i).removeClass().addClass("active").siblings().removeClass("active")
			if(i == size - 1) {
				_li2.eq(0).removeClass().addClass("active").siblings().removeClass("active")
			}
		}

		_li2.mouseenter(function() {
			var index = $(this).index();
			i = index;
			move();
		})

		$("#floor6-right-banner").hover(function() {
				clearInterval(timer);
			},
			function() {
				clearInterval(timer);
				timer = setInterval(function() {
					i++;
					move();
				}, 2000);
			})

	})
	$.getJSON(floor2_img, function(img) {
		for(var i = 0; i < 2; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$(".floor6-right-img-top").append(li)
		}
	})
	$.getJSON(floor2_goods, function(data) {
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var obj1 = data[i].img;
			var obj2 = data[i].title;
			var obj3 = data[i].price;
			var li = $('<li><img src="' + obj1 + '"/><p>' + obj2 + '</p><span>' + obj3 + '</span></li>');
			$(".floor6-right-img-bottom ul").append(li);
		}
	})
	$.getJSON(floor1_title, function(name) {
		for(var i = 0; i < name.length; i++) {
			var obj = name[i];
			var li = $("<li>" + obj.name + "</li>");
			$(".floor7-left-content ul").append(li);
			$("li:odd").css("border-right", "0px")
		}
	})
	$.getJSON(floor1_banner, function(img) {
		for(var i = 0; i < 3; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$("#floor7-right-banner-img").append(li)
			var li = $("<li></li>")
			$(".floor7-right-banner-btn").append(li)
		}
		var _list1 = $("#floor7-right-banner-img");
		var _list2 = $(".floor7-right-banner-btn");
		var _li1 = $("#floor7-right-banner-img li");
		var _li2 = $(".floor7-right-banner-btn li");

		_li1.first().clone().appendTo(_list1);

		var size = $("#floor7-right-banner-img li").length;
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move();
		}, 2000);

		function move() {
			if(i < 0) {
				_list1.css("left", -(size - 1) * 605);
				i = size - 2;
			}

			if(i >= size) {
				_list1.css("left", 0);
				i = 1;
			}

			_list1.stop().animate({
				left: -i * 605
			}, "slow");

			_li2.eq(i).removeClass().addClass("active").siblings().removeClass("active")
			if(i == size - 1) {
				_li2.eq(0).removeClass().addClass("active").siblings().removeClass("active")
			}
		}

		_li2.mouseenter(function() {
			var index = $(this).index();
			i = index;
			move();
		})

		$("#floor7-right-banner").hover(function() {
				clearInterval(timer);
			},
			function() {
				clearInterval(timer);
				timer = setInterval(function() {
					i++;
					move();
				}, 2000);
			})

	})
	$.getJSON(floor1_img, function(img) {
		for(var i = 0; i < 2; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$(".floor7-right-img-top").append(li)
		}
	})
	$.getJSON(floor1_goods, function(data) {
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var obj1 = data[i].img;
			var obj2 = data[i].title;
			var obj3 = data[i].price;
			var li = $('<li><img src="' + obj1 + '"/><p>' + obj2 + '</p><span>' + obj3 + '</span></li>');
			$(".floor7-right-img-bottom ul").append(li);
		}
	})
	$.getJSON(floor2_title, function(name) {
		for(var i = 0; i < name.length; i++) {
			var obj = name[i];
			var li = $("<li>" + obj.name + "</li>");
			$(".floor8-left-content ul").append(li);
			$("li:odd").css("border-right", "0px")
		}
	})
	$.getJSON(floor2_banner, function(img) {
		for(var i = 0; i < 3; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$("#floor8-right-banner-img").append(li)
			var li = $("<li></li>")
			$(".floor8-right-banner-btn").append(li)
		}
		var _list1 = $("#floor8-right-banner-img");
		var _list2 = $(".floor8-right-banner-btn");
		var _li1 = $("#floor8-right-banner-img li");
		var _li2 = $(".floor8-right-banner-btn li");

		_li1.first().clone().appendTo(_list1);

		var size = $("#floor8-right-banner-img li").length;
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move();
		}, 2000);

		function move() {
			if(i < 0) {
				_list1.css("left", -(size - 1) * 605);
				i = size - 2;
			}

			if(i >= size) {
				_list1.css("left", 0);
				i = 1;
			}

			_list1.stop().animate({
				left: -i * 605
			}, "slow");

			_li2.eq(i).removeClass().addClass("active").siblings().removeClass("active")
			if(i == size - 1) {
				_li2.eq(0).removeClass().addClass("active").siblings().removeClass("active")
			}
		}

		_li2.mouseenter(function() {
			var index = $(this).index();
			i = index;
			move();
		})

		$("#floor8-right-banner").hover(function() {
				clearInterval(timer);
			},
			function() {
				clearInterval(timer);
				timer = setInterval(function() {
					i++;
					move();
				}, 2000);
			})

	})
	$.getJSON(floor2_img, function(img) {
		for(var i = 0; i < 2; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$(".floor8-right-img-top").append(li)
		}
	})
	$.getJSON(floor2_goods, function(data) {
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var obj1 = data[i].img;
			var obj2 = data[i].title;
			var obj3 = data[i].price;
			var li = $('<li><img src="' + obj1 + '"/><p>' + obj2 + '</p><span>' + obj3 + '</span></li>');
			$(".floor8-right-img-bottom ul").append(li);
		}
	})
	$.getJSON(floor1_title, function(name) {
		for(var i = 0; i < name.length; i++) {
			var obj = name[i];
			var li = $("<li>" + obj.name + "</li>");
			$(".floor9-left-content ul").append(li);
			$("li:odd").css("border-right", "0px")
		}
	})
	$.getJSON(floor1_banner, function(img) {
		for(var i = 0; i < 3; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$("#floor9-right-banner-img").append(li)
			var li = $("<li></li>")
			$(".floor9-right-banner-btn").append(li)
		}
		var _list1 = $("#floor9-right-banner-img");
		var _list2 = $(".floor9-right-banner-btn");
		var _li1 = $("#floor9-right-banner-img li");
		var _li2 = $(".floor9-right-banner-btn li");

		_li1.first().clone().appendTo(_list1);

		var size = $("#floor9-right-banner-img li").length;
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move();
		}, 2000);

		function move() {
			if(i < 0) {
				_list1.css("left", -(size - 1) * 605);
				i = size - 2;
			}

			if(i >= size) {
				_list1.css("left", 0);
				i = 1;
			}

			_list1.stop().animate({
				left: -i * 605
			}, "slow");

			_li2.eq(i).removeClass().addClass("active").siblings().removeClass("active")
			if(i == size - 1) {
				_li2.eq(0).removeClass().addClass("active").siblings().removeClass("active")
			}
		}

		_li2.mouseenter(function() {
			var index = $(this).index();
			i = index;
			move();
		})

		$("#floor9-right-banner").hover(function() {
				clearInterval(timer);
			},
			function() {
				clearInterval(timer);
				timer = setInterval(function() {
					i++;
					move();
				}, 2000);
			})

	})
	$.getJSON(floor1_img, function(img) {
		for(var i = 0; i < 2; i++) {
			var obj = img[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$(".floor9-right-img-top").append(li)
		}
	})
	$.getJSON(floor1_goods, function(data) {
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var obj1 = data[i].img;
			var obj2 = data[i].title;
			var obj3 = data[i].price;
			var li = $('<li><img src="' + obj1 + '"/><p>' + obj2 + '</p><span>' + obj3 + '</span></li>');
			$(".floor9-right-img-bottom ul").append(li);
		}
	})
})