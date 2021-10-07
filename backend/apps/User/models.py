from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models

# username – User nickname
# created – Date of creating the user
# group - Group, to which the user will be added
from apps.Group.models import GroupModel
from apps.User.managers import MyUserManager


# Create your models here.

class UserModel(AbstractBaseUser, PermissionsMixin):
    class Meta:
        db_table = 'users'
    username = models.CharField(max_length=50, unique=True)
    create_date = models.DateField(auto_now_add=True)
    group = models.ForeignKey(GroupModel, models.PROTECT, 'user')

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    objects = MyUserManager()
