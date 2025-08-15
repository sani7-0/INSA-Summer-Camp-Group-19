from django.urls import path
from .views import PostCreateView , CommentCreateView , PostListView

urlpatterns =[
    path('posts/', PostCreateView.as_view(), name='post-create'),
    path('comments/', CommentCreateView.as_view(), name='comment-create'),
    path('posts/list/', PostListView.as_view(), name='post-list'),
    ]