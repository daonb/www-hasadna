'use strict';

/* Services */

angular.module('hasadnaServices', ['ngResource']).
  factory('Project', function($resource){
    return $resource('projects/:projectId.json', {}, {
      query: {method:'GET', params:{projectId:'projects'}, isArray:true}
  })});
