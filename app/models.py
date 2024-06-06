from django.db import models
from datetime import datetime


class Moderator(models.Model):
    idModerator = models.PositiveIntegerField(default=0)
    moderatorName = models.CharField(max_length=150, verbose_name='ModeratorName')
    email = models.EmailField(default = "")
    phoneNumber = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.moderatorName
    
    

class Local(models.Model):
    moderator = models.ForeignKey(Moderator, on_delete=models.CASCADE)
    localName = models.CharField(max_length=150,verbose_name='LocalName')
    localAddress = models.CharField(max_length=500 , verbose_name='LocalAddress')
    localCapacity=models.PositiveSmallIntegerField(default=0)

    def __str__(self):
        return self.localName
    
    

class Loguin(models.Model):
    userName = models.CharField(max_length=150 , verbose_name='UserName')
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.userName
    
    
    
class Request(models.Model):
    idUser = models.PositiveIntegerField(default=0)
    reserveDetail = models.CharField(max_length=200, verbose_name='ReserveDetail')
    
    def __str__(self):
        return str(self.idUser)
    
    
   

class Reserve(models.Model):
    vcName = models.CharField(max_length=150,verbose_name='VcName')
    vcMotive = models.CharField(max_length=200,verbose_name='VcMotive')
    idofModerator = models.ForeignKey(Moderator, on_delete=models.CASCADE)
    #requestArea = models
    url = models.URLField()
    #agregar finalidad de reserva , estado , 
    platafom = models.CharField(max_length=150)
    weCreators = models.BooleanField(default = False,verbose_name='Somos Creadores?' )
    dateTime = models.DateTimeField(auto_now=True, verbose_name='DateTime')
    duration = models.TimeField(auto_now=True, verbose_name='Duration')
    cantpart = models.PositiveSmallIntegerField(default=0, verbose_name= 'Cantidad  de Participantes')
    observations = models.TextField(blank=True, verbose_name= 'Observaciones')

    def __str__(self):
        return 'Nro: {} / Nombre de Videoconferencia {}' .format(self.id, self.vcName)
    
    
        

class User(models.Model):
    userName = models.CharField(max_length=150,verbose_name='userName')
    password = models.CharField(max_length=50)
    email = models.EmailField(default = "")

    def __str__(self):
        return 'Nro: {} / Nombre del Usuario{}' .format(self.id, self.userName)
    
   

