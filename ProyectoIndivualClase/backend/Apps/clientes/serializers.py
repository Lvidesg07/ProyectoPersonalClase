from rest_framework import serializers
from .models import Cliente, Telefono

class PIClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields= '__all__'

class PITelefonoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Telefono
        fields= '__all__'