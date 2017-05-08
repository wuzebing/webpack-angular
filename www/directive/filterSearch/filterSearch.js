'use strict';
/**
 *
 * 筛选组件
 *
 *
 * */
require('./filterSearch.css');
module.exports = angular.module('directive.filterSearch', []).directive('filterSearch', function($timeout,filterSearchService) {
    return {
        restrict: 'EA',
        template: require('./filterSearch.html'),
        link: function($scope, elem, attr) {
            $scope.data = filterSearchService.data;
            $scope.filter = filterSearchService.data.filter;

            $scope.showMore = function(obj){
                obj.isSpread = !obj.isSpread;
            };

            $scope.changeChecked = function(opt){
                opt.checked = !opt.checked;
                this.emit();
            };

            $scope.checkedAll = function(fit){
                for(var i in fit.options){
                    if(fit.allChecked) {
                        fit.options[i].checked = false;
                    }else{
                        fit.options[i].checked = true;
                    }
                }
                fit.allChecked = !fit.allChecked;
                this.emit();
            };

            $scope.emit = function(){
                $scope.$emit('filterSearch.setData', $scope.filter);
            }

            $scope.changeFilterType = function(value){
                if($scope.data.filterType != value){
                    $scope.data.filterType = value;
                    this.emit();
                }
            }
            $scope.searchOption = function(fit){
                var value = event.currentTarget.value;
                for(var i in fit.options){
                    if(fit.options[i].name.indexOf(value)>-1){
                        fit.options[i].isHide = false;
                    }else{
                        fit.options[i].isHide = true;
                    }
                }
            }

        }
    };
}).service("filterSearchService",['$rootScope',function($rootScope){
    var service = {
        data:{
            //filter:[
            //    {
            //        name:"业务线",
            //        value:"businese",
            //        options:[
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"a2pp",value:"app",checked:false,isHide:false},
            //            {name:"a3pp",value:"app",checked:false,isHide:false},
            //            {name:"a3pp",value:"app",checked:false,isHide:false},
            //            {name:"a4pp",value:"app",checked:false,isHide:false},
            //            {name:"a4pp",value:"app",checked:false,isHide:false},
            //            {name:"afffpp",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false}
            //        ],
            //        isSpread:false,
            //        allChecked:false
            //    },
            //    {
            //        name:"代码类型",
            //        value:"bns",
            //        options:[
            //            {name:"a2pp",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"a2pp",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"a2pp",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"a2pp",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"ap2p",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"a2pp",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"a222pp",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false},
            //            {name:"app",value:"app",checked:false,isHide:false}
            //        ],
            //        isSpread:false,
            //        allChecked:false
            //    }
            //],
            //filterType:'day' //day hour
        },

        setData:function(data){
            service.data = data;
        }
    };
    return service;
}]).name;
