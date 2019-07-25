$(function () {
	get_total_price()
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
			location.href="/pubg/submitorder/"
		}
	)
})