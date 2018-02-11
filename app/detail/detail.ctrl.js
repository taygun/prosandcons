'use strict';

angular.module('prosAndConsDetail').
    controller('prosAndConsController', ['$scope' , '$route', '$routeParams', 'appService', function prosAndConsController($scope, $route, $routeParams, appService) {
    var allReasons = {
        1: [
            {
                text: 'Great view',
                pro: true
            },
            {
                text: 'Closer to work',
                pro: true
            },
            {
                text: '10 minutes walk from metro station',
                pro: true
            },
            {
                text: 'No parks nearby',
                pro: false
            }
        ],
        2: [
            {
                text: 'Better performance',
                pro: true,
            },
            {
                text: 'More comfortable',
                pro: true,
            },
            {
                text: 'More expensive',
                pro: false,
            },
        ],
    };
    var decisionId = $routeParams.decisionId;
    if (allReasons.hasOwnProperty(decisionId)) {
        $scope.reasons = allReasons[decisionId];
    } else {
        $scope.reasons = [];
    }
    $scope.decisionTitle = appService.getDecision();

    $scope.selectOptions = [
        {name: 'Pro', value: true},
        {name: 'Con', value: false}
    ];
    $scope.reasonPro = $scope.selectOptions[0].value;

    $scope.addNewReason = function() {
        $scope.reasons.push({text: $scope.reasonText, pro: $scope.reasonPro});
        $scope.reasonText = '';
        $scope.reasonPro = $scope.selectOptions[0].value;
        $scope.resultText = getResultText();
    };

    $scope.removeReason = function(item) {
        var index = $scope.reasons.indexOf(item);
        $scope.reasons.splice(index, 1);
        $scope.resultText = getResultText();
    };

    $scope.filterPro = function (reason) {
        return reason.pro === true;
    };

    $scope.filterCon = function (reason) {
        return reason.pro !== true;
    };

    var emptyReasonsText = 'Start by adding pros and cons in the above input field!';
    var proText = 'Pros outweigh the cons! You should decide in favor!';
    var conText = 'Cons outweigh the pros! You should decide against the decision!';
    var equalText = 'There seems to be a tie! Try to add more reasons!';

    function getResultText() {
        var resultText;
        $scope.result = 'tie';
        if ($scope.reasons < 1) {
            resultText = emptyReasonsText;
        } else {
            var proCount = $scope.reasons.filter($scope.filterPro).length;
            var conCount = $scope.reasons.length - proCount;

            if (proCount > conCount) {
                resultText = proText;
                $scope.result = 'pro';
            } else  if (proCount < conCount) {
                resultText = conText;
                $scope.result = 'con';
            } else {
                resultText = equalText;
            }
        }
        return resultText;
    };
    $scope.resultText = getResultText();
}]).directive('choiceResult', function() {
    return {
        restrict: 'E',
        templateUrl: 'detail/result.html',
    };
});