(function () {
'use strict';
angular.module('MyApp', [])
.controller('MyController', MyController);

MyController.$inject = ['$scope'];
function MyController($scope) {

  $scope.dishes = null;
  $scope.message= null;
  $scope.evaluate = function() {
    var words = $scope.dishes.split(",");
    var wordsCount = wards.length;
    $scope.message= 'dasd';
    if(wordsCount < 3){
      $scope.message='Enjoy';
    }else{
      $scope.message="it's Too Much ";
    }
  }
}
})();
