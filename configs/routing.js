app.config(['$locationProvider', '$httpProvider', function ($locationProvider, $httpProvider) {
        $locationProvider.hashPrefix('');
        // $httpProvider.interceptors.push('httpInjector');
        // $locationProvider.html5Mode(true);
    }]);

app.config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    var cacheBustSuffix = Date.now();
    $urlRouterProvider.when("/", "/home");
    $urlRouterProvider.when("", "/home");
    $urlRouterProvider.otherwise("404");
    $stateProvider
    //For Load Main file to enter in dashboard
    .state('main', {
        abstract: true,
        templateUrl: 'views/main.html',
        controller: "headerCtrl",
        data: {
            pageTitle: 'Techlion : Dashboard'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })

    //landing page
    .state('/', { 
        url: "/home",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/home.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : home'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })

    //Login route
    .state('main.login', { 
        url: "/login",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/before-login-header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/login.html',
                controller: ''
            }
        },
        data: {
            pageTitle: 'Techlion : Login'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })
    
    //signup route
    .state('main.signup', { 
        url: "/register",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/before-login-header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/signup.html',
                controller: ''
            }
        },
        data: {
            pageTitle: 'Techlion : Register'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    }) 

    //signup route
    .state('main.forgotPassword', { 
        url: "/forgotPassword",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/before-login-header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/technician/forgotpassword.html'
                
            }
        },
        data: {
            pageTitle: 'Techlion : Register'
        }
    })
   
    //Email verify route
    .state('main.email-verify', { 
        url: "/email-verify",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/before-login-header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/email-verify.html',
                controller: ''
            }
        },
        data: {
            pageTitle: 'Techlion : Email verify'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }
                ]);
            }]
        }
    })   

    //change password route
    .state('main.change-password', { 
        url: "/changepassword",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/after-login-header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/change-password.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Change password'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })   

    //About route
    .state('main.about', { 
        url: "/about",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/after-login-header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/about.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Change password'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })   

    //Get a quote route
    .state('main.get_a_quote', { 
        url: "/get_a_quote",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/get_a_quote.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Login'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })

     //track route
    .state('main.track', { 
        url: "/track",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/after-login-header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/track.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Track'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    }) 
     //track non login route
    .state('main.track-non-login', { 
        url: "/track-non-login",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/track-non-login.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Track'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })

// request detail
    .state('main.request-detail', { 
        url: "/request-detail",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/request-detail.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Technicians-list-book'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })  
//technician list book
    .state('main.technicians-list-book', { 
        url: "/technicians-list-book",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/technicians-list-book.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Technicians-list-book'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })   
    // Technicians list blank route
    .state('main.technicians_list_blank', { 
        url: "/technicians_list_blank",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/technicians_list_blank.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Login'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })

    // home repair route
    .state('main.home_repair', { 
        url: "/home_repair",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/home_repair.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Login'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })

    // message route
    .state('main.message', { 
        url: "/message",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/messages.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Login'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })

    //profile route
    .state('main.profile', { 
        url: "/profile",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/after-login-header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/profile.html',               
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Profile'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })

    //contact page route
    .state('main.contact', { 
        url: "/contactus",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/after-login-header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/contact.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Contact us'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    }) 

// Technician page routing start
    //Login route
    .state('main.technician-login', { 
        url: "/technician-login",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/before-login-header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/technician/login.html',
                controller: ''
            }
        },
        data: {
            pageTitle: 'Techlion : Login'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })
    
    //signup route
    .state('main.technician-signup', { 
        url: "/technician-register",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/before-login-header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/technician/signup.html',
                controller: ''
            }
        },
        data: {
            pageTitle: 'Techlion : Register'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })

    //signup-step1 route
    .state('main.technician-signup-step1', { 
        url: "/technician-signup-step1",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/signupHeader.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/technician/signup-step1.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Register step1'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })
    //signup-step2 route
    .state('main.technician-signup-step2', { 
        url: "/technician-signup-step2",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/signupHeader.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/technician/signup-step2.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Register step2'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })
    //signup-step3 route
    .state('main.technician-signup-step3', { 
        url: "/technician-signup-step3",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/signupHeader.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/technician/signup-step3.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Register step3'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })
    //signup-step4 route
    .state('main.technician-signup-step4', { 
        url: "/technician-signup-step4",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/signupHeader.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/technician/signup-step4.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Register step4'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })
    //faq route
    .state('main.faq', { 
        url: "/faq",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/after-login-header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/technician/faq.html',               
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'faqCtrl',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : profile bank account detail'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })
    //profile layout route
    .state('techLayout', {
        parent: "main",
        abstract: true,
        views: {
            'header': {
                templateUrl: 'views/layout/after-login-header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/technician/technicianProfilLayout.html',               
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Technician Profile'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })
    // profile pages route
    .state('techLayout.section', { 
        url: "/technician/:type",
        views: {
            'header': {
                templateUrl: 'views/layout/after-login-header.html',
                controller: 'headerCtrl'
            },
            'section': {
                templateUrl: function (stateParams) {
                    return 'views/technician/tech-' + stateParams.type + '.html'
                }
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Technician Profile'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })

    //My order layout route
    .state('myorderLayout', {
        parent: "main",
        abstract: true,
        views: {
            'header': {
                templateUrl: 'views/layout/after-login-header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/myorderLayout.html',               
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : My order'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })

    // myorder pages route
    .state('myorderLayout.subsection', { 
        url: "/myorder/:type",
        views: {
            'header': {
                templateUrl: 'views/layout/after-login-header.html',
                controller: 'headerCtrl'
            },
            'subsection': {
                templateUrl: function (stateParams) {
                    return 'views/customer/myorder-' + stateParams.type + '.html'
                }
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : My order'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })

    //change password route
    .state('main.technician-change-password', { 
        url: "/technician-changepassword",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/after-login-header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/technician/change-password.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Techlion : Change password'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    }) 

    //404 page route
    .state('404', {
        url: "/404",
        templateUrl: "views/404.html",
        controller: "",
        data: {
            pageTitle: 'Techlion : Retailer 404'
        },
        resolve: {
            store: function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: "404",
                    files: [
                    ]
                });
            }
        }
    })
});
