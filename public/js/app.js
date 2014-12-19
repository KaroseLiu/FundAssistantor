angular.module('fa', ['ui.router','fa.controllers', 'fa.directives'])
.config(function($stateProvider, $urlRouterProvider) {
     
    $stateProvider
     
    .state('gridView', {
      url: "/grid",
      templateUrl: "partials/grid.html"
    })
    .state('graphView', {
      url: "/graph",
      templateUrl: "partials/graph.html"
    });
    $urlRouterProvider.otherwise('/grid');
})