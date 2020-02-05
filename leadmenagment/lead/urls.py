from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter()
router.register('api/lead', LeadViewSet, 'lead')

urlpatterns = router.urls
