from django.db import models

# Create your models here.
# ID, Name, Description, Actions
# UserModel = get_user_model()


class GroupModel(models.Model):
    class Meta:
        db_table = 'group'
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=300)
    # users = models.ForeignKey(UserModel(), on_delete=models.CASCADE)
