"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from apps.Group.views import GroupListCreateView, GroupDestroyView, GroupUpdateView
from apps.User.views import UserListCreateView, UserUpdateView, UserDestroyView

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('users', UserListCreateView.as_view(), name='User_list_create'),
    path('users/<int:pk>/update', UserUpdateView.as_view(), name='User_edit'),
    path('users/<int:pk>/delete', UserDestroyView.as_view(), name='User_delete'),
    path('groups', GroupListCreateView.as_view(), name='Group_list_create'),
    path('groups/<int:pk>/delete', GroupDestroyView.as_view(), name='Group_delete'),
    path('groups/<int:pk>/update', GroupUpdateView.as_view(), name='Group_edit'),
]
