import 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-ui-router';
import 'angular-material/angular-material.css'

angular.module('myApp',
  ['ngMaterial', 'ui.router', 'ngAnimate'])
  .controller('myController', [
    function () {
      //fake gettting data from a database. work more quickly
      var vm = this;

      vm.$onInit = function () {
        vm.data = require('./data/main-app-data.json');
      }

    }
  ])
