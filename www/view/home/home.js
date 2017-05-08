'use strict';
module.exports = angular.module("app.home").controller("homeCtrl", function() {
    this.test = function() {
        alert(this.name);
    }
}).name;
