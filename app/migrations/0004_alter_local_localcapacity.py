# Generated by Django 5.0.6 on 2024-05-24 00:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_alter_moderator_idmoderator'),
    ]

    operations = [
        migrations.AlterField(
            model_name='local',
            name='localCapacity',
            field=models.PositiveSmallIntegerField(default=0),
        ),
    ]
