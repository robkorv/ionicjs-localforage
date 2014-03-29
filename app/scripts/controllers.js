'use strict';

angular.module('IonicjsLocalforage.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', ['$scope', 'PetService',
  function($scope, PetService) {
    // "Pets" is a service returning mock data (services.js)
    PetService.then(function(data) {
      $scope.pets = data;
      console.log(data);
    });
  }
])

// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', ['$scope', '$stateParams', '$filter', 'PetService',
  function($scope, $stateParams, $filter, PetService) {
    // "Pets" is a service returning mock data (services.js)
    PetService.then(function(data) {
      var pet = $filter('filter')(data, {
        id: $stateParams.petId
      })[0];
      $scope.pet = pet;
      console.log(pet);
    });
  }
]);