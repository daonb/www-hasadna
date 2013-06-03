'use strict';

/* Controllers */

function homeCtrl($scope, $http) {
  $scope.myInterval = 4000;
  $http.get('quotes.json').success(function(data) {
           $scope.quotes = data;
           });
}

function ProjectListCtrl($scope, Project) {
  $scope.projects = Project.query();
  $scope.orderProp = 'born';
}

function ProjectDetailCtrl($scope, $routeParams, Project) {
  $scope.project = Project.get({projectId: $routeParams.projectId}, function(project) {
    $scope.mainImageUrl = project.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}
