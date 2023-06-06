from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointment


# Encoders
class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
        "color",
        "year",
        "id"
    ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "first_name",
        "last_name",
        "employee_id"
    ]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "date_time",
        "reason",
        "status",
        "vin",
        "customer",
        "technician",
        "vip_status",
        "status"
    ]

    encoders = {
        "technician": TechnicianEncoder(),
    }


# GET & POST Technicians (Create & List Technicians)
@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder
        )
    else:  # POST / Create a technician
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False
        )


# Delete, Update and Get Technician Details
@require_http_methods(["DELETE", "PUT", "GET"])
def api_show_technician(request, pk):
    if request.method == "DELETE":
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse(
            {"deleted": count > 0}
        )
    elif request.method == "PUT":
        try:
            body = json.loads(request.body)
            Technician.objects.filter(id=pk).update(**body)
            technician = Technician.objects.get(id=pk)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician id"},
                status=400
            )
    else:  # "request.method == GET"
        technician = Technician.objects.get(id=pk)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False
        )


# GET & POST Appointments (Create & List Appointments)
@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder
        )
    else:  # POST / Create a technician
        content = json.loads(request.body)
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False
        )


# Delete, Update and Get Appointment Details
@require_http_methods(["DELETE", "PUT", "GET"])
def api_show_appointment(request, pk):
    if request.method == "DELETE":
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse(
            {"deleted": count > 0}
        )
    elif request.method == "PUT":
        try:
            content = json.loads(request.body)
            appointment = Appointment.objects.get(id=pk)
            props = ["status"]
            for prop in props:
                if prop in content:
                    setattr(appointment, prop, content[prop])
            appointment.save()
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid appointment"},
                status=400
            )
    else:  # "request.method == GET"
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False
        )


# Get list of AutomobileVOs
@require_http_methods(["GET"])
def api_list_automobileVO(request):
    automobiles = AutomobileVO.objects.all()
    return JsonResponse(
        {"automobiles": automobiles},
        encoder=AutomobileVOEncoder
    )


# Get service history - list of appointments (Based on VIN)
@require_http_methods(["GET"])
def api_show_service_history(request, vin):
    appointments = Appointment.objects.filter(id=vin)
    return JsonResponse(
        {"appointments": appointments},
        encoder=AppointmentEncoder
    )
