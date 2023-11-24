# Generated by Django 4.2.7 on 2023-11-14 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Proveedor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=80)),
                ('direccion', models.CharField(max_length=80)),
                ('telefono', models.CharField(max_length=80)),
                ('email', models.CharField(max_length=80)),
            ],
            options={
                'db_table': 'proveedores',
            },
        ),
        migrations.CreateModel(
            name='TipoProducto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=80)),
                ('descripcion', models.CharField(max_length=80)),
            ],
            options={
                'db_table': 'tipo_productos',
            },
        ),
    ]
