from django.contrib.auth import get_user_model
from rest_framework.generics import ListCreateAPIView, DestroyAPIView, UpdateAPIView

from apps.User.serializers import UserSerializer

UserModel = get_user_model()
# Create your views here.


class UserListCreateView(ListCreateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer


class UserUpdateView(UpdateAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer


class UserDestroyView(DestroyAPIView):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
