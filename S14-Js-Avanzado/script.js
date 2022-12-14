let app= angular.module("myApp", []);

app.controller("formCtrl", function($scope){
    $scope.horas = 0
    $scope.tarifaxH = 0

    $scope.calcular = function(){

        $scope.salarioB = function(){
            return $scope.horas * $scope.tarifaxH
        }

        $scope.desc = function(){
            $scope.descuento = 0
            let salarioBasico = $scope.salarioB()
            if( salarioBasico <= 500){
                $scope.descuento = 0;
            } else if (salarioBasico >= 501 && salarioBasico <= 1000){
                $scope.descuento = 2;
                return salarioBasico * 0.02;
            } else if (salarioBasico >= 1001 && salarioBasico <= 4000){
                $scope.descuento = 8;
                return salarioBasico * 0.08;
            } else if (salarioBasico >= 4001 && salarioBasico <= 8000){
                $scope.descuento = 15;
                return salarioBasico * 0.15;
            } else if (salarioBasico >= 8001 && salarioBasico <= 10000){
                $scope.descuento = 21;
                return salarioBasico * 0.21;
            } else if (salarioBasico >= 10001){
                $scope.descuento = 30;
                return salarioBasico * 0.3;
            } else{
                return 0;
            }
        }
    };
});
