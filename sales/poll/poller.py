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
    url = "http://project-beta-inventory-api-1:8000/api/automobiles/"
    print("poller get_automobiles")
    response = requests.get(url)
    print("response from requests.get(url): ", response)
    content = json.loads(response.content)
    print("content from json.loads(response.content)")
    for automobile in content["automobiles"]:
        print("automobile in content[automobiles]: ", automobile)
        AutomobileVO.objects.update_or_create(
            vin=automobile["vin"],
            sold=automobile["sold"]
        )


def poll(repeat=True):
    while True:
        print('Sales poller polling for data')
        try:
            get_Automobiles()
        except Exception as e:
            print(e, file=sys.stderr)

        if (not repeat):
            break

        time.sleep(60)


if __name__ == "__main__":
    poll()
