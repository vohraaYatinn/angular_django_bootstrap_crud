from django.db import models

# Create your models here.
class Todo(models.Model):
    todo_name=models.CharField(max_length=255)