from rest_framework import viewsets, permissions
from .serializers import LeadSerializer
from .models import Lead


class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer
