angular.module('fa.controllers', ['fa.services'])
	.controller('fa.controller.index', ['$scope', '$rootScope', 'getDataService', function($scope, $rootScope, getDataService){
		
	}])
  .controller('fa.controller.grid', ['$scope', 'getDataService', '$interval', function($scope, getDataService, $interval){

    $scope.faData = [];

    function refreshData(fundArr){

      fundArr.forEach(function(item){
      var params = {
        fdcode: item
      }
      var promise = getDataService.queryTest(params);

      promise.then(function(data){
        $scope.faData.push(data);
      },function(data){
        console.log("Not successful load the data", data);
      })

    })
    }

    var fundCode = ['163115', '163113', '213006', '163114'];

    

    var TIMEDEFAULT = 30000;

    refreshData(fundCode);

    var timer = $interval(function(){
      $scope.faData = []
      refreshData(fundCode);
    }, TIMEDEFAULT);

    $scope.$on('$destroy', function() {
      $interval.cancel(timer);
    });

    $scope.refreshDataByMantually = function(){
      $scope.faData = []
      refreshData(fundCode);
    }
  }])

