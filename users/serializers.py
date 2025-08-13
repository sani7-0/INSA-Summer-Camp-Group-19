from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from .models import User


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True,required=True,validators=(validate_password))

    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('email','username','password','password2')

        def validaate(self,attrs):
            if attrs['password']  != attrs['password2']:
                raise serializers.ValidationError({"password": "passwords must match."})
            return attrs
        
        def create(self, validated_data):
            validated_data.pop('password2')
            user = User.objects.create(
                email = validated_data['email'],
                username=validated_data['username']
            )
            user.set_password(validated_data['password'])
            user.save()
            return user
            