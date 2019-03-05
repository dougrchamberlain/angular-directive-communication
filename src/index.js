import 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-ui-router';
import 'angular-material/angular-material.css';

import chartLayout from './foo.html';

console.log(chartLayout);

angular.module('myApp',
  ['ngMaterial', 'ui.router', 'ngAnimate'])
  .controller('myController', ['$mdSidenav',
    function ($mdSidenav) {
      //fake gettting data from a database. work more quickly
      var vm = this;

      vm.$onInit = function () {
        vm.getEncounter();
      };

      vm.getEncounter = function () {
        vm.encounter = require('./data/encounters')[0];
        vm.sections = require('./data/sections');
        console.log(vm.encounter, vm.sections);
      }

      vm.toggleMenu = function () {
        $mdSidenav('left').toggle();
      };

    }
  ]).config(['$urlRouterProvider', function ($urlRouterProvider) {
    //if not route is provided, always go to /encounter
    //$urlRouterProvider.otherwise('/encounter');
    console.log($urlRouterProvider);
  }]).config(['$stateProvider', function ($stateProvider) {
    console.log($stateProvider);

  }]).directive('chartLayout', [function () {
    return {
      transclude: {
        'header': '?chartHeader',
        'body': '?chartBody'
      },
      template: chartLayout
    }
  }])
