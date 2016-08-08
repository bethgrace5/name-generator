'use strict';

// regression of the data can be represented as a third order polynomial
// g(x) = cx^3 + cx^2 + cx + c

angular.module('name-generator')
.controller('HomeCtrl', function ($q, $scope, $log, $http, $timeout) {
  $scope.data = [];

  // returns a random number
  /*
  var getRandom = function() {
    // Returns a random number between min (inclusive) and max (exclusive)
    var num =  Math.random() * (0.5 + 0.5) - 0.5;
    $log.debug(num);
    return num;
  }
  */

  // read in selected file
  $scope.readFile = function(f) {
    if (f) {
      var r = new FileReader();
      r.onload = function(e) {
        var contents = e.target.result;
        $scope.data = $.csv.toArrays(contents),
        $scope.parseFile();
        $scope.$apply();
      }
      r.readAsText(f);
    } else {
      alert("Failed to load file");
    }
  }

  $scope.parseFile = function() {
    $scope.data = _.map($scope.data, function(item, index) {
      var name = item[0];
      var level = parseFloat(item[1]);
      return {
        'name': item[0],
        'math':parseInt(item[2]),
        'reading':parseInt(item[1])
      };
    });

    console.log(_.groupBy($scope.data, 'math'));
    console.log(_.groupBy($scope.data, 'reading'));
  }


});
