from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.views.generic import ListView
from app.models import *
from rest_framework import viewsets
from .serializer import *

# Create your views here.

class ModeratorView(viewsets.ModelViewSet):
    serializer_class = ModeratorSerializer
    queryset = Moderator.objects.all()


class LocalView(viewsets.ModelViewSet):
    serializer_class = LocalSerializer
    queryset = Local.objects.all()


class LoguinView(viewsets.ModelViewSet):
    serializer_class = LoguinSerializer
    queryset = Loguin.objects.all()


class RequestView(viewsets.ModelViewSet):
    serializer_class = RequestSerializer
    queryset = Request.objects.all()


class ReserveView(viewsets.ModelViewSet):
    serializer_class = ReserveSerializer
    queryset = Reserve.objects.all()


class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()




def calendary(request):
    return render(request, 'app/calendary.html')

def reserve(request):
    return render(request, 'app/reserve.html')

def user_panel(request):
    
    if request.method == 'GET':
        return render(request, 'app/user_panel.html', {'form': UserCreationForm}) 
    else:
        if request.POST ['password1'] == request.POST['password1']:
            try:
                user = User.objects.create_user(username=request.POST['username'],  
                password=request.POST['password1'])
                user.save()
                return render(request, 'app/reserve.html')
            except:
                return render(request, 'app/user_panel.html', {'form': UserCreationForm,
                "error": 'Username already exist'})
        
        return render(request, 'app/user_panel.html', {'form': UserCreationForm,
                "error": 'Password do not match'})


# Listas

class moderatorlist(ListView):
    model = Moderator
    template_name = 'Moderator/moderatorlist.html'


class Locallist(ListView):
    model = Local
    template_name = 'Local/locallist.html'


class Loguinlist(ListView):
    model = Loguin
    template_name = 'Loguin/loguinlist.html'


class Requestlist(ListView):
    model = Request
    template_name = 'Request/requestlist.html'


class Reservelist(ListView):
    model = Reserve
    template_name = 'Reserve/reservelist.html'


class Userlist(ListView):
    model = User
    template_name = 'User/userlist.html'