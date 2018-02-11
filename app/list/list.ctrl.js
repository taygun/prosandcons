'use strict';

angular.module('prosAndConsList').
    controller('prosAndConsListController', ['$scope', '$location', 'appService',
        function prosAndConsListController($scope, $location, appService) {
            $scope.decisions = [
                {
                    id: 1,
                    title: 'Change apartment'
                },
                {
                    id: 2,
                    title: 'Buy a new bike',
                }
            ];

            $scope.submitDecision = function () {
                appService.setDecision($scope.decisionName);
                $location.path('/list/4/');
            }

            $scope.goToDetail = function(decisionId, decisionTitle) {
                appService.setDecision(decisionTitle);
                $location.path('/list/' + decisionId + '/');
            }
}]).factory('appService', function() {
    var newDecision;

    return {
        getDecision: function() { return newDecision},
        setDecision: function(value) { newDecision = value;}
    }
});