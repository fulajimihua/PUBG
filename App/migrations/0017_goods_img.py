# -*- coding: utf-8 -*-
# Generated by Django 1.11.18 on 2019-07-19 02:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0016_cart_all_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='goods',
            name='img',
            field=models.CharField(default='None', max_length=50),
        ),
    ]