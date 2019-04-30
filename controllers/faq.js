angular.module("app").controller("faqCtrl", function ($scope, $state, $rootScope, $window) {
	$scope.oneAtATime = true;
	$scope.status = {
	    isCustomHeaderOpen: false,
	    isFirstOpen: true,
	    isFirstDisabled: false
	};
});


