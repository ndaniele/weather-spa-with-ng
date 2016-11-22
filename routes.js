//ROUTES
weatherApp.config(function($stateProvider) {
    
    $stateProvider
    
    .state('home', {
        url: '/',
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .state('home.forecast', {
        url: "/forecast",
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    
    .state('home.forecast/:days', {
        url: "/forecast/:days",
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
})