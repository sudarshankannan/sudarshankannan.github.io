from django.shortcuts import render

# Create your views here.

def my_website(request):
    return render(request, 'my_website.html',{})

