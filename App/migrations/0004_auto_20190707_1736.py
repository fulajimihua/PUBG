# -*- coding: utf-8 -*-
# Generated by Django 1.11.18 on 2019-07-07 09:36
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0003_floor_goods'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='floor',
            table='floor',
        ),
        migrations.AlterModelTable(
            name='goods',
            table='goods',
        ),
    ]