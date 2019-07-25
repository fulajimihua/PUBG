from django.conf.urls import url, include
from django.contrib import admin

from App.views import index

urlpatterns = [
    url('admin/', admin.site.urls),
    url('pubg/', include('App.urls', namespace='App')),
    url('', index),
]
