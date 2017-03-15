angular.module('cureit', ['ui.router','ngCookies'])
    .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider

    	.state('home', {
				url: '/home',
				templateUrl: './home.html',
                //controller: 'home_controller'
			})

        .state('login', {
            url: '/login',
            templateUrl: './login.html',
        })

        .state('register', {
            url: '/register',
            templateUrl: './register.html'

        })

        .state('sensor', {
            url: '/sensor',
            templateUrl: './sensor.html',
            controller:'sensor_controller'
        })

        .state('record', {
            url: '/record',
            templateUrl: './record.html',
            controller: 'record_controller'
        })



     
        
        // nested list with custom controller
        // .state('home.list', {
        //     url: '/list',
        //     templateUrl: './common/sample/partial-home-list.html',
        //     controller: function($scope) {
        //         $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        //     }
        // })
        
        // // nested list with just some random string data
        // .state('home.paragraph', {
        //     url: '/paragraph',
        //     template: 'I could sure use a drink right now.'
        // })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: './common/sample/partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: './common/sample/table-data.html',
                    controller: 'scotchController'
                }
            }
            
        });
        
});

// .controller('scotchController', function($scope) {
    
//     $scope.message = 'test';
   
//     $scope.scotches = [
//         {
//             name: 'Macallan 12',
//             price: 50
//         },
//         {
//             name: 'Chivas Regal Royal Salute',
//             price: 10000
//         },
//         {
//             name: 'Glenfiddich 1937',
//             price: 20000
//         }
//     ];
    
// });