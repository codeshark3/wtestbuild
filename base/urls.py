from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('tests/', views.getTests ,name="routes"),
    path('tests/<str:pk>', views.getTest, name="routes"),
    ]