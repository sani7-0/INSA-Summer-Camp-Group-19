from django.urls import path
from .views import PostCreateView , CommentCreateView , PostListView ,CommentListView, PostDetailView

urlpatterns =[
    path('posts/', PostCreateView.as_view(), name='post-create'),
    path('comments/', CommentCreateView.as_view(), name='comment-create'),
    path('posts/list/', PostListView.as_view(), name='post-list'),
    path('posts/<int:pk>/comments/', CommentListView.as_view(), name= 'comment-list'),   #<int:post_id> captures the post ID to filter comments.
    path('posts/<int:pk>/', PostDetailView.as_view() , name='post-detail'),
    ]