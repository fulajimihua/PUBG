# -*- coding: utf-8 -*-
# Generated by Django 1.11.18 on 2019-07-20 09:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0019_order_total_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='is_order',
            field=models.BooleanField(default=False),
        ),
    ]
