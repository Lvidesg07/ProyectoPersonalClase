from rest_framework import viewsets
from .models import Producto, ProductoProveedor
from .serializers import ProductoSerializer, ProductoProveedorSerializer

# Create your views here.
class PIProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class PIProductoProveedorViewSet(viewsets.ModelViewSet):
    queryset = ProductoProveedor.objects.all()
    serializer_class = ProductoProveedorSerializer