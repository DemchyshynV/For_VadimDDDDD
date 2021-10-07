from rest_framework.generics import ListCreateAPIView, DestroyAPIView, UpdateAPIView

# Create your views here.
from apps.Group.models import GroupModel
from apps.Group.serializers import GroupSerializer


class GroupListCreateView(ListCreateAPIView):
    queryset = GroupModel.objects.all()
    serializer_class = GroupSerializer


class GroupDestroyView(DestroyAPIView):
    queryset = GroupModel.objects.all()
    serializer_class = GroupSerializer


class GroupUpdateView(UpdateAPIView):
    queryset = GroupModel.objects.all()
    serializer_class = GroupSerializer
