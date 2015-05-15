angular.module('townLines.controller', [])

.controller('townLinesCtrl', function($scope, $stateParams, townLinesFactory) {

    townLinesFactory.getTownLines($stateParams.townId)
        .then(function(townLines) {

            $scope.linesInTown = townLines.data;

        }, function(err) {

            console.error('ERR', err);

        })
})
