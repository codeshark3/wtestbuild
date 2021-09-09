from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import serializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Test
# from .utils import get_images

# from PIL import Image
# import numpy as np
from django.views.decorators.common import no_append_slash
from .serializers import TestSerializer
# Create your views here.
from pathlib import Path
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
    tests = Test.objects.all().order_by('-created_at')
    serializer = TestSerializer(tests, many=True)
    return Response(serializer.data)

@api_view(["POST"])
def createTest(request):
    data = request.data
   
    test = Test.objects.create(
        name=data['name'],
        age=data['age'],
        sex=data['sex'],
        location=data['location'],
        onchoImage = request.FILES.get('onchoImage'),
        
        schistoImage = request.FILES.get('schistoImage'),
        lfImage = data['lfImage'],
        helminthsImage = data['helminthsImage'],
        
      

    )
    serializer = TestSerializer(test,many=False)
    return Response(serializer.data)
   
# @api_view("PUT")
# def processImage(request):
#     data = request.data  
   
   
 
  
      
#     # schistoImage = data['schistoImage'],
#     # lfImage = data['lfImage'],
#     # helminthsImage = data['helminthsImage'],
#     test = Test.objects.get(id      
#     )  

#     serializer = TestSerializer(test, )
#     return Response(serializer.data)

@api_view(["GET"])
def getTest(request,pk):
    test = Test.objects.get(id=pk)
    serializer = TestSerializer(test, many=False)
    return Response(serializer.data)
