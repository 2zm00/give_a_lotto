# backend/lotto/validators.py
from django.core.exceptions import ValidationError
from .constants import OCCUPATIONS, LOCATIONS

def validate_occupation(occupation_category, occupation):
    valid_categories = [cat['category'] for cat in OCCUPATIONS]
    if occupation_category not in valid_categories:
        raise ValidationError('유효하지 않은 직업 카테고리입니다.')
    
    category = next(cat for cat in OCCUPATIONS if cat['category'] == occupation_category)
    if occupation not in category['jobs']:
        raise ValidationError('유효하지 않은 직업입니다.')

def validate_location(city, district):
    if city not in LOCATIONS:
        raise ValidationError('유효하지 않은 도시입니다.')
    
    if district not in LOCATIONS[city]:
        raise ValidationError('유효하지 않은 구/군입니다.')