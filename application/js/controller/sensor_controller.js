angular.module('cureit')
    .controller('sensor_controller',['$scope','utilities','$cookies',
        function($scope,utilities,$cookies)
            {
            console.log("controller loaded sensor");
            $scope.detl = {};
            $scope.detl.UserId = $cookies.get('userid');
            $scope.prev_reading = {};
            utilities.getSensor($scope.detl.UserId)
                .success(function(response){  
                        console.log("responses");
                        $scope.prev_reading = response.values;
                        console.log(response);

                });

        
            console.log($scope.detl);


            $scope.add = function() {
                alert("in");
                utilities.addSensor($scope.detl)
                    .success(function(response){   
                        console.log(response);
                        alert("ded");
                    });


//                utilities.addRecord()

            };


                }]);
