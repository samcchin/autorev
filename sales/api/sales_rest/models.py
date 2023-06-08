from django.db import models


class Salesperson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=100)


class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.CharField(max_length=400)
    phone_number = models.CharField(max_length=20)


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=20, unique=True)
    sold = models.BooleanField(default=False)


class Sale(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sale",
        on_delete=models.PROTECT,
    )
    salesperson = models.ForeignKey(
        Salesperson,
        related_name="sale",
        on_delete=models.PROTECT,
    )
    customer = models.ForeignKey(
        Customer,
        related_name="sale",
        on_delete=models.PROTECT,
    )
    price = models.DecimalField(max_digits=20, decimal_places=2)
