

from django.http import JsonResponse
from django.shortcuts import redirect, reverse
from django.utils.deprecation import MiddlewareMixin

from App.models import User


class UserLoginMiddleware(MiddlewareMixin):

    def process_request(self,request):
        # 需要验证的path
        path_list1 = [
            '/pubg/cart/',
            '/pubg/ordersubmit/',
            '/pubg/orders/',
            '/pubg/order/(.*?)/',
            '/pubg/logout/',
            '/pubg/ordersubmit/',
        ]  # render
        path_list2 = [
            '/pubg/addgoods/',
            '/pubg/gettotalprice/',
            '/pubg/submitorder/',
            '/pubg/cartadd/',
            '/pubg/cartreduce/',
            '/pubg/addgoods/',
            '/pubg/altercheckbox/',
            '/pubg/deletecart/',
            '/pubg/allselect/',
            '/pubg/cancelallselect/',
            '/pubg/gettotalprice/',
            '/pubg/deleteorder/',
        ]
        path_list = path_list1 + path_list2

        if request.path in path_list:

            # 是否登录
            username = request.session.get('username')
            if not username:
                if request.path in path_list1:
                    return redirect(reverse('App:login'))
                else:
                    data = {
                        'status': 0,
                        'msg': '您尚未登录， 请先登录!'
                    }
                    return JsonResponse(data)
            else:
                try:
                    user = User.objects.get(username=username)
                    request.user = user

                except:
                    if request.path in path_list1:
                        return redirect(reverse('App:login'))
                    else:
                        data = {
                            'status': -2,
                            'msg': '用户不存在!'
                        }
                        return JsonResponse(data)