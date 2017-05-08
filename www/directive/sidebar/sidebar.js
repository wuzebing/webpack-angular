'use strict';

require('./sidebar.scss');
module.exports = angular.module('directive.sidebar', []).directive('sidebarMenu', function() {
    return {
        restrict: 'EA',
        
        template: require('./sidebar.html'),
        link: function($scope, elem, attr) {
        	$scope.menus = 
	        	[
	        		{
	        			firstName:"SAVIOR LOG ANALYTICS",
	        			children:[
	        				{
	        					secondName:"分析页",
	        					href:"#",
	        					children:[
	        						{
	        							menuName:"流量分析",
	        							href:"/flowAnanlysis"
	        						},
	        						{
	        							menuName:"日志分析",
	        							href:"/home"
	        						},
	        						{
	        							menuName:"菜单1",
	        							href:"/home"
	        						},
	        						{
	        							menuName:"菜单2",
	        							href:"/home"
	        						}
	        					]
	        				},
	        				{
	        					secondName:"管理",
	        					href:"#",
	        					children:[
	        						{
	        							menuName:"管理分析",
	        							href:"/home"
	        						},
	        						{
	        							menuName:"菜单1",
	        							href:"/home"
	        						},
	        						{
	        							menuName:"菜单2",
	        							href:"/home"
	        						}
	        					]
	        				}
	        			]
	        		},
	        		{
	        			firstName:"SAVIOR LOG ANALYTICS",
	        			children:[
	        				{
	        					secondName:"分析页",
	        					href:"#",
	        					children:[
	        						{
	        							menuName:"日志分析",
	        							href:"/home"
	        						},
	        						{
	        							menuName:"菜单1",
	        							href:"/home"
	        						},
	        						{
	        							menuName:"菜单2",
	        							href:"/home"
	        						}
	        					]
	        				},
	        				{
	        					secondName:"管理",
	        					href:"#",
	        					children:[
	        						{
	        							menuName:"管理分析",
	        							href:"/home"
	        						},
	        						{
	        							menuName:"菜单1",
	        							href:"/home"
	        						},
	        						{
	        							menuName:"菜单2",
	        							href:"/home"
	        						}
	        					]
	        				}
	        			]
	        		}
	        	]
        
        }
    };
}).name;
