# backend/lotto/models.py
from django.db import models
from django.contrib.auth.models import User


class User(models.Model):
    GENDER_CHOICES = [
        ('M', '남성'),
        ('F', '여성'),
    ]
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nickname = models.CharField(max_length=100)
    city = models.CharField(max_length=20)  # 도시 (ex: 서울특별시)
    district = models.CharField(max_length=20)  # 구/군 (ex: 강남구)
    occupation_category = models.CharField(max_length=20)  # 직업 카테고리
    occupation = models.CharField(max_length=20)  # 세부 직업
    age = models.IntegerField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    auth_provider = models.CharField(max_length=20)  # NATIVE, NAVER, KAKAO, GITHUB, GOOGLE
    
    class Meta:
        db_table = 'user_profile'
        verbose_name = '사용자 프로필'
        verbose_name_plural = '사용자 프로필들'

    def __str__(self):
        return f"{self.user.username}의 프로필"

class LottoUsage(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    usage_count = models.IntegerField(default=0)
    last_used_at = models.DateTimeField(null=True)

class LottoRecommendation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    numbers = models.CharField(max_length=50)
    round_number = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

class LottoResult(models.Model):
    round_number = models.IntegerField(primary_key=True)
    draw_date = models.DateField()
    winning_numbers = models.CharField(max_length=50)
    bonus_number = models.IntegerField()
    first_prize_amount = models.BigIntegerField()
    first_prize_winners = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

class LottoStore(models.Model):
    store_name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    latitude = models.DecimalField(max_digits=10, decimal_places=8)
    longitude = models.DecimalField(max_digits=11, decimal_places=8)
    first_prize_count = models.IntegerField(default=0)
    second_prize_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class LottoPrediction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    predicted_numbers = models.CharField(max_length=50)
    prediction_date = models.DateTimeField(auto_now_add=True)
    ai_model_version = models.CharField(max_length=50)
    confidence_score = models.DecimalField(max_digits=5, decimal_places=2)

class LottoStatistic(models.Model):
    number = models.IntegerField()
    frequency = models.IntegerField(default=0)
    last_appeared = models.IntegerField(null=True)
    consecutive_count = models.IntegerField(default=0)
    updated_at = models.DateTimeField(auto_now=True)

class StoreWinningHistory(models.Model):
    store = models.ForeignKey(LottoStore, on_delete=models.CASCADE)
    round_number = models.ForeignKey(LottoResult, on_delete=models.CASCADE)
    prize_rank = models.IntegerField()
    winning_date = models.DateField()
    prize_amount = models.BigIntegerField()

class UserFavoriteNumber(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    numbers = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)