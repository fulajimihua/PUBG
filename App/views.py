import hashlib
import io
import os
import random
import uuid

import requests
from PIL import Image, ImageDraw, ImageFont
from django.http import JsonResponse, HttpResponse
from django.shortcuts import render, redirect

# Create your views here.
from django.urls import reverse

from App.alipay.alipay import AliPay
from App.models import *

# ==================首页===================== #
from PUBG.settings import BASE_DIR, STATIC_URL


def index(request):
    imgs = Banner_img.objects.all()
    data={
        'imgs':imgs,
    }
    username = request.session.get('username')
    if username:
        res = render(request,'index.html', {'username':username})
    else:
        res = render(request, 'index.html')
    return res

# ==============首页数据接口================== #
def banner(request):
    imgs = Banner_img.objects.filter(banner_id=1).values('img')
    imgs=list(imgs)
    res = JsonResponse(imgs, safe=False)
    return res

def floor_title(request, floor_id):
    floor = Floor.objects.get(floor_id = floor_id)
    floor_title = floor.floor_title.all().values('name')
    floor_title = list(floor_title)
    res = JsonResponse(floor_title, safe=False)
    return res

def floor_banner(request, floor_id):
    floor = Floor.objects.get(floor_id = floor_id)
    floor_banner = floor.floor_banner.all().values('img')
    floor_banner = list(floor_banner)
    res = JsonResponse(floor_banner, safe=False)
    return res

def floor_img(request, floor_id):
    floor = Floor.objects.get(floor_id = floor_id)
    floor_img = floor.floor_img.all().values('img')
    floor_img = list(floor_img)
    # print('*' * 50)
    # print(floor_img)
    # print('*' * 50)
    res = JsonResponse(floor_img, safe=False)
    return res

def floor_goods(request, floor_id):
    floor = Floor.objects.get(floor_id=floor_id)
    floor_goods = floor.floor_goods.all().values()
    floor_goods = list(floor_goods)
    # print('*'*50)
    # print(floor_goods)
    # print('*'*50)
    res = JsonResponse(floor_goods, safe=False)
    return res

# =================注册==================== #

# 注册页面
# vc = '123789'
def register(request):
    data = {
        'statu': 1,
        'msg': "注册成功",
        'data': {}
    }
    if request.method == "GET":
        return render(request, 'register.html')
    if request.method == "POST":
        username = request.POST.get('user')
        pwd1 = request.POST.get('pwd1')
        pwd2 = request.POST.get('pwd2')
        phone_num = request.POST.get('phone_num')
        verifycode = request.POST.get('verifycode')
        vc = request.session['verify_code']
        if User.objects.filter(username=username):
            data['statu'] = 4
            data['msg'] = '用户名已存在'
            return JsonResponse(data)
        if verifycode != vc:
            data['statu'] = 2
            data['msg'] = "验证码错误"
            return JsonResponse(data)
        if pwd1 != pwd2:
            data['statu'] = 3
            data['msg'] = "两次密码输入不相等"
            return JsonResponse(data)
        # print(username,pwd1,phone_num)
        user = User()
        user.username = username
        user.phone_num = phone_num
        user.password = my_md5(pwd1)
        print(user.password)
        # user.password = pwd1
        user.save()
        return JsonResponse(data)
    else:
        data['statu'] = 0
        data['msg'] = "请求方式错误"
        return JsonResponse(data)

def varify_username(request):
    data = {
        'statu':1,
        'msg':'用户名Ok',
    }
    username = request.GET.get('username')
    if User.objects.filter(username=username):
        data['statu'] = 2
        data['msg'] = '用户名已存在'
    return JsonResponse(data)

def my_md5(s):
    m = hashlib.md5()
    m.update(s.encode())
    return m.hexdigest()

# ================登录页面================= #
def login(request):
    username = request.session.get('username')
    if not username:
        if request.method == 'GET':
            return render(request,'login.html')
        if request.method == 'POST':
            username = request.POST.get('username')
            password = my_md5(request.POST.get('password'))
            # print(password)
            verifycode = request.POST.get('verifycode')
            freecode = request.POST.get('freecode')
            # print(username, password, verifycode, freecode)
            # print(request.session.get('image_verify_code'))
            # print(User.objects.filter(username=username).first().password)
            if verifycode == request.session.get('image_verify_code'):
                if User.objects.filter(username=username).exists():
                    if User.objects.filter(username=username).first().password == password:
                        if freecode:
                            request.session['username'] = username
                            request.session.set_expiry(14*24*3600)
                        else:
                            request.session['username'] = username
                            request.session.set_expiry(0)
                        return redirect(reverse('App:index'))
                    else:
                        return render(request, 'login.html', {'pwderr': "密码错误"})
                else:
                    return render(request,'login.html', {'pwderr':"账号错误"})
            else:
                return render(request,'login.html', {'vcerr':"验证码错误"})
        else:
            return HttpResponse('请求方式错误')
    else:
        res = redirect(reverse('App:index'))
        return res

def logout(request):
    request.session['username'] = ''
    return redirect(reverse('App:index'))

# 验证码图片
def gen_vc_img(request):
    # 1.创建画布
    image = Image.new('RGB',(100,50),(100,235,184))
    # 2.创建画笔
    draw = ImageDraw.Draw(image, 'RGB')
    # 3.创建字体
    font_path = r'G:\ADOBEARABIC-BOLD.OTF'
    # font_path = os.path.join(STATIC_URL,'ADOBEARABIC-BOLD.OTF')
    font = ImageFont.truetype(font_path, 40)
    # 4.画
    code = gen_vc()
    draw.text((5,5),code,font=font,fill=(135,134,245))
    # 保存验证码，方便后续验证
    request.session['image_verify_code'] = code
    # 5.添加干扰点
    for i in range(1000):
        draw.point((random.randint(0,98), random.randint(0,48)), fill=random_color())
    # 6.渲染成图片
    buff = io.BytesIO()
    image.save(buff, 'png')
    return HttpResponse(buff.getvalue(), 'image/png')

def random_color():
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    return r, g, b

# 验证码随机函数
def gen_vc():
    vc=''
    for i in range(0,6):
        vc += str(random.choice([1,2,3,4,5,6,7,8,9,0]))
    return vc

# 验证码请求接口
def get_vc(request):
    vc = gen_vc()
    request.session['verify_code'] = vc
    phone = request.GET.get('phone')
    url='https://open.ucpaas.com/ol/sms/sendsms'
    data2={
        "sid": "364d2d73219071bbda89bb78e2d3276d",
        "token": "72bd183aa2f99ba477406f1f6c4a504f",
        "appid": 'de998446d19744c6a464196180591cee',
        "templateid": "481984",  # 短信内容的模板
        "param": vc,  # 验证码
        "mobile": phone,
    }
    response = requests.post(url, json=data2)
    print(response.text)
    data={
        'statu':1,
        'msg':'验证码已发送',
        'data':{}
    }
    return JsonResponse(data)

# ================列表================ #
def list_content(request):
    username = request.session.get('username')
    if username:
        res = render(request, 'list.html', {'username': username})
    else:
        res = render(request, 'list.html')
    return res

# 列表数据接口
def list_detail(request):
    data = {
        'statu':1,
        'msg':"OK",
        'data':{},
    }
    goods = Goods.objects.all().values('name','img','price','price2','id')
    data['data'] = list(goods)
    print(goods)
    print(data)
    return JsonResponse(data)

# ===========商品详情=========== #
def goods(request, goods_id):
    goods = Goods.objects.filter(id = goods_id).first()
    username = request.session.get('username')
    if username:
        res = render(request, 'goods.html', {'goods':goods, 'username': username})
    else:
        res = render(request, 'goods.html', {'goods':goods})
    return res

# ============购物车============ #
def cart(request):
    username = request.user.username
    carts = Cart.objects.filter(user_id=User.objects.filter(username=username).first().id, is_order=False).all()
    # print(username, carts)
    # print(carts[0].goods.name, carts[0].goods.price, carts[0].goods.small_img)
    return render(request, 'shoppingcart.html', {'username':username, 'carts':carts})

# 购物车数量增加
def cart_add(request):
    data={
        'statu':1,
        'msg':'OK',
        'data':{}
    }
    cartid = request.GET.get('cart_id')
    print(cartid)
    cart = Cart.objects.filter(id=cartid, is_order=False).first()
    print(cart, type(cart))
    if not cart:
        data['statu'] = 2
        data['msg'] = '用户购物车中无此商品'
    cart.num += 1
    data['data']['num'] = cart.num
    cart.save()
    cart.all_price = cart.num * cart.goods.price
    data['data']['all_price'] = cart.all_price
    cart.save()
    print(data)
    return JsonResponse(data)

# 购物车数量减少
def cart_reduce(request):
    data={
        'statu':1,
        'msg':'OK',
        'data':{}
    }
    cartid = request.GET.get('cart_id')
    print(cartid)
    cart = Cart.objects.filter(id=cartid, is_order=False).first()
    print(cart, type(cart))
    if not cart:
        data['statu'] = 2
        data['msg'] = '用户购物车中无此商品'
    cart.num -= 1
    data['data']['num'] = cart.num
    cart.save()
    cart.all_price = cart.num * cart.goods.price
    data['data']['all_price'] = cart.all_price
    cart.save()
    print(data)
    return JsonResponse(data)

# 添加商品到购物车
def add_goods(request):
    data = {
        'statu':1,
        'msg':"OK"
    }
    goods_id = request.GET.get('goods_id')
    add_num = request.GET.get('add_num')
    user = request.user
    cart = Cart.objects.filter(goods_id=goods_id, user_id=user.id, is_order=False).first()
    if cart:
        all_price = float(Goods.objects.filter(id=goods_id).first().price) * float(cart.num)
        cart.num += int(add_num)
        cart.save()
    else:
        all_price = float(Goods.objects.filter(id=goods_id).first().price) * float(add_num)
        cart = Cart.objects.create(goods_id=goods_id, user_id=user.id, num=add_num, all_price=all_price)
    return JsonResponse(data)

# 修改购物车选中
def alter_checkbox(request):
    data={
        'statu':1,
        'msg':"修改成功",
        'data':{}
    }
    cart_id = request.GET.get('cart_id')
    cart = Cart.objects.filter(id=cart_id, is_order=False)
    if cart:
        cart = cart.first()
        cart.is_select = not cart.is_select
        cart.save()
        data['data']['is_select'] = cart.is_select
    else:
        data['statu']=2
        data['msg']="该购物车不存在"
    return JsonResponse(data)

# 删除购物车
def delete_cart(request):
    data={
        'statu':1,
        'msg':"OK"
    }
    cart_id = request.GET.get('cart_id')
    cart = Cart.objects.filter(id=cart_id, is_order=False)
    if cart.exists():
        cart.delete()
    else:
        data['statu'] = 2
        data['msg'] = "购物车原本不存在"
    return JsonResponse(data)

# 全选
def all_select(request):
    data={
        'statu':1,
        'msg':'OK',
    }
    # print(request.POST)
    cart_ids = request.POST.getlist('cart_ids[]')
    # print(cart_ids)
    try:
        carts = Cart.objects.filter(id__in=cart_ids, is_order=False).all()
        for cart in carts:
            cart.is_select = 1
            cart.save()
    except:
        data['statu']=2
        data['msg']="存在购物车记录不存在"
    return JsonResponse(data)

# 取消全选
def cancel_all_select(request):
    data = {
        'statu': 1,
        'msg': 'OK',
    }
    cart_ids = request.POST.getlist('cart_ids[]')
    # print(cart_ids)
    try:
        carts = Cart.objects.filter(id__in=cart_ids, is_order=False).all()
        for cart in carts:
            cart.is_select = 0
            cart.save()
    except:
        data['statu'] = 2
        data['msg'] = "存在购物车记录不存在"
    return JsonResponse(data)

# 获取总价
def get_total_price(request):
    data={
        'statu':1,
        'msg':"总价已算出",
        'data':{}
    }
    carts = Cart.objects.filter(user=request.user, is_select=1, is_order=False)
    total_price = 0
    for cart in carts:
        total_price += cart.num * cart.goods.price
    data['data']['total_price'] = total_price
    return JsonResponse(data)

# ================订单================ #

# 生成订单
def order_submit(request):
    carts = Cart.objects.filter(user=request.user, is_select=1, is_order=False).all()
    if carts:
        total_price = 0
        for cart in carts:
            total_price += cart.goods.price * cart.num
        order = Order()
        order.user = request.user
        order.order_id = str(uuid.uuid4())
        order.total_price = total_price
        order.is_paid = False
        order.save()
        for cart in carts:
            cart.order = order
            cart.is_order = True
            cart.save()
        carts = order.cart_set.all()
        username = request.session.get('username')
        if username:
            res = render(request, 'shoppingorder.html', {'username':username, 'carts': carts, 'order':order})
        else:
            res = render(request,  'shoppingorder.html', {'carts': carts, 'order':order})
        return res
    else:
        username = request.session.get('username')
        res = render(request, 'shoppingorder.html', {'username': username, "error":"您未提交任何商品"})
        return res

# 查看订单列表
def orders(request):
    user = request.user
    orders = Order.objects.filter(user = user)
    username = user.username
    res = render(request, 'orders.html', {'orders':orders, 'username':username})
    return res

# 查看订单
def order(request, order_id):
    order = Order.objects.filter(order_id=order_id).first()
    carts = order.cart_set.all()
    username = request.user.username
    res = render(request, 'shoppingorder.html', {'username': username, 'carts': carts, 'order': order})
    return res

# 删除订单
def deleteorder(request):
    data ={
        'statu':1,
        'msg':"OK"
    }
    try:
        order_id = request.GET.get('orderid')
        Order.objects.filter(id=order_id).delete()
    except:
        data['statu'] = 2
        data['msg'] = "订单不存在"
    return JsonResponse(data)


# ================支付================= #
# 支付

def pay(request):
    orderid = request.POST.get('orderid')
    order =Order.objects.get(id=orderid)
    # 传递参数初始化支付类
    alipay = AliPay(
        appid="2016092100558964",  # 设置签约的appid
        app_notify_url="http://127.0.0.1:8000/notify/",  # "http://projectsedus.com/",  # 异步支付通知url
        app_private_key_path=r"App/alipay/ying_yong_si_yao.txt",  # 设置应用私钥
        alipay_public_key_path=r"App/alipay/zhi_fu_bao_gong_yao.txt",  # 支付宝的公钥，验证支付宝回传消息使用，不是你自己的公钥,
        debug=True,  # 默认False,            # 设置是否是沙箱环境，True是沙箱环境
        return_url="http://127.0.0.1:8000/pubg/result/"+str(order.id)+"/",  # "http://47.92.87.172:8000/"  # 同步支付通知url
    )
    print(order.user.username, order.order_id, order.total_price)
    # 传递参数执行支付类里的direct_pay方法，返回签名后的支付参数，
    url = alipay.direct_pay(
        subject=order.user.username+"您的订单",  # 订单名称
        # 订单号生成，一般是当前时间(精确到秒)+用户ID+随机数
        out_trade_no=order.order_id,  # 订单号
        total_amount=order.total_price,  # 支付金额
        return_url="http://127.0.0.1:8000/pubg/result/"  # 支付成功后，跳转url
    )


    # 将前面后的支付参数，拼接到支付网关
    # 注意：下面支付网关是沙箱环境，最终进行签名后组合成支付宝的url请求
    re_url = "https://openapi.alipaydev.com/gateway.do?{data}".format(data=url)
    # print(re_url)
    return JsonResponse({'re_url': re_url})

# 异步支付通知url (上线后使用)
def notify(request):
    print("notify:", dict(request.GET))
    return HttpResponse("支付成功:%s" % (dict(request.GET)))

# 付款成功后跳转的url
def result(request, order_id):
    # sign_rec = request.GET.get('sign')
    # print(sign_rec)
    # alipay = AliPay(
    #     appid="2016092100558964",  # 设置签约的appid
    #     app_notify_url="http://127.0.0.1:8000/notify/",  # "http://projectsedus.com/",  # 异步支付通知url
    #     app_private_key_path=r"App/alipay/ying_yong_si_yao.txt",  # 设置应用私钥
    #     alipay_public_key_path=r"App/alipay/zhi_fu_bao_gong_yao.txt",  # 支付宝的公钥，验证支付宝回传消息使用，不是你自己的公钥,
    #     debug=True,  # 默认False,            # 设置是否是沙箱环境，True是沙箱环境
    #     return_url="http://127.0.0.1:8000/pubg/result/" + str(order_id) + "/",
    #     # "http://47.92.87.172:8000/"  # 同步支付通知url
    # )
    # sign = alipay.sign
    # print(sign)
    # if sign==sign_rec:
    order = Order.objects.get(id=order_id)
    order.id_pied = True
    order.save()

    # 支付成功后，将对应订单的状态改为：1 已支付
    res = render(request, 'ok.html', {'coontent':'支付OK'})
    return res
    # else:
    #     return render(request, 'ok.html', {'cintent':'非法请求'})



# http://127.0.0.1:8000/pubg/index/
