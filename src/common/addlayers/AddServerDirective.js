(function() {

  var module = angular.module('loom_add_server_directive', []);

  module.directive('loomAddServer',
      function(serverService) {
        return {
          templateUrl: 'addlayers/partials/addserver.tpl.html',
          link: function(scope) {
            scope.serverService = serverService;
            scope.type = 'WMS';
            scope.name = null;
            scope.url = null;
          }
        };
      }
  );
})();