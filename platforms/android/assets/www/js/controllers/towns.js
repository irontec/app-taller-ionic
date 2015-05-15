angular.module('town.controller', [])

.controller('townsCtrl', function($scope, townsFactory) {

  townsFactory.getTowns()
  .then(function(towns) {

    $scope.lineGroups = towns.data;

  }, function(err) {

    console.error('ERR', err);

  })
})

.filter('numberFixedLen', function () {
  return function (n, len) {
      var num = parseInt(n, 10);
      len = parseInt(len, 10);
      if (isNaN(num) || isNaN(len)) {
          return n;
      }
      num = ''+num;
      while (num.length < len) {
          num = '0'+num;
      }
      return num;
  };
})
