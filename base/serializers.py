from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Test


class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = '__all__'



        #    fields =  ['id','name','age', 'sex', 'location', 'oncho', 'schisto', 'lf', 'helminths', '']

  