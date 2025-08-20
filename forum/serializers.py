from rest_framework import serializers
from .models import Post, Comment


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id','author','title', 'content', 'image', 'video' , 'url', 'created_at')
        read_only_fields = ('id', 'author', 'created_at')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id','author','post','content','created_at','parent_comment')
        read_only_fields = ('id','author','post','created_at')

