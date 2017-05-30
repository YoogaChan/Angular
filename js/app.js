var mobileStoreApp = angular.module('mobileStoreApp',[
    'ngRoute','ngAnimate','mobileStoreCtrls'
    ,'mobileStoreFilters',
    'mobileStoreServices','mobileStoreDirectives'
]);
//定义注册列表（可以理解为注入的模块(自定义对象)）  ngRoute 路由 ngAnimate 动画  自定义模块

//模块配置
mobileStoreApp.config(function ($routeProvider) {
// config 函数用于配置路由规则。
// 通过使用 configAPI，我们请求把$routeProvider注入到我们的配置函数
// 并且使用$routeProvider.whenAPI来定义我们的路由规则。
// $routeProvider 为我们提供了 when(path,object) & otherwise(object) 函数按顺序定义所有路由
//函数包含两个参数:第一个参数是 URL,第二个参数是路由配置对象。
    $routeProvider.when('/hello',{
        templateUrl:'tpls/hello.html', //templateUrl 类似 URL  查找（html模板文件）的路径
        controller:'HelloCtrl'         //路由配置对象
    }).when('/list',{
        templateUrl:'tpls/mobileList.html',
        controller:'MobileListCtrl'
    }).when('/userlist',{
        templateUrl:'tpls/guestList.html',
        controller:'MobileListCtrl'
    }).otherwise({
        redirectTo: '/hello‘
       //redirectTo 重定向的地址。
    });

});
