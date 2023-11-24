from rest_framework import viewsets
from .models import Venta, DetalleVenta
from .serializers import VentaSerializer, DetalleVentaSerializer

# Create your views here.
class PIVentaViewSet(viewsets.ModelViewSet):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer

class PIDetalleVentaViewSet(viewsets.ModelViewSet):
    queryset = DetalleVenta.objects.all()
    serializer_class = DetalleVentaSerializer