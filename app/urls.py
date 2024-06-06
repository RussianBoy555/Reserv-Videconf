from django.urls import path , include
from django.contrib import admin
from .views import calendary, reserve, user_panel , moderatorlist
from django.views.generic import TemplateView
from rest_framework import routers
from app import views
from rest_framework.documentation import include_docs_urls

# api versioning
router = routers.DefaultRouter()
router.register(r'Moderator', views.ModeratorView, 'Moderator')
router.register(r'Local', views.LocalView, 'Local')
router.register(r'Loguin', views.LoguinView, 'Loguin')
router.register(r'Request', views.RequestView, 'Request')
router.register(r'Reserve', views.ReserveView, 'Reserve')
router.register(r'User', views.UserView, 'User')

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/v1/", include(router.urls)),
    path('', calendary, name="calendary"),
    path('reserve/', reserve, name="reserve"),
    path('user_panel/', user_panel, name="user_panel"),
    path('moderatorlist/', moderatorlist.as_view(), name="moderatorlist"),
    path('docs/', include_docs_urls(title = "Reserva Api"))
    
]

