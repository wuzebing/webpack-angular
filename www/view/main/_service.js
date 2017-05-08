'use strict';
module.exports = angular.module('app.main', []).config(function($stateProvider) {
    $stateProvider.state('main', {
        url: '/main',
        templateProvider: function($q) {
            var deferred = $q.defer();
            require.ensure(['./main.html'], function(require) {
                var template = require('./main.html');
                deferred.resolve(template);
            }, 'main-tpl');
            return deferred.promise;
        },
        controller: 'mainCtrl',
        controllerAs: 'vm',
        resolve: {
            'app.main': function($q, $ocLazyLoad) {
                var deferred = $q.defer();
                require.ensure(['./main.js'], function() {
                    var mod = require('./main.js');
                    $ocLazyLoad.load({
                        name: 'app.main'
                    });
                    deferred.resolve(mod.controller);
                }, 'main-ctl');
                return deferred.promise;
            }
        }
    });
}).name;
