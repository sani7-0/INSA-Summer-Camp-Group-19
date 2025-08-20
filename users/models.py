from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractUser , Group , Permission # Added for AbstractUser

# Create your models here.


#user model
class User(AbstractUser):
    username = models.CharField(max_length=50,unique=True)
    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']
    groups = models.ManyToManyField(Group,related_name='custom_user_set',blank=True)
    user_permissions = models.ManyToManyField(Permission,related_name='custom_user_set',blank=True)


    def __str__(self):
        return self.username
    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    about = models.TextField(max_length=500, blank=True)
    join_date = models.DateField(auto_now_add=True)
    social_account = models.URLField(max_length=200, blank=True, null=True, help_text='Link to social profile')
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)   

    def __str__(self):
        return f"{self.user.username}'s profile"
    
class Role(models.Model):
    ROLE_CHOICES = (
        ('Admin', 'Admin'),
        ('Staff', 'Staff'),
        ('Student', 'Student'),
    )
    name = models.CharField(max_length=20, choices=ROLE_CHOICES, default='Student')
    user = models.ManyToManyField(User, related_name='roles')

    def __str__(self):
        return self.name