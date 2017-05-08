'use strict';
module.exports = angular.module('app.directives', [
	require('../directive/checkboxSearch/checkboxSearch.js'),
	require('../directive/flowProcess/flowProcess.js'),
	require('../directive/tooltip/tooltip.js'),
	require('../directive/sidebar/sidebar.js'),
	require('../directive/filterSearch/filterSearch.js'),
	require('../directive/daterangepicker/daterangepicker.js'),
    require('../directive/fengtitle/title.js')//test
]).name;
