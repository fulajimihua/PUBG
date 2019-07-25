// $(function() {
// 	$(":button").click(function() {
// 		var users = $.cookie("users");
// 		if(users) {
// 			users = JSON.parse(users);
// 			var isExists = false;
// 			for(var i = 0; i < users.length; i++) {
// 				if(users[i].name == $(".u-name").val() && users[i].pwd == $(".u-ps").val()) {
// 					alert(" 登录成功! 即将跳转");
// 					window.open("index.html", "_self")
// 					isExists = true;
// 				}
// 			}
// 			if(!isExists) {
// 				alert("用户名或密码错误, 请重新输入!");
// 				return;
// 			}
// 		} else {
// 			alert("不存在用户, 请先注册!");
// 			window.open("register.html")
// 		}
// 	})
// })