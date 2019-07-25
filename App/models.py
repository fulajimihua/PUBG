from django.db import models
from django.db.backends.mysql.base import *
import pymysql
# Create your models here.

# 用户数据表
class User(models.Model):
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=255)
    phone_num = models.CharField(max_length=11)
    class Meta:
        db_table = 'user'
# 主页数据表
class Banner_img(models.Model):
    banner_id = models.IntegerField(default=1)
    img = models.CharField(max_length=255)
    class Meta:
        db_table = 'banner_img'

class Floor_title(models.Model):
    name = models.CharField(max_length=20)
    class Meta:
        db_table = 'floor_title'

class Floor_img(models.Model):
    img = models.CharField(max_length=255)
    class Meta:
        db_table = 'floor_img'

class Floor_banner(models.Model):
    img = models.CharField(max_length=255)
    class Meta:
        db_table = 'floor_banner'

class Floor_goods(models.Model):
    class Meta:
        db_table = 'floor_goods'
    img = models.CharField(max_length=255)
    title = models.CharField(max_length=30)
    price = models.CharField(max_length=20)

class Floor(models.Model):
    class Meta:
        db_table = 'floor'
    floor_id = models.IntegerField()
    floor_title = models.ManyToManyField(Floor_title)
    floor_banner = models.ManyToManyField(Floor_banner)
    floor_img = models.ManyToManyField(Floor_img)
    floor_goods = models.ManyToManyField(Floor_goods)

class Goods(models.Model):
    name = models.CharField(max_length=50)
    price = models.FloatField()
    price2 = models.FloatField()
    package = models.CharField(max_length=50)
    img = models.CharField(max_length=50, default='None')
    small_img = models.CharField(max_length=50)
    middle_img = models.CharField(max_length=50)
    big_img = models.CharField(max_length=50)
    class Meta:
        db_table = 'goods'

# 订单数据表
class Order(models.Model):
    order_id = models.CharField(max_length=50)
    user = models.ForeignKey(User)
    total_price = models.FloatField(default=0)
    id_pied = models.BooleanField(default=0)
    class Meta:
        db_table = 'order'

# 购物车数据表
class Cart(models.Model):
    user = models.ForeignKey(User)
    goods = models.ForeignKey(Goods)
    num = models.IntegerField(default=1)
    order = models.ForeignKey(Order, null=True)
    is_order = models.BooleanField(default=False)
    all_price = models.FloatField(default=0)
    is_select = models.BooleanField(default=True)
    class Meta:
        db_table='cart'

