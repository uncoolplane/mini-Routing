angular.module('miniroute', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home',
    {
        url: '/',
        templateUrl: 'home/home.html',
        controller: 'homeCtrl'
    })
    .state('products',
      {
          url: '/products/:id',
          templateUrl: 'products/products.html',
          controller: 'productsCtrl'
      })
    .state('settings',
      {
          url: '/settings',
          templateUrl: 'settings/settings.html',
          controller: 'settingsCtrl'
      });

      $urlRouterProvider.otherwise('/');
})
