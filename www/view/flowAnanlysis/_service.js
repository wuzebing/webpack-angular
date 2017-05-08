'use strict';
module.exports = angular.module('app.flowAnanlysis', []).config(function($stateProvider) {
    $stateProvider.state('flowAnanlysis', {
        url: '/flowAnanlysis',
        templateProvider: function($q) {
            var deferred = $q.defer();
            require.ensure(['./flowAnanlysis.html'], function(require) {
                var template = require('./flowAnanlysis.html');
                deferred.resolve(template);
            }, 'flowAnanlysis-tpl');
            return deferred.promise;
        },
        controller: 'flowAnanlysisCtrl',
        controllerAs: 'vm',
        resolve: {
            'app.flowAnanlysis': function($q, $ocLazyLoad) {
                var deferred = $q.defer();
                require.ensure(['./flowAnanlysis.js'], function() {
                    var mod = require('./flowAnanlysis.js');
                    $ocLazyLoad.load({
                        name: 'app.flowAnanlysis'
                    });
                    deferred.resolve(mod.controller);
                }, 'flowAnanlysis-ctl');
                return deferred.promise;
            }
        }
    });
}).name;
