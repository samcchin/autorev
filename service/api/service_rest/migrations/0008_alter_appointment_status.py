# Generated by Django 4.0.3 on 2023-06-07 21:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0007_alter_appointment_vin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='status',
            field=models.CharField(default='created', max_length=100),
        ),
    ]