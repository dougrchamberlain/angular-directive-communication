import 'normalize.css';
import 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-material/angular-material.css';
import 'angular-ui-router';

import './style.css';

angular.module('myApp',
  ['ngMaterial', 'ngAnimate', 'ui.router'])
  .controller('myController', [
    function () {
      //fake gettting data from a database. work more quickly
      var vm = this;
    }
  ]);