from common.json import ModelEncoder
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from django.shortcuts import render

from .models import AutomobileVO, Salesperson, Sale, Customer


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
    ]


class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id",
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "id",
    ]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "id",
        "price",
        "automobile",
        "salesperson",
        "customer",
    ]

    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalespersonEncoder(),
        "customer": CustomerEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_salespeople(request):
    if request.method == "GET":
        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespersonEncoder,
        )
    else:   # POST
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False,
            )
        except ValueError:
            response = JsonResponse(
                {"message": "Could not create the salesperson"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_salesperson(request, pk):
    if request.method == "GET":
        try:
            salesperson = Salesperson.objects.get(id=pk)
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            salesperson = Salesperson.objects.get(id=pk)
            salesperson.delete()
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False,
            )
        except Salesperson.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else:  # PUT
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.get(id=pk)

            props = ["name"]
            for prop in props:
                if prop in content:
                    setattr(salesperson, prop, content[prop])
            salesperson.save()
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False,
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        try:
            print("content from json.loads", content)
            vin = content["automobile"]
            automobile = AutomobileVO.objects.get(vin=vin)
            print("automobile retrieved as matching vin:", automobile)
            if automobile.sold:
                return JsonResponse(
                    {"message": "This automobile has been sold already!"}
                )
            else:
                automobile.sold = True
                automobile.save()
                content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid vin number"},
                status=400,
            )

        try:
            salesperson_id = content["salesperson"]
            salesperson = Salesperson.objects.get(id=salesperson_id)
            content["salesperson"] = salesperson
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid salesperson id"},
                status=400,
            )

        try:
            customer_id = content["customer"]
            customer = Customer.objects.get(id=customer_id)
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer id"},
                status=400,
            )

        sale = Sale.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET"])
def api_sale(request, pk):
    if request.method == "GET":
        try:
            sale = Sale.objects.get(id=pk)
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False
            )
        except Sale.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else:
        try:
            sale = Sale.objects.get(id=pk)
            automobile = AutomobileVO.objects.get(vin=sale.automobile.vin)
            automobile.sold = False
            automobile.save()
            sale.delete()
            return JsonResponse(
                {"message": "deleted"}
            )
        except Sale.DoesNotExist:
            response = JsonResponse({"message": "Invalid Sale ID"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
        )
    else:  # POST
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except ValueError:
            response = JsonResponse(
                {"message": "Could not create the customer"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_customer(request, pk):
    if request.method == "GET":
        try:
            customer = Customer.objects.get(id=pk)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            customer = Customer.objects.get(id=pk)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else:  # PUT
        try:
            content = json.loads(request.body)
            customer = Customer.objects.get(id=pk)

            props = ["name"]
            for prop in props:
                if prop in content:
                    setattr(customer, prop, content[prop])
            customer.save()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET"])
def api_list_automobiles(request):
    automobiles = AutomobileVO.objects.filter(sold=False)
    return JsonResponse(
        {"available_autos": automobiles},
        encoder=AutomobileVOEncoder,
        safe=False
    )
