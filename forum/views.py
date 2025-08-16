from rest_framework import generics  
from rest_framework.permissions import AllowAny , IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .serializers import PostSerializer, CommentSerializer
from rest_framework.generics import RetrieveAPIView
from .models import Post , Comment

# PostCreateView: Use PostSerializer, allow any permission, handle POST to create Post
class PostCreateView(generics.CreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = PostSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save(author=request.user)  # Set author from authenticated user
            post = serializer.instance
            return Response({"message": "Post created successfully", "post_id": post.id}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# CommentCreateView: Use CommentSerializer, allow any permission, handle POST to create Comment
class CommentCreateView(generics.CreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = CommentSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            post_id = request.data.get('post')
            if not post_id or not Post.objects.filter(id=post_id).exists():
                return Response({"error": "Invalid or missing post ID"}, status=status.HTTP_400_BAD_REQUEST)
            serializer.save(author=request.user, post_id=post_id)
            return Response({"message": "Comment created successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class PostListView(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = PostSerializer

    def get_queryset(self):
        return Post.objects.all()
    
class PostDetailView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
class CommentListView(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = CommentSerializer

    def get_queryset(self):
        pk = self.kwargs.get('pk')
        if pk:
            return Comment.objects.filter(post_id=pk)
        return Comment.objects.none()
    
