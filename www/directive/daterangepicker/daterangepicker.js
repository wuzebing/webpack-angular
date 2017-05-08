/**
 * @license ng-bs-daterangepicker v0.0.1
 * (c) 2013 Luis Farzati http://github.com/luisfarzati/ng-bs-daterangepicker
 * License: MIT
 * update by zebing.wu 2017年05月03日17:50:15
 * 增加change回调,增加ranges
 */

require('./daterangepicker.css');
require('moment');
require('../../lib/bootstrap-daterangepicker/daterangepicker');
module.exports = angular.module('directive.daterangepicker', []).directive('daterangepicker', function ($compile, $parse) {
	return {
		restrict: 'A',
		require: '?ngModel',
		scope:{

			//callbacks
			change:"&"
		},
		link: function ($scope, $element, $attributes, ngModel) {

			if ($attributes.type !== 'daterange' || ngModel === null ) return;

			var options = {};
			options.format = $attributes.format || 'YYYY-MM-DD';
			options.separator = $attributes.separator || ' - ';
			options.minDate = $attributes.minDate && moment($attributes.minDate);
			options.maxDate = $attributes.maxDate && moment($attributes.maxDate);
			options.dateLimit = $attributes.limit && moment.duration.apply(this, $attributes.limit.split(' ').map(function (elem, index) { return index === 0 && parseInt(elem, 10) || elem; }) );
			options.ranges = {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
				'Last 7 days': [moment().subtract('days', 7), moment()],
				'Last 30 days': [moment().subtract('days', 30), moment()],
				'This month': [moment().startOf('month'), moment().endOf('month')]
			};

			function format(date) {
				return date.format(options.format);
			}

			function formatted(dates) {
				return [format(dates.startDate), format(dates.endDate)].join(options.separator);
			}

			ngModel.$formatters.unshift(function (modelValue) {
				if (!modelValue) return '';
				return modelValue;
			});

			ngModel.$parsers.unshift(function (viewValue) {
				return viewValue;
			});

			ngModel.$render = function () {
				if (!ngModel.$viewValue || !ngModel.$viewValue.startDate) return;
				$element.val(formatted(ngModel.$viewValue));
			};

			$scope.$watch($attributes.ngModel, function (modelValue) {
				if (!modelValue || (!modelValue.startDate)) {
					ngModel.$setViewValue({ startDate: moment().startOf('day'), endDate: moment().startOf('day') });
					return;
				}
				$element.data('daterangepicker').startDate = modelValue.startDate;
				$element.data('daterangepicker').endDate = modelValue.endDate;
				$element.data('daterangepicker').updateView();
				$element.data('daterangepicker').updateCalendars();
			});

			$element.daterangepicker(options, function(start, end) {
				$scope.$apply(function () {
					ngModel.$setViewValue({ startDate: start, endDate: end });
					ngModel.$render();
					$scope.change({
						times:{
							startDate: start, endDate: end
						}
					});
				});
			});
		}
	};
}).name;