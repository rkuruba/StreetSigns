from django.core.files.storage import FileSystemStorage
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.generic import TemplateView

from . import util

# Create your views here.


def index(request):
    context = {}
    if request.method == 'POST':
        context = util.detectTrafficSign(request)
    context['title'] = 'Street Sign Recognition'
    return render(request, 'index.html', context=context)


def trafficinfomation(request):
    context = {}
    context['title'] = 'Street Sign Index'
    return render(request, 'trafficinfomation.html', context=context)
