$(function () {
	// get_total_price()
	// function get_total_price() {
	// 	$.get('/pubg/gettotalprice/',function (response) {
	// 		let total_price = response.data.total_price
	// 		total_price = "￥"+total_price
	// 		$('#total_price').html(total_price)
	// 	})
	// }


	// $('.add-cart-btn2').click(
	// 	function () {
	// 		let orderid = $('.add-cart-btn2').attr('orderid')
	// 		location.href="/pubg/pay/"+ orderid + "/"
	// 	}
	// )
	// 跳转支付
	$('.add-cart-btn2').click(function () {
		let orderid = $('.add-cart-btn2').attr('orderid')
        // 将订单id提交后台， 后台根据订单id获取订单信息（订单编号，订单金额等）
        $.post("/pubg/pay/", {orderid:orderid}, function (data) {
            // console.log(data);
            let re_url = data.re_url;
            location.href = re_url;
        });

    });
})