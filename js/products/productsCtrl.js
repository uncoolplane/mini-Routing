angular.module('miniroute').controller('productsCtrl', function($scope, productsService) {
  $scope.shoeData = productsService.shoeData;
  $scope.sockData = productsService.sockData;
})
