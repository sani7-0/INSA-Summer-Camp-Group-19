from rest_framework import generics  
from rest_framework.permissions import AllowAny , IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .serializers import PostSerializer, CommentSerializer
from .models import Post

# PostCreateView: Use PostSerializer, allow any permission, handle POST to create Post
class PostCreateView(generics.CreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = PostSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save(author=request.user)  # Set author from authenticated user
            return Response({"message": "Post created successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# CommentCreateView: Use CommentSerializer, allow any permission, handle POST to create Comment
class CommentCreateView(generics.CreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = CommentSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response({"message": "Comment created successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class PostListView(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.all()