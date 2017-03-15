angular.module('sugarcare')
    .controller('addWeightReading_controller',['$scope','utilities','$cookies',
        function($scope,utilities,$cookies)
            {
          
            console.log("controller loaded add glucose");
            $scope.detl = {};
            $scope.detl.PatientId = $cookies.get('userid');
            $scope.prev_reading = {};
            utilities.getPreviousWeightReading($scope.detl.PatientId)
                .success(function(response){
                    if(response.success)
                    {
                        console.log("responses");
                        $scope.prev_reading = response.message;
                        //console.log(response);
                    }
                    else
                    {
                        console.log("fw2wd");
                    }

                });

         

            console.log($scope.detl);

            $scope.add = function() {
                utilities.addWeightReading($scope.detl)
                    .success(function(response){
                        if(response.success)
                        {

                              alert("Weight Reading added successfully!");
                        }
                        else
                        {
                            console.log("Some error occured! Can't update user's profile");
                        }
                    });

            };



                }]);
