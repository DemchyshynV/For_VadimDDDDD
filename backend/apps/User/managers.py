from django.contrib.auth.base_user import BaseUserManager


class MyUserManager(BaseUserManager):

    def create_user(self, username, password, extra_kwargs):
        if not username:
            raise ValueError("username повинен бути встановлений")
        user = self.model(username=username, **extra_kwargs)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, password, **extra_kwargs):
        extra_kwargs.setdefault('is_staff', True)
        extra_kwargs.setdefault('is_active', True)
        extra_kwargs.setdefault('is_superuser', True)

        if extra_kwargs.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True')
        if extra_kwargs.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True')
        return self.create_user(username, password, extra_kwargs)
