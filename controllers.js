//CONTROLLERS  
weatherApp.controller('homeController', ['$scope','cityService', function($scope, cityService) {
    
    //var home = this;
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
        
        cityService.city = $scope.city;
        
        //console.log(cityService.city);
    })
                                         
                                         }]);

weatherApp.controller('forecastController', ['$scope', '$stateParams', '$resource', 'cityService', function($scope, $stateParams, $resource, cityService) {
    
    //var fore = this;
    
    $scope.city = cityService.city;
    
    $scope.days = $stateParams.days || '2';
    
       $scope.weatherAPI = 
$resource("http://api.openweathermap.org/data/2.5/forecast/daily?appid=7ce2964527dc9412f3544e113a813c8e", {
        callback: "JSON_CALLBACK" }, {get: {method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });
    
    console.log($scope.weatherResult);
    
    $scope.convertToFah = function(degK) {
               
               return Math.round((1.8 * (degK - 273)) + 32);
           }
           
           $scope.convertToDate = function(dt) {
               
               return new Date(dt * 1000);
           };
    
    
    
                                             
                                            

                                         }]);