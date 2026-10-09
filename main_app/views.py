from django.shortcuts import render

# Create your views here.
def main_page(request):
    return render(request, 'main_app/main.html')

def cart_page(request):
    return render(request, 'main_app/cart.html')

def shop_page(request):
    return render(request, 'main_app/shop.html')