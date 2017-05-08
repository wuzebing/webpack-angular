'use strict';
module.exports = angular.module('app.home', []).config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateProvider: function($q) {
            var deferred = $q.defer();
            require.ensure(['./home.html'], function(require) {
                var template = require('./home.html');
                deferred.resolve(template);
            }, 'home-tpl');
            return deferred.promise;
        },
        controller: 'homeCtrl',
        controllerAs: 'vm',
        resolve: {
            'app.home': function($q, $ocLazyLoad) {
                var deferred = $q.defer();
                require.ensure(['./home.js'], function() {
                    var mod = require('./home.js');
                    $ocLazyLoad.load({
                        name: 'app.home'
                    });
                    deferred.resolve(mod.controller);
                }, 'home-ctl');
                return deferred.promise;
            }
        }
    });
}).name;
