angular.module('townLines.service', [])

.factory('townLinesFactory', function($http, ApiEndpoint) {
    return {
        getTownLines: function(townId){
            return $http.get(ApiEndpoint.url + '/LineasMunicipio?codmunicipio=' + townId);
        }
    }
});
