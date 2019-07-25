from django.conf.urls import url

from App.views import *

urlpatterns = [
    # 主页链接
    url('^index/$',index, name='index'),
    # 主页数据接口
    url('^index/banner1/',banner, name='banner1'),
    url('^index/floortitle/(\d+)/',floor_title, name='floor_title'),
    url('^index/floorbanner/(\d+)/',floor_banner, name='floor_banner'),
    url('^index/floorimg/(\d+)/',floor_img, name='floor_img'),
    url('^index/floorgoods/(\d+)/',floor_goods, name='floor_goods'),

    # 注册接口
    url('^register/$',register, name='register'),
    url('^getvc/$',get_vc, name='get_vc'),
    url('^varifyusername/$',varify_username, name='varify_username'),

    # 登录/注销接口
    url('^login/$', login, name='login'),
    url('^login/genvcimg/$', gen_vc_img, name='gen_vc_img'),
    url('^logout$', logout, name='logout'),

    # 商品详情接口
    url('^goods/(\d+)/', goods, name='goods'),

    # 购物车接口
    url('^cart/', cart, name='cart'),
    url('^cartadd/', cart_add, name='cart_add'),
    url('^cartreduce/', cart_reduce, name='cart_reduce'),
    url('^addgoods/', add_goods, name='add_goods'),
    url('^altercheckbox/', alter_checkbox, name='alter_checkbox'),
    url('^deletecart/', delete_cart, name='delete_cart'),
    url('^allselect/', all_select, name='all_select'),
    url('^cancelallselect/', cancel_all_select, name='cancel_all_select'),
    url('^gettotalprice/', get_total_price, name='get_total_price'),

    # 订单
    url('^ordersubmit/', order_submit, name='order_submit'),
    url('^orders/', orders, name='orders'),
    url("^deleteorder/", deleteorder, name="deleteorder"),
    url("^order/(.*?)/", order, name="order"),

    # 商品列表入口
    url('^listcontent/', list_content, name='list_content'),
    url('^listdetail/', list_detail, name='list_detail'),

    # 支付
    url('^pay/', pay, name='pay'),
    url(r'^notify/', notify),
    url(r'^result/(\d+)/', result),
]