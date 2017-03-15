angular.module('sugarcare')
    .controller('medical_profile_controller',['$scope','utilities','$cookies',
        function($scope,utilities,$cookies)
            // $cookies,
            // $window
            {
            var PatientId = $cookies.get('userid');
            $scope.Notes = {};
            $scope.Diets={};

            utilities.getDiets(PatientId)
                .success(function(response){
                    if(response.success)
                    {
                        console.log("diet details fetched!");
                        console.log(response.message);
                        $scope.Diets = response.message;
                    }
                    else
                    {
                        console.log("Some error occured! Can't fetch");
                    }
                });

            utilities.getNotes(PatientId)
                .success(function(response){
                    if(response.success)
                    {
                        console.log("sub note details fetched!");
                        console.log(response.message);
                        $scope.Notes = response.message;
                    }
                    else
                    {
                        console.log("Some error occured! Can't fetch");
                    }
                });




            }]);
