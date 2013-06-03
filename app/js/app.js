'use strict';

/* App Module */

angular.module('hasadna', ['ui.bootstrap', 'hasadnaServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/home.html',   controller: homeCtrl}).
      when('/who', {templateUrl: 'partials/who.html'}).
      when('/how', {templateUrl: 'partials/how.html'}).
      when('/why', {templateUrl: 'partials/why.html'}).
      when('/projects', {templateUrl: 'partials/project-list.html',   controller: ProjectListCtrl}).
      when('/projects/:projectId', {templateUrl: 'partials/project-detail.html', controller: ProjectDetailCtrl}).
      otherwise({redirectTo: '/'});
  }]).directive("markdown", function ($compile, $http) {
    var converter = new Showdown.converter();
    return {
        restrict: 'E',
        replace: true,
        link: function (scope, element, attrs) {
            if ("src" in attrs) {
                $http.get(attrs.src).then(function(data) {
                    element.html(converter.makeHtml(data.data));
                });
            } else {
                element.html(converter.makeHtml(element.text()));
            }
        }
    };
});;
