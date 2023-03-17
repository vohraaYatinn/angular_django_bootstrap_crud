from traceback import print_tb
from django.shortcuts import render
from .serializers import TodoSerializer
from .models import Todo
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
# Create your views here.


def todo(request,id=False):
    if request.method == "GET":
        if id!=False:
            todo_tasks = Todo.objects.get(id=id)
            todo_serializer = TodoSerializer(todo_tasks)
        else:
            todo_tasks = Todo.objects.all()
            todo_serializer = TodoSerializer(todo_tasks,many=True)
        return JsonResponse(todo_serializer.data,safe=False)
    if request.method == "POST":
        Json_data = JSONParser().parse(request)
        todo_serializer = TodoSerializer(data=Json_data)
        if todo_serializer.is_valid():
            todo_serializer.save()
            return JsonResponse("added successfully",safe=False)
        return JsonResponse(todo_serializer.data,safe=False)
    if request.method == "PUT":
        Json_data = JSONParser().parse(request)
        todo_tasks = Todo.objects.get(id=Json_data["id"])
        print(todo_tasks)
        todo_serializer = TodoSerializer(todo_tasks,data=Json_data)    
        if todo_serializer.is_valid():
            todo_serializer.save()
        return JsonResponse("edit successfully",safe=False)

    if request.method == "DELETE":
        todo_tasks = Todo.objects.filter(id=id)
        todo_tasks.delete()
        return JsonResponse("deleted successfully",safe=False)
        
    # elif request.method == "POST":
    # elif request.method == "DELETE":
    # elif request.method == "PUT":
