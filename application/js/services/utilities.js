
angular.module('cureit')
    .service('utilities', ['$http', function($http) {
        var utilities = this;
        utilities.addSensor = function(data) {
            return $http({
                        method : 'POST',
                        url : 'http://localhost:3000/sensor',
                        //$.param is a jquery function used to implement POST request in angularJS.
                        data : $.param(data),
                        headers : {'Content-Type': 'application/json'}
                });
        };

        utilities.getSensor = function(UserId){
            return $http({
                        method : 'GET',
                        url : 'http://localhost:3000/sensor',
                        params: {UserId: UserId}
                });
        };    

        utilities.addRecord = function(data) {
            return $http({
                        method : 'POST',
                        url : 'http://localhost:3000/record',
                        //$.param is a jquery function used to implement POST request in angularJS.
                        data : $.param(data),
                        headers : {'Content-Type': 'application/json'}
                });
        };

        utilities.getRecord = function(UserId){
            return $http({
                        method : 'GET',
                        url : 'http://localhost:3000/records',
                        params: {UserId: UserId}
                });
        };    




        return utilities;
        
    }]);