angular.module('fa.services', ['ngResource'])
	.factory('getDataService', ['$http', '$q', function($http, $q){

		return {

			queryTest: function(params){
				var deferred = $q.defer();

				  $http.jsonp("http://fund.eastmoney.com/data/funddataforgznew.aspx?t=basewap&fc=" + params.fdcode + "&cb=JSON_CALLBACK").success(function(data){
						deferred.resolve(data);
				  })

	      return deferred.promise;
			}

		}
	}]);