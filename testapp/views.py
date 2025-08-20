from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

class TestAuthView(generics.GenericAPIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        return Response({"message": "you are authenticated!", "user": request.user.username})