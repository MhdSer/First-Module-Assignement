(function () {
'use strict';
angular.module('MyApp', [])
.controller('MyController', MyController);

MyController.$inject = ['$scope'];
function MyController($scope) {

  $scope.dishes = '';
  $scope.message= '';
  $scope.evaluate = function() {
    var words = scope.dishes.split(' ');
    var wordsCount = wards.length;
    if(wordsCount < "3"){
      $scope.message='Enjoy';
    }
  }
}

})();
