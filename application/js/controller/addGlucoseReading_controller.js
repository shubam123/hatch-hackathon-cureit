angular.module('sugarcare')
    .controller('addGlucoseReading_controller',['$scope','utilities','$cookies',
        function($scope,utilities,$cookies)
            {
            $scope.detl = {};
            console.log("controller loaded add glucose");
            $scope.detl.PatientId = $cookies.get('userid');
            

            $scope.prev_reading = {};
            utilities.getPreviousGlucoseReading($scope.detl.PatientId)
                .success(function(response){
                    if(response.success)
                    {
                        console.log("responses");
                        $scope.prev_reading = response.message;
                        console.log(response);
                    }
                    else
                    {
                        console.log("fw2wd");
                    }

                });




            console.log($scope.detl);

            $scope.add = function() {
                console.log($scope.detl);
                utilities.addGlucoseReading($scope.detl)
                    .success(function(response){
                        if(response.success)
                        {

                              alert("Glucose Reading added successfully!");
                        }
                        else
                        {
                            console.log("Some error occured! Can't update user's profile");
                        }
                    });

            };

            $scope.userid = $cookies.get('userid');

/*
            
            $scope.g_update = function(userId) {
                    $scope.userId = $scope.userid;
                    if (typeof $scope.userId != 'undefined'){
                        console.log($scope.userId);
                        utilities.previous_g_reading($scope.userId)
                        .success(function(response) {
                            $scope.customDataGrid.data = response.message;
                            console.log($scope.customDataGrid.data);
                            $scope.object= response;
                            console.log($scope.object);
                        });

                    } else {
                        $scope.userId = 22;
                        console.log($scope.userId);
                        utilities.previous_g_reading($scope.userId)
                        .success(function(response) {
                            $scope.customDataGrid.data = response.message;
                           

                        });

                    }
                  } 

                  */
            
            
                }]);
