'use strict';
require('../../lib/highcharts/highcharts-5.0.7.min.js');
require('../../lib/highcharts/angular-highcharts.js');


module.exports = angular.module("app.flowAnanlysis",["highcharts-ng"]).controller("flowAnanlysisCtrl", function ($scope,filterSearchService) {


    $scope.dataRangeChange = function(times){
        debugger;
    }

    /**
     *
     * 简介榄数据定义
     *
     * **/
    $scope.sunmmary = [
        {name:"访问次数",value:"17627",ovalue:"30.537",desc:"asfasdfasdfasfdasd<br/>asfasdfasdfasdfadfs"},
        {name:"访问次数",value:"17627",ovalue:"30.537",desc:"asfasdfasdfasfdasd<br/>asfasdfasdfasdfadfs"},
        {name:"访问次数",value:"17627",ovalue:"30.537",desc:"asfasdfasdfasfdasd<br/>asfasdfasdfasdfadfs"},
        {name:"访问次数",value:"17627",ovalue:"30.537",desc:"asfasdfasdfasfdasd<br/>asfasdfasdfasdfadfs"},
        {name:"访问次数",value:"17627",ovalue:"30.537",desc:"asfasdfasdfasfdasd<br/>asfasdfasdfasdfadfs"}
    ]

    /**
     *
     *  flowProcess 组件使用
     **/
    $scope.flowProcessData = {
        total:{
            name:"总转化率",
            value:"3.10%"
        },
        dataset:[
            {name:'详情页',value:'9999',scale:'29.28%',unit:'人'},
            {name:'详情页',value:'9999',scale:'29.28%',unit:'人'},
            {name:'详情页',value:'9999',scale:'29.28%',unit:'人'},
            {name:'详情页',value:'9999',scale:'29.28%',unit:'人'}
        ]
    };


    /**
    *
    *  给checkboxSearch 组件set数据以及获取数据
    *  searchInfo 查询按钮查询
    *  $scope.$on 通过事件分发查询
    **/
    $scope.checkboxSearchData = {
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

    $scope.checkboxSearchChange = function(data){
        //todo 处理data
    };

    /**
     *
     * 高级筛选组件引用以及setdata
     *
     * searchInfo 查询按钮查询
     * $scope.$on 通过事件分发查询
     *
     * **/
    $scope.filterSearchData = {
        filter:[
            {
                name:"业务线",
                value:"businese",
                options:[
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"a2pp",value:"app",checked:false,isHide:false},
                    {name:"a3pp",value:"app",checked:false,isHide:false},
                    {name:"a3pp",value:"app",checked:false,isHide:false},
                    {name:"a4pp",value:"app",checked:false,isHide:false},
                    {name:"a4pp",value:"app",checked:false,isHide:false},
                    {name:"afffpp",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false}
                ],
                isSpread:false,
                allChecked:false
            },
            {
                name:"代码类型",
                value:"bns",
                options:[
                    {name:"a2pp",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"a2pp",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"a2pp",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"a2pp",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"ap2p",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"a2pp",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"a222pp",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false},
                    {name:"app",value:"app",checked:false,isHide:false}
                ],
                isSpread:false,
                allChecked:false
            }
        ],
        filterType:'day' //day hour
    };
    filterSearchService.setData( $scope.filterSearchData);
    $scope.searchInfo = function(){
        var data = filterSearchService.data;
        //todo 处理data
    };
    $scope.$on('filterSearch.setData',function(event,data) {
        //todo 处理data
    });





    $scope.chartConfig3 = {
        width: 100,
        chart: {
            polar: true
        },
        colors: ['#90ed7d', '#f7a35c', '#8085e9',
            '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],

        title: {
            text: ''
        },


        xAxis: {
            categories: ["2","2","2","2","2","2"],
            labels: {//设置横轴坐标的显示样式
//                    rotation: -45,//倾斜度
                align: 'right',
                style: {
                    font: 'normal 13px Verdana, sans-serif'
                }
            }
        },

        yAxis: [{
            labels:{
                style: {
                    color: '#90ed7d'
                }
            }
        }],

        series: [{
            name: 'uv',
            data: [2,3,4,5,6,7]
        }, {
            name: 'pv',
            data: [2,3,4,5,6,7]
        }],
        credits: {
            enabled:false
        }

    };

    $scope.chartConfig4 = {
        width: 100,
        chart: {
            polar: true
        },
        colors: ['#90ed7d', '#f7a35c', '#8085e9',
            '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],

        title: {
            text: ''
        },


        xAxis: {
            categories: ["2","2","2","2","2","2"],
            labels: {//设置横轴坐标的显示样式
//                    rotation: -45,//倾斜度
                align: 'right',
                style: {
                    font: 'normal 13px Verdana, sans-serif'
                }
            }
        },

        yAxis: [{
            labels:{
                style: {
                    color: '#90ed7d'
                }
            }
        }],

        series: [{
            name: 'uv',
            data: [2,3,4,5,6,7]
        }, {
            name: 'pv',
            data: [2,3,4,5,6,7]
        }],
        credits: {
            enabled:false
        }

    };

    $scope.chartConfig5 = {
        width: 100,
        chart: {
            polar: true
        },
        colors: ['#649be6'],

        title: {
            text: ''
        },

        legend:{
          enabled:false
        },

        xAxis: {
            categories: ["2","2","2","2","2","2"],
            labels: {//设置横轴坐标的显示样式
//                    rotation: -45,//倾斜度
                align: 'right',
                style: {
                    font: 'normal 13px Verdana, sans-serif'
                }
            }
        },

        yAxis: [{
            labels:{
                style: {
                    color: '#73879c'
                }
            },
            title:{
                text:null
            }
        }],

        series: [{
            name: 'uv',
            data: [1,9,5,3,8,9]
        }, {
            name: 'pv',
            data: [2,3,4,5,6,7]
        }],
        credits: {
            enabled:false
        }

    };

    $scope.chartConfig6 = {
        width: 100,
        chart: {
            type: 'column'
        },
        colors: ['#649be6'],

        title: {
            text: ''
        },

        legend:{
            enabled:false
        },

        xAxis: {
            categories: ["2","2","2","2","2","2"],
            labels: {//设置横轴坐标的显示样式
//                    rotation: -45,//倾斜度
                align: 'right',
                style: {
                    font: 'normal 13px Verdana, sans-serif'
                }
            }
        },

        yAxis: [{
            labels:{
                style: {
                    color: '#73879c'
                }
            },
            title:{
                text:null
            }
        }],

        series: [{
            name: 'uv',
            data: [1,9,5,3,8,9]
        }, {
            name: 'pv',
            data: [2,3,4,5,6,7]
        }],
        credits: {
            enabled:false
        }

    };
}).name;

