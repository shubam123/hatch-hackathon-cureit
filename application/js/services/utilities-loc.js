
angular.module('sugarcare')
    .service('utilities', ['$http', function($http) {
        var utilities = this;
        utilities.user_exist = function(data) {
            return $http({
                        method : 'POST',
                        //url : 'http://localhost/projects/daphnislabs/sugarcare/sugarcare/api/index.php/User/user_exist/',
                        url : 'http://35.165.53.220/sugarcare/api/index.php/User/user_exist/',
                        //$.param is a jquery function used to implement POST request in angularJS.
                        data : $.param(data),
                        headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                });
        }

        utilities.sendOTP = function(data) {
            return $http({
                        method : 'POST',
                        //url : 'http://localhost/projects/daphnislabs/sugarcare/sugarcare/api/index.php/User/call_otp/',
                        url : 'http://35.165.53.220/sugarcare/api/index.php/User/call_otp/',
                        //$.param is a jquery function used to implement POST request in angularJS.
                        data : $.param(data),
                        headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                });
        }

        utilities.verify_otp = function(data) {
            return $http({
                        method : 'POST',
                        //url : 'http://localhost/projects/daphnislabs/sugarcare/sugarcare/api/index.php/User/verify_otp/',
                        url : 'http://35.165.53.220/sugarcare/api/index.php/User/verify_otp/',
                        //$.param is a jquery function used to implement POST request in angularJS.
                        data : $.param(data),
                        headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                });
        }

        utilities.addProfile = function(data) {
            return $http({
                        method : 'POST',
                        //url : 'http://localhost/projects/daphnislabs/sugarcare/sugarcare/api/index.php/User/addProfile/',
                        url : 'http://35.165.53.220/sugarcare/api/index.php/User/addProfile/',
                        //$.param is a jquery function used to implement POST request in angularJS.
                        data : $.param(data),
                        headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                });
        }

        utilities.getProfile = function(data) {
            return $http({
                        method : 'POST',
                        //url : 'http://localhost/projects/daphnislabs/sugarcare/sugarcare/api/index.php/User/getProfile/',
                        url : 'http://35.165.53.220/sugarcare/api/index.php/User/getProfile/',
                        //$.param is a jquery function used to implement POST request in angularJS.
                        data : $.param(data),
                        headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                });
        }
        utilities.updateUserProfile = function(data) {
            return $http({
                    method : 'POST',
                    //url : 'http://localhost/projects/daphnislabs/sugarcare/sugarcare/api/index.php/User/updateProfile',
                    url : 'http://35.165.53.220/sugarcare/api/index.php/User/updateProfile',
                    //$.param is a jquery function used to implement POST request in angularJS.
                    data : $.param(data),
                    headers : {'Content-Type': 'application/x-www-form-urlencoded'}
            });
        }



        //-------------------   Patient APIs--------------//

        utilities.getSubscribedDieticians = function(PatientId) {
            return $http({
                        method : 'GET',
                        //url : 'http://localhost/projects/daphnislabs/sugarcare/sugarcare/api/index.php/User/user_exist/',
                        url : 'http://35.165.53.220/sugarcare/api/index.php/Patient/getSubscribedDieticians',
                        params: {PatientId: PatientId}
                        //$.param is a jquery function used to implement POST request in angularJS.
//                        data : $.param(data),
//                        headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                });
        }

        utilities.addGlucoseReading = function(data) {
            return $http({
                        method : 'POST',
                        //url : 'http://localhost/projects/daphnislabs/sugarcare/sugarcare/api/index.php/Patient/addWeightReading/',
                        url : 'http://35.165.53.220/sugarcare/api/index.php/Patient/addGlucoseReading/',
                        //$.param is a jquery function used to implement POST request in angularJS.
                        data : $.param(data),
                        headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                });
        }
        utilities.addWeightReading = function(data) {
            return $http({
                        method : 'POST',
                        //url : 'http://localhost/projects/daphnislabs/sugarcare/sugarcare/api/index.php/Patient/addWeightReading/',
                        url : 'http://35.165.53.220/sugarcare/api/index.php/Patient/addWeightReading/',
                        //$.param is a jquery function used to implement POST request in angularJS.
                        data : $.param(data),
                        headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                });
        }

        utilities.getDiets = function(PatientId){
            return $http({
                        method : 'GET',
                        //url : 'http://localhost/projects/daphnislabs/sugarcare/sugarcare/api/index.php/User/user_exist/',
                        url : 'http://35.165.53.220/sugarcare/api/index.php/User/getDiets',
                        params: {PatientId: PatientId}
                        //$.param is a jquery function used to implement POST request in angularJS.
//                        data : $.param(data),
//                        headers : {'Content-Type': 'application/x-www-form-urlencoded'}
                });
            };
    

        utilities.getNotes = function(PatientId){
            return $http({
                        method : 'GET',
                        //url : 'http://localhost/projects/daphnislabs/sugarcare/sugarcare/api/index.php/User/user_exist/',
                        url : 'http://35.165.53.220/sugarcare/api/index.php/User/getNotes',
                        params: {PatientId: PatientId}
                });
            };
    
        utilities.getPreviousGlucoseReading = function(PatientId){
            return $http({
                        method : 'GET',
                        //url : 'http://localhost/projects/daphnislabs/sugarcare/sugarcare/api/index.php/User/user_exist/',
                        url : 'http://35.165.53.220/sugarcare/api/index.php/Patient/getPreviousGlucoseReading',
                        params: {PatientId: PatientId}
                });
            };
        utilities.getPreviousWeightReading = function(PatientId){
            return $http({
                        method : 'GET',
                        //url : 'http://localhost/projects/daphnislabs/sugarcare/sugarcare/api/index.php/User/user_exist/',
                        url : 'http://35.165.53.220/sugarcare/api/index.php/Patient/getPreviousWeightReading',
                        params: {PatientId: PatientId}
                });
            };    



        //-------------------   Dietician APIs--------------//

        utilities.getPatientList = function(DieticianId){
            return $http({
                        method : 'GET',
                        //url : 'http://localhost/projects/daphnislabs/sugarcare/sugarcare/api/index.php/User/user_exist/',
                        url : 'http://35.165.53.220/sugarcare/api/index.php/Dietician/getAllPatient',
                        params: {DieticianId: DieticianId}
                });
            };    



        return utilities;
        
    }]);