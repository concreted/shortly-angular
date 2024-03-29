angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getLinks().then(function(data) {
      $scope.data.links = data;
    })
    .catch(function(err) {
      console.log(err);
    });
  };
  $scope.getLinks();
})
.directive('shortlylink', function(){
  return {
    restrict: 'E',
    templateUrl: 'app/links/link.html',
  };
});


