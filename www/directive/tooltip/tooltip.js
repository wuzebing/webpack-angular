'use strict';
/**
 * 提示插件
 * data="sasdfasdfasdf<br/>asdfasdfasdfasd"
 * **/
require('./tooltip.css');
module.exports = angular.module('directive.tooltip', []).directive('tooltip', function($timeout) {
    return {
        restrict: 'EA',
        template: require('./tooltip.html'),
        scope:{
            data:'='//单向绑定 获取父亲数据
        },
        link: function($scope, elem, attr) {

            $scope.formatData = [];

            var dat = angular.copy($scope.data);
            $scope.formatData = dat.split('<br/>');

            $scope.isShow = false;
            $scope.ngmouseover = function(){
                $scope.isShow = true;
            }

            $scope.ngmouseout = function(){
                $scope.isShow = false;
            }
        }
    };
}).name;
