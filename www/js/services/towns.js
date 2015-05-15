angular.module('town.service', [])

.factory('townsFactory', function($http, ApiEndpoint) {
    return {
        getTowns: function(){
            return $http.get(ApiEndpoint.url + '/Consultar_FamiliasCentros');
        }
    }
});
