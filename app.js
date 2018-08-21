(function () {
'use strict';
angular.module('MyApp', [])
.controller('MyController', MyController);

MyController.$inject = ['$scope'];
function MyController($scope) {

  $scope.dishes = "";
  $scope.message= "";
  $scope.fontColor ="";
  $scope.borderColor ="";

  $scope.evaluate = function() {
    var words = $scope.dishes.split(",");
    var wordsCount = words.length;
    if ($scope.dishes == "")
    {
        $scope.message='Please enter data first';
        $scope.color = 'black';
        $scope.borderColor ="red";
    }
    else if (words.includes(undefined)){
                    $scope.message='There is an empty place';
          }
        else{
              if(wordsCount < 4)
              {
                    $scope.message='Enjoy';
                    $scope.color = 'green';
                    $scope.borderColor ="green";
              }
              else
              {
                    $scope.message="it's Too Much ";
                    $scope.color= 'green';
                    $scope.borderColor ="green";
              }
            }
          }
        }
})();
