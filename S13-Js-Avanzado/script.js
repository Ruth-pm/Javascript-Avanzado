//1. Hasta 300Km => S/250.
//2. Mas de 300Km hasta 1000Km => S/250 + S/30 por cada kilometro por encima de 300.
//3. Mas de 1000Km => S/250 + S/30 entre 300 y 1000 + S/20 más de 1000.

let app = angular.module("myApp", [])

app.controller("myCtrl", function($scope) {
    $scope.km = 0
    $scope.calcularImporte= function(){
        if($scope.km <= 300){
            return 250
         } else if ($scope.km <= 1000){
            return 250 + ($scope.km - 300)*30
         }else{
            return 250 + (1000-300)*30 + ($scope.km - 1000)*20
         }

    };

    $scope.desc = function(){
        if($scope.calcularImporte() >= 500){
            return $scope.calcularImporte() * 0.1
        }else{
            return 0
        }
    };
    
});
