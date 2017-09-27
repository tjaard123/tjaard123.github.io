/*
 Blog
*/
(function () {
  'use strict';

  angular
    .module('blog', ['ngRoute','angulartics','angulartics.google.analytics'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', { templateUrl: 'main.html' })
        .when('/bio', { templateUrl: 'bio/bio.html', controller: 'MarkdownController' })
        .when('/coming-soon', { templateUrl: 'coming-soon.html' })
        .when('/just-start', { templateUrl: 'ideas/just-start/just-start.html', controller: 'MarkdownController' });
    })
    .controller('MarkdownController', function ($route) {
      $.get($route.current.$$route.templateUrl + '.md', function (data) {
        document.getElementById('markdown').innerHTML = marked(data);
      });
    });

})();
