'use strict';

angular.module('IonicjsLocalforage.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('PetIndexCtrl', ['$scope', '$localForage', 'PetService',
    function($scope, $localForage, PetService) {
        PetService.then(function(data) {
            $scope.pets = data;
            console.log(data);
        });
    }
])

// A simple controller that shows a tapped item's data
.controller('PetDetailCtrl', ['$scope', '$stateParams','$filter', 'PetService',
    function($scope, $stateParams,$filter, PetService) {
        PetService.then(function(data) {
            var pet = $filter('filter')(data, {id: $stateParams.petId})[0];
            $scope.pet = pet;
            console.log(pet);
        });
        // "Pets" is a service returning mock data (services.js)
        // $scope.pet = PetService.get($stateParams.petId);
    }
]);