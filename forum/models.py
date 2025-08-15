from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.

class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL , on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content =models.TextField(blank=False)
    image = models.ImageField(upload_to='forum/posts', null=True, blank=True)
    video = models.FileField(upload_to='forum/posts', null=True, blank=True)
    url = models.URLField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Comment(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    parent_comment = models.ForeignKey('self' ,on_delete=models.SET_NULL , null=True, blank=True)

    def __str__(self):
        try:
            return self.author.username
        except AttributeError:
            return "Anonymous Comment"
    
