angular.module('cureit')
    .controller('record_controller',['$scope','utilities','$cookies',
        function($scope,utilities,$cookies)
            {
            console.log("controller loaded record");
            $scope.detl = {};
            $scope.detl.UserId = $cookies.get('userid');
            $scope.prev_reading = {};
            utilities.getRecord($scope.detl.UserId)
                .success(function(response){  
                        console.log("responses");
                        $scope.prev_reading = response.values;
                        console.log(response);

                });

        
            console.log($scope.detl);
/*
            $scope.add = function() {
                utilities.addValue($scope.detl)
                    .success(function(response){
                        if(response.success)
                        {

                              alert("Reading added successfully!");
                        }
                        else
                        {
                            console.log("Some error occured! Can't add");
                        }
                    });

            };
*/

                }]);
