# Generated by Django 4.0.3 on 2023-06-06 04:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0002_remove_automobilevo_import_href_automobilevo_color_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='status',
            field=models.CharField(choices=[('canceled', 'canceled'), ('created', 'created'), ('finished', 'finished')], default='created', max_length=100),
        ),
    ]
