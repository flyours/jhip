'use strict';

angular.module('jhipster1App')
    .controller('FooDetailController', function ($scope, $rootScope, $stateParams, entity, Foo) {
        $scope.foo = entity;
        $scope.load = function (id) {
            Foo.get({id: id}, function(result) {
                $scope.foo = result;
            });
        };
        var unsubscribe = $rootScope.$on('jhipster1App:fooUpdate', function(event, result) {
            $scope.foo = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
