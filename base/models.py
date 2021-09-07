from django.db import models
from django.contrib.auth.models import User
from .utils import getImages
# Create your models here.
class Test(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    age = models.IntegerField( null=True, blank=True)
    sex = models.CharField(max_length=200, null=True, blank=True)
    location = models.CharField(max_length=200, null=True, blank=True)
    oncho =models.CharField(max_length=200, null=True, blank=True)
    schisto =models.CharField(max_length=200, null=True, blank=True)
    lf = models.CharField(max_length=200, null=True, blank=True)
    helminths = models.CharField(max_length=200, null=True, blank=True)
    enteredAt = models.DateTimeField(auto_now_add=True)
    onchoImage = models.ImageField(null=True,blank=True)
    schistoImage =  models.ImageField(null=True,blank=True)
    lfImage = models.ImageField(null=True,blank=True)
    helminthsImage =  models.ImageField(null=True,blank=True)
   
  

    def __str__(self):
        return self.name

    

