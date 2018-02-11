'use strict';

angular.
    module('prosAndConsApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/list', {
                    templateUrl: 'list/list.template.html',
                    controller: 'prosAndConsListController'
                }).
                when('/list/:decisionId', {
                    templateUrl: 'detail/detail.template.html',
                    controller: 'prosAndConsController'
                }).
                otherwise('/list');
        }
    ]);