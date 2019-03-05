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
        vm.allergies = require('./data/allergies');
        vm.getEncounter();
      };

      vm.getEncounter = function () {
        vm.encounters = require('./data/encounters');
        vm.setEncounter(vm.encounters[0]);
      }

      vm.setEncounter = function (encounter) {
        vm.encounter = encounter;
        vm.updateSections();
      }

      vm.updateSections = function () {
        vm.sections = Object.assign({}, require('./data/sections'));
        console.log('sections', vm);
      }

      vm.toggleMenu = function () {
        $mdSidenav('encounter-list').toggle();
      };

      vm.filterAllergies = function (search) {
        console.log('allergies');
        return vm.allergies.filter(function (a) { return new RegExp(search).test(a); })
      }
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
