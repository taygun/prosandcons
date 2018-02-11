'use strict';

describe('prosAndConsController', function() {

    beforeEach(module('prosAndConsDetail'));

        it('should create a prosAndConsController with 4 elements', inject(function($controller) {
            var scope = {};

            var ctrl = $controller('prosAndConsController', {$scope: scope});

            expect(scope.reasons.length).toBe(4);
        }));
});