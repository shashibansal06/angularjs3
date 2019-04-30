/*
 * @file: routing.js
 * @description:
 * @author: Inderjeet Singh
 * @date: 24-01-2018
 * */

// declaring the main app variable
var app = angular.module("app", ["environment", "ui.router","rzModule", "oc.lazyLoad", 'ui.bootstrap','ngAnimate', 'ngLetterAvatar']);

// app.config(['$ocLazyLoadProvider', 'envServiceProvider', 'httpRequestInterceptorCacheBusterProvider', function ($ocLazyLoadProvider, envServiceProvider, httpRequestInterceptorCacheBusterProvider) {
//         $ocLazyLoadProvider.config({
//             debug: false,
//             events: true,
//             cache: false
//         });

//         httpRequestInterceptorCacheBusterProvider.setMatchlist([/.*views.*/, /.*assets.*/, /.*directive_templates.*/], true);

//         // set the domains and variables for each environment
//         envServiceProvider.config({
//             domains: {
//                 development: ['/', 'server.schop.com'],
//                 production: ['frontend.schop.com', 'schopserver.ignivastaging.com'],
//                 test: ['frontend.schop.com', 'server.schop.com']
//             },
//             vars: {
//                 development: {
//                     apiUrl: '//server.schop.com/retailer/',
//                     siteUrl: '//server.schop.com/',
//                     staticUrl: '//static.acme.dev.local'
//                 },
//                 test: {
//                     apiUrl: '//test.schop.com/api/',
//                     siteUrl: '//test.schop.com/',
//                     staticUrl: '//static.acme.dev.test'
//                 },
//                 production: {
//                     apiUrl: '//schopserver.ignivastaging.com/retailer/',
//                     siteUrl: '//schopserver.ignivastaging.com/',
//                     staticUrl: '//static.acme.com',

//                 },
//                 defaults: {
//                     apiUrl: '//server.schop.com/admin/',
//                     siteUrl: '//server.schop.com/',
//                     staticUrl: '//static.default.com'
//                 }
//             }
//         });
//         envServiceProvider.check();
//         envServiceProvider.set('defaults'); // will set 'production' as current environment
//     }]);
app.run(function ($rootScope, $stateParams, $location, $state) {


    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams, current) {


    });

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

    });

});