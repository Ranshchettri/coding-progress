from django.http import HttpResponse
from django.shortcuts import render

def aboutUs(request):
    return  HttpResponse("<b>This is the about us page</b>")

def course(request):
    return HttpResponse("This is the course page")

# dynamically using routes*********************
def courseDetails(request,courseid):
    return HttpResponse(courseid)

def Home(request):
    data={
        'title': 'New Home',
         'User_Detail':[
             {'uername':"Ransh",'age':20},
             {'uername':"roshan",'age':22},
         ]
        }
    return render(request,"index.html",data)