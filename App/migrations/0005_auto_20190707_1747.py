# -*- coding: utf-8 -*-
# Generated by Django 1.11.18 on 2019-07-07 09:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('App', '0004_auto_20190707_1736'),
    ]

    operations = [
        migrations.CreateModel(
            name='Floor_banner',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'floor_banner',
            },
        ),
        migrations.CreateModel(
            name='Floor_img',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'floor_img',
            },
        ),
        migrations.CreateModel(
            name='Floor_title',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
            ],
            options={
                'db_table': 'floor_title',
            },
        ),
        migrations.RemoveField(
            model_name='floor',
            name='floor_banner_id',
        ),
        migrations.RemoveField(
            model_name='floor',
            name='floor_img',
        ),
        migrations.RemoveField(
            model_name='floor',
            name='floor_title',
        ),
        migrations.AddField(
            model_name='floor',
            name='floor_banner',
            field=models.ManyToManyField(to='App.Floor_banner'),
        ),
        migrations.AddField(
            model_name='floor',
            name='floor_img',
            field=models.ManyToManyField(to='App.Floor_img'),
        ),
        migrations.AddField(
            model_name='floor',
            name='floor_title',
            field=models.ManyToManyField(to='App.Floor_title'),
        ),
    ]
