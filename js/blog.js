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
        .when('/faith', { templateUrl: 'bio/faith.html', controller: 'MarkdownController' })
        .when('/coming-soon', { templateUrl: 'coming-soon.html' })
        .when('/just-start', { templateUrl: 'ideas/just-start/just-start.html', controller: 'MarkdownController' })
        .when('/ask-why', { templateUrl: 'ideas/ask-why/ask-why.html', controller: 'MarkdownController' });
    })
    .controller('MarkdownController', function ($route) {
      $.get($route.current.$$route.templateUrl + '.md', function (data) {
        document.getElementById('markdown').innerHTML = marked(data);
      });
    })
    .controller("AskController", function ($scope) {
      $scope.iteration = 0;
      $scope.questions = [
        {
          question: "What do you need, business cat?",
          answer: "I need my users to see their accounts online",
          image: "\\ideas\\ask-why\\iteration01.png"
        },
        {
          question: "Why does your business need clients to see accounts online?",
          answer: "We've had a lot of requests, our comptetitors are ahead of us.",
          image: "\\ideas\\ask-why\\iteration02.png"
        },
        {
          question: "Why are your competitors ahead of you?",
          answer: "We're not really a bank, but we compete with banks whom have all built digital platforms.",
          image: "\\ideas\\ask-why\\iteration03.png"
        },
        {
          question: "Do you want to become a bank?",
          answer: "We simply do credit, for us it's about providing specialized credit for farmer inputs.",
          image: "\\ideas\\ask-why\\iteration04.png"
        },
        {
          question: "What is it that you offer that clients can't get at a bank?",
          answer: "Our service is personal, we know farming and we have relationships with our clients.",
          image: "\\ideas\\ask-why\\iteration05.png"
        }
      ]
    });

})();
