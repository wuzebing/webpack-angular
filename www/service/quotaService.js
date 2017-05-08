/**
 * Created by user on 17/5/2.
 */
module.exports = angular.module('service.quotaService', []).directive('checkboxSearch', function() {
    return {
        restrict: 'EA',
        template: require('./checkboxSearch.html'),
        replace: true,
        scope:{
            data:'='
        },
        link: function($scope, elem, attr) {
            debugger;
            $scope.toggleClass = true;
            $scope.toggleContent = true;

            $scope.toggle = function(){
                $scope.toggleContent = !$scope.toggleContent;
                $scope.toggleClass = !$scope.toggleClass;
            }

        }
    };
}).name;