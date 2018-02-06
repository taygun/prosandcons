var prosAndConsApp = angular.module('prosAndConsApp', []);

prosAndConsApp.controller('prosAndConsController', function prosAndConsController($scope) {
    $scope.reasons = [
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
    ];

    $scope.selectOptions = [
        {name: 'Pro', value: true},
        {name: 'Con', value: false}
    ];
    $scope.reasonPro = $scope.selectOptions[0].value;

    $scope.addNewReason = function() {
        $scope.reasons.push({text: $scope.reasonText, pro: $scope.reasonPro});
        $scope.reasonText = '';
        $scope.reasonPro = $scope.selectOptions[0].value;
    };

    $scope.removeReason = function(item) {
        var index = $scope.reasons.indexOf(item);
        $scope.reasons.splice(index, 1);
    }

    $scope.filterPro = function (reason) {
        return reason.pro === true;
    };

    $scope.filterCon = function (reason) {
        return reason.pro !== true;
    };
});