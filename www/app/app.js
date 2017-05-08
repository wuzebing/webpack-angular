'use strict';
require('../../node_modules/font-awesome/css/font-awesome.min.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
require('../lib/gentelella/css/custom.css');
require('../lib/gentelella/js/custom.js');
require('../lib/css/index.css');

//require('commonjs-highcharts');

angular.module('app', [
        require('angular-ui-router'),
        require('oclazyload'),
        //require('highcharts-ng'),
        require('./routing.js'),
        require('./directive.js')
    ])
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("home");
        $locationProvider.html5Mode(true);
    });
