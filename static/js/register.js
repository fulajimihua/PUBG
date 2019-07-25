$(function() {
	//表单验证
	$(".reg_form").Validform();
	$(".reg_form").Validform({
		tipSweep: false,
	});
	$('#user').blur(function () {
		$('#usernamevalid').css('display','none')
		$('#usernameok').css('display','none')
		let username=$('#user').val()
		$.get('/pubg/varifyusername/',{username:username},function (data) {
			if (data.statu==2){
				$('#usernamevalid').css('display','inline')
			}
			else{
				$('#usernameok').css('display','inline')
			}
		})
	})
	$(".user-name").blur(function() {
		if($(".user-name").val() == "") {
			$(".i-empty").css("display", "block")
			$(".user").find(".error").css("display", "none")
		}
		$(".user-name").removeClass("empty").addClass("empty");
		if($("input[type=text]").hasClass("Validform_error")) {
			$(".user").find(".error").css({
				"display": "block",
				"color": "red"
			})
		}
		if(!$("input[type=text]").hasClass("Validform_error")) {
			$(".user").find(".error").css({
				"display": "none",
				"color": "red"
			})
			$(".user").find(".i-ture").css("display", "block")
			$(".user-name").removeClass("empty")
		}

	})
	$(".user-name").focus(function() {
		$(".i-empty").css("display", "none")
		$(".user-name").removeClass("empty")
		$(".user").find(".error").css({
			"display": "none",
			"color": "red"
		})
		$(".user").find(".i-ture").css("display", "none")
	})
	$(".u-ps").focus(function() {
		$(".password-tip").css("display", "block")
		$(".reg-row").find(".password-error").css("display", "none")
		$(".u-ps").removeClass("red")
		$(".reg-row").find(".password-error").css({
			"display": "none",
			"color": "red"
		})
	})
	$(".u-ps").blur(function() {
		$(".password-tip").css("display", "none")
		if($(".u-ps").val() == "") {
			$(".reg-row").find(".password-error").css({
				"display": "block",
				"color": "red"
			})
			$(".u-ps").removeClass("red").addClass("red");
		}
		if($("input[type=password]").hasClass("Validform_error")) {
			$(".reg-row").find(".password-tip").css({
				"display": "block",
				"color": "red"
			})
			$(".reg-row").find(".password-error").css({
				"display": "none",
				"color": "red"
			})
		}
		if(!$("input[type=password]").hasClass("Validform_error")) {
			$(".reg-row").find(".password-error").css({
				"display": "none",
				"color": "red"
			})
			$(".reg-row").find(".i-pswture").css("display", "block")
		}
	})
	$(".u-ps2").focus(function() {
		$(".password2-tip").css("display", "block")
		$(".psheight").find(".password2-error").css("display", "none")
		$(".u-ps2").removeClass("red")
		$(".psheight").find(".password2-error").css({
			"display": "none",
			"color": "red"
		})
	})
	$(".u-ps2").blur(function() {
			$(".password2-tip").css("display", "none")
			if($(".u-ps2").val() == "") {
				$(".psheight").find(".password2-error").css({
					"display": "block",
					"color": "red"
				})
				$(".u-ps2").removeClass("red").addClass("red");
			}
			if($("input[name=password2]").hasClass("Validform_error")) {
				$(".psheight").find(".password2-tip").css({
					"display": "block",
					"color": "red"
				})
				$(".psheight").find(".password2-error").css({
					"display": "none",
					"color": "red"
				})
			}
			if(!$("input[name=password2]").hasClass("Validform_error")) {
				$(".psheight").find(".password2-error").css({
					"display": "none",
					"color": "red"
				})
				$(".psheight").find(".i-ture").css("display", "block")
			}
		})
		//cookie
	// $("#regsiterButton").click(function() {
	// 	if($(document).hasClass("Validform_error")) {
	// 		alert("用户信息错误！")
	// 	}
		// if(!$(document).hasClass("Validform_error")) {
		// 	cookie()
		// }
	// })

	// var cookie = function() {
	// 	var users = $.cookie("users") ? JSON.parse($.cookie("users")) : [];
	// 	for(var i = 0; i < users.length; i++) {
	// 		if(users[i].name == $(".user").val()) {
	// 			alert("用户名已存在! 不能注册相同的用户");
	// 			return;
	// 		}
	// 	}
	// 	var user = {
	// 		name: $(".user-name").val(),
	// 		pwd: $(".u-ps").val()
	// 	}
	// 	users.push(user);
	//
	// 	$.cookie("users", JSON.stringify(users), {
	// 		expires: 7,
	// 		path: "/"
	// 	});
	// 	console.log($.cookie("users"));
	// 	alert("注册成功，即将跳转")
	//
	// 	//保存登录的用户
	// 	$.cookie("loginUser", JSON.stringify(user), {
	// 		expires: 7,
	// 		path: "/"
	// 	});
	//
	// 	window.open("index.html", "_self")
	// 	$(".header-1-1").html(JSON.parse($.cookie("loginUser")).name)
	// 	$(".header-1-2").html(" 退出")
	// }
	$('#get_vc').click(function () {
		var phone_num = $('#phone_num').val()
		$.get('/pubg/getvc/',{phone:phone_num}, function (response) {
			$('#vc').html(response.msg)
		})
	})

	$("#regsiterButton").click(function() {
		username = $('#user').val()
		pwd1 = $('#password').val()
		pwd2 = $('#password2').val()
		phone_num = $('#phone_num').val()
		verifycode = $('#verifycode').val()
		$.ajax({
			type:'post',
			// headers:{"X-CSRFtoken": $.cookie("csrftoken")},
			url:'/pubg/register/',
			data: {user:username, pwd1:pwd1, pwd2:pwd2, phone_num:phone_num, verifycode:verifycode},
			success:function(data){
				console.log(data)
				if (data.statu == 1){
					alert("注册成功，5秒后跳转")
					function jump(){
    					window.location.href='/pubg/login/';
					}
					setTimeout(jump,5000)
					}
				else{
					alert(data.msg)
				}
			},
		})
	})
})