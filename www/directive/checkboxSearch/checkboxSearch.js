'use strict';

/**
 * checkbox多选组件
 * data={
        options:[
            {name:"名称1",value:"1",checked:false},
            {name:"名称2",value:"2",checked:false},
            {name:"名称3",value:"3",checked:false},
            {name:"名称4",value:"4",checked:false},
            {name:"名称5",value:"5",checked:false},
            {name:"名称6",value:"6",checked:false},
            {name:"名称7",value:"7",checked:false},
            {name:"名称8",value:"8",checked:false},
            {name:"名称9",value:"9",checked:false},
            {name:"名称10",value:"10",checked:false},
            {name:"名称11",value:"11",checked:false},
            {name:"名称11",value:"11",checked:false},
            {name:"名称11",value:"11",checked:false},
            {name:"名称11",value:"11",checked:false},
            {name:"名称11",value:"11",checked:false},
            {name:"名称11",value:"11",checked:false},
            {name:"名称11",value:"11",checked:false},
            {name:"名称11",value:"11",checked:false},
            {name:"名称11",value:"11",checked:false},
            {name:"名称11",value:"11",checked:false}
        ],
        maxLength:3
    };
 *
 *
 * **/
require('./checkboxSearch.css');
module.exports = angular.module('directive.checkboxSearch', []).directive('checkboxSearch', function($timeout) {
    return {
        restrict: 'EA',
        template: require('./checkboxSearch.html'),
        scope:{
            data:'=',

            //callbacks
            onChange:"&"
        },
        link: function($scope, elem, attr) {
            if($scope.data){
                $scope.toggleClass = true;
                $scope.toggleContent = true;

                $scope.toggle = function(){
                    $scope.toggleContent = !$scope.toggleContent;
                    $scope.toggleClass = !$scope.toggleClass;
                };
                $scope.maxLength = 0;
                $scope.flicker = false;

                $scope.changeChosenStatus = function(obj){
                    if(!obj.checked){
                        if($scope.maxLength<$scope.data.maxLength){
                            obj.checked = !obj.checked;
                            $scope.maxLength++;
                            $scope.onChange({
                                data:$scope.data
                            });
                        }else{
                            $scope.flicker = true;
                            $timeout(function(){
                                $scope.flicker = false;
                            },3000);
                        }
                    }else{
                        obj.checked = !obj.checked;
                        $scope.maxLength--;
                        $scope.onChange({
                            data:$scope.data
                        });
                    }

                };
                $scope.isSelected = function(obj){
                    return obj.checked;
                }
            }

        }
    };
}).name;
