# -*- coding: utf-8 -*-
# Generated by Django 1.11.18 on 2019-07-07 11:15
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0006_auto_20190707_1912'),
    ]

    operations = [
        migrations.AddField(
            model_name='floor',
            name='floor_goods',
            field=models.ManyToManyField(to='App.Floor_goods'),
        ),
    ]
