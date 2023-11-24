from rest_framework import viewsets
from .models import Cliente, Telefono
from .serializers import ClienteSerializer, TelefonoSerializer

# Create your views here.
class PIClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class PITelefonoViewSet(viewsets.ModelViewSet):
    queryset = Telefono.objects.all()
    serializer_class = TelefonoSerializer
