from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('tests/', views.getTests ,name="getTests"),
     path('tests/create/', views.createTest ,name="createTest"),
    path('tests/<str:pk>', views.getTest, name="getTest"),
    ]