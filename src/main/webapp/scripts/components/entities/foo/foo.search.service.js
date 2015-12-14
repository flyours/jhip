'use strict';

angular.module('jhipster1App')
    .factory('FooSearch', function ($resource) {
        return $resource('api/_search/foos/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });
