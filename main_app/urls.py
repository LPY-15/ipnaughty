from django.urls import path
from . import views

urlpatterns = [
    path('', views.main_page, name = 'main'),
    path('cart/', views.cart_page, name = 'cart'),
    path('shop/', views.shop_page, name= 'shop'),
]