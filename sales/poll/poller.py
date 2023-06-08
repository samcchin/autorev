import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

from sales_rest.models import AutomobileVO


def get_Automobiles():
    response = requests.get("http://project-beta-inventory-api-1:8000/api/automobiles")
    content = json.loads(response.content)
    for automobile in content["autos"]:
        if automobile["sold"] is True:
            AutomobileVO.objects.update_or_create(
                vin=automobile["vin"],
                defaults={
                    "vin": automobile["vin"],
                    "sold": True,
                },
            )
        else:
            AutomobileVO.objects.update_or_create(
                vin=automobile["vin"],
                defaults={
                    "vin": automobile["vin"],
                },
            )


def poll(repeat=True):
    while True:
        print('Sales poller polling for data')
        try:
            get_Automobiles()
            pass
        except Exception as e:
            print(e, file=sys.stderr)

        if (not repeat):
            break

        time.sleep(60)


if __name__ == "__main__":
    poll()
