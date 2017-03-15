angular.module('sugarcare')
    .controller('patient_general_profile_controller',['$scope','utilities','$cookies',
        function($scope,utilities,$cookies)
            // $cookies,
            // $window
            {
          
            // $scope.userData = {
            //     userId : $cookies.get('user_id'),
            //     userName: $cookies.get('user_name'),
            //     userEmail: $cookies.get('user_email'),
            //     userPhone: $cookies.get('user_phone'),
            //     loggedIn: $cookies.get('loggedin')
            // };
            console.log("fdrefer");
            $scope.detl = {};
            $scope.detl.Name = $cookies.get('name');
            $scope.detl.Gender = $cookies.get('gender');
            $scope.detl.DoB = new Date($cookies.get('dob'));
            $scope.detl.Phone = $cookies.get('phone');
            $scope.detl.Email = $cookies.get('email');
            $scope.detl.Address = $cookies.get('address');

            console.log($scope.detl);

            // $scope.detl.Name = $scope.userData.name;
            // $scope.detl.Gender = $scope.userData.gender;
            // $scope.detl.DoB = $scope.userData.dob;
            // $scope.detl.Phone = $scope.userData.phone;
            // $scope.detl.Email = $scope.userData.email;
            // $scope.detl.Address = $scope.userData.address;

            $scope.update = function() {
                utilities.updateUserProfile($scope.detl)
                    .success(function(response){
                        if(response.success)
                        {

                              alert("User's Profile updated succesfully");
                              $cookies.put('name', $scope.detl.Name);
                              $cookies.put('gender', $scope.detl.Gender);
                              $cookies.put('dob', $scope.detl.DoB);
                              $cookies.put('email', $scope.detl.Email);
                              $cookies.put('address', $scope.detl.Address);
                              $cookies.put('role', $scope.detl.Role);


                        }
                        else
                        {
                            console.log("Some error occured! Can't update user's profile");
                        }
                    });

            };
                }]);
