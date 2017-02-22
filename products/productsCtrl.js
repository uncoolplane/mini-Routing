angular.module('miniroute').controller('productsCtrl', function($scope, productsService,$stateParams) {
console.log('productsCtrl');
  var id = $stateParams.id;
  if(id === 'shoes') {
    $scope.products = productsService.shoeData;
    $scope.productHeading = "Shoes";
  } else {
    $scope.products = productsService.sockData;
    $scope.productHeading = "Socks";
  }
})
