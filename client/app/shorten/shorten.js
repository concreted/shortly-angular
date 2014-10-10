angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    Links.addLink($scope.link)
    .then(function(data) {
      // redirect to all links
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});
