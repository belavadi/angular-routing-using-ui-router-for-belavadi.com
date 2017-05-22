// app.js

var routerApp = angular.module('routerApp', ['ui.router']);


routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS

        .state('home', {
            url: '/home',
            templateUrl: 'home/partial-home.html'
        })
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl:'/home/list/partial-home-list.html',
        controller: function($scope) {
            $scope.articles =
            [
                // {
                //     q:"What if a black money hoarder buys bitcoins of his black money? How can it be tracked?",
                //     src:"https://www.quora.com/What-if-a-black-money-hoarder-buys-bitcoins-of-his-black-money-How-can-it-be-tracked/answer/Belavadi-Prahalad"
                // },
                // {
                //     q:"What is PoW and PoS in bitcoin?",
                //     src:"https://www.quora.com/What-is-PoW-and-PoS-in-bitcoin/answer/Belavadi-Prahalad"
                // }
            ];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
//

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS

        .state('about', {
            url: '/about',
            templateUrl: '/about/partial-about.html'
        })
        .state('resources',{
            url:'/resources',
            templateUrl: '/resources/partial-resource.html'
        })
        // .state('calendar',{
        //     url:'/calendar',
        //     templateUrl:'/calendar/partial-calendar.html'
        // })
        .state('about.calendar',{
            url: '/calendar',
            templateUrl:'/about/partial-about-calendar.html'
        })
        .state('about.initiative',{
            url:'/initiative',
            templateUrl:'/about/partial-about-initiative.html'
        })
        .state('about.contact',{
            url:'/contact',
            templateUrl:'/about/partial-about-contact.html'
        })
        .state('blog', {
            url: '/blog',
            templateUrl: '/blog/partial-blog.html'
        });
});

// let's define the scotch controller that we call up in the about state
routerApp.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});
