from rest_framework import viewsets, permissions
from .serializers import LeadSerializer
from .models import Lead


class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permissions_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = LeadSerializer

   # def get_queryset(self):
    # return self.request.user.lead.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
