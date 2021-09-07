from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Test
from django.views.decorators.common import no_append_slash
from .serializers import TestSerializer
# Create your views here.

@no_append_slash
@api_view(["GET"])
def getRoutes(request):
    routes = [
        "/api/tests/",
        "/api/tests/create/",
        "/api/tests/upload/",
        "/api/tests/<id>/reviews/",
        "/api/tests/top/",
        "/api/tests/<id>",
        "/api/tests/delete/<id>/",
        "/api/tests/<update/<id>",
    ]

    return Response(routes)


@api_view(["GET"])
def getTests(request):
    tests = Test.objects.all().order_by('-enteredAt')
    serializer = TestSerializer(tests, many=True)
    return Response(serializer.data)

@api_view(["POST"])
def createTest(request):
    data = request.data
    
    test = Test.objects.create(
        name=data['name'],
        age=data['age'],
        sex=data['sex'],
        location=data['location']
    )
    serializer = TestSerializer(test,many=False)
    return Response(serializer.data)
   



@api_view(["GET"])
def getTest(request,pk):
    test = Test.objects.get(id=pk)
    serializer = TestSerializer(test, many=False)
    return Response(serializer.data)
