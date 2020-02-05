from rest_framework import serializers
from lead.models import Lead

# Lead serializer


class LeadSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lead
        fields = '__all__'
