var mobileStoreCtrls=angular.module('mobileStoreCtrls',[]); //定义控制器模块

mobileStoreCtrls.controller("HelloCtrl",['$scope','$location',
  function ($scope,$location) {
      $scope.hello = {
          text: '欢迎来到'
      };
      console.log($location.path());
  }
]);
mobileStoreCtrls.controller("MobileListCtrl",['$scope',
    function ($scope) {
        $scope.mobiles = [
            {title: '映众 GTX1070 X4冰龙超级版 ICHILL 1771/8200MHz 8GB/256Bit GDDR5 PCI-E显卡', price: '￥2999.00'},
            {title: '华硕（ASUS）ROG STRIX-GTX1080TI-O11G-GAMING 1569-1708MHz 11G/11100MHz GDDR5X PCI-E3.0显卡', price: '￥6398.00'},
            {title: '七彩虹(Colorful)iGame1070烈焰战神U-8GD5 Top GTX1070 1569-1759MHz/8008MHz 8G/256bit GDDR5游戏显卡', price: '￥3099.00'},
            {title: '技嘉（GIGABYTE） GTX1070 G1 GAMING 1594-1784MHz/8008MHz 8G/256bit GDDR5显卡}', price: '￥3199.00'}
        ];
        $scope.users = [
            {name: 'Inno',phone:'10086'},
            {name: 'ASUS',phone:'10010'},
            {name: 'colorful',phone:'10000'},
            {name: 'GIGABYTE',phone:'12345'}
        ];
    }
]);
