// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'about.controller'
, 'town.controller', 'town.service'
, 'townLines.controller', 'townLines.service'
, 'lines.controller', 'lines.service'])

.constant('ApiEndpoint', {
  url: 'http://openbizkaibus.appspot.com/api'
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  $stateProvider.state('tab.towns', {
    url: '/towns',
    views: {
      'tab-towns': {
        templateUrl: 'templates/tab-towns.html',
        controller: 'townsCtrl'
      }
    }
  })
  $stateProvider.state('tab.town-lines', {
    url: '/towns/:townId',
    views: {
      'tab-towns': {
        templateUrl: 'templates/tab-town-lines.html',
        controller: 'townLinesCtrl'
      }
    }
  })
  $stateProvider.state('tab.lines', {
    url: '/lines/:lineId',
    views: {
      'tab-towns': {
        templateUrl: 'templates/tab-lines.html',
        controller: 'linesCtrl'
      }
    }
  })
  $stateProvider.state('tab.about', {
    url: '/about',
    views: {
      'tab-about': {
        templateUrl: 'templates/tab-about.html',
        controller: 'aboutCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/towns');
});
