'use strict';
/**
 * 流程组件
 *
 * **/
require('./flowProcess.css');
module.exports = angular.module('directive.flowProcess', []).directive('flowProcess', function($timeout) {
    return {
        restrict: 'EA',
        template: require('./flowProcess.html'),
        scope:{
            data:'='
        },
        link: function($scope, elem, attr) {
            var data = $scope.data;
        }
    };
}).name;
