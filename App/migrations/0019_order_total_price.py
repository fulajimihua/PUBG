# -*- coding: utf-8 -*-
# Generated by Django 1.11.18 on 2019-07-20 09:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0018_order'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='total_price',
            field=models.FloatField(default=0),
        ),
    ]
