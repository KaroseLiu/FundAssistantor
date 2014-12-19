
angular.module('fa.directives', [])
	.directive('informationTemplate', ['$rootScope', '$parse', function($rootScope, $parse){
    return {
      restrict: 'A',
      scope: {
        "infoData": "="
       },
      templateUrl: './partials/fa-template.html',
      link: function (scope, element, attrs) {

        // var defaults = $parse(attrs.karoseCard)(scope);
        
      }
    }
  }])