from django.db import models
from django.urls import reverse


# Create your models here.
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)
    color = models.CharField(max_length=50, default=False)
    year = models.PositiveSmallIntegerField(default=False)

    def get_api_url(self):
        return reverse("api_show_automobile", kwargs={"pk": self.pk})


class Technician(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.first_name} {self.last_name} [Employee ID: {self.employee_id}]"

    def get_api_url(self):
        return reverse("api_show_technician", kwargs={"pk": self.pk})


class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.TextField()
    status = models.CharField(max_length=100)
    vin = models.CharField(max_length=17, unique=True)
    customer = models.CharField(max_length=100)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE
    )
    vip_status = models.CharField(max_length=100)
    status = models.CharField(max_length=100)


    def get_api_url(self):
        return reverse("api_show_appointment", kwargs={"pk": self.pk})
