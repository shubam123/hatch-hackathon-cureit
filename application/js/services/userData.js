angular.module('sugarcare')
	.factory('userData', ['$cookies', function($cookies) {
			this.userData = {
                phone: $cookies.get('phone'),
                name: $cookies.get('name'),
                gender: $cookies.get('gender'),
                dob: $cookies.get('dob'),
                email: $cookies.get('email'),
                address: $cookies.get('address'),
                role: $cookies.get('role')
			};
			return this;
	}])



	.factory('InstituteData', ['$cookies', function($cookies) {
		
			this.instituteData = {
				
			};

			return this;
	}]);
