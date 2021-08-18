from django.urls import path
from my_website import views

urlpatterns = [
    path('', views.my_website, name='my_website'),
]
