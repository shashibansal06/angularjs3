angular.module("app").controller("headerCtrl", function ($scope, $state, $rootScope, $window) {
	// login signup header start

	if($state.current.name == "main.signup"){
		$scope.button = "Login";
		$scope.pagename="main.login";
		$scope.userstatus="Already have an account?";
	}
	if($state.current.name == "main.login"){ 
		$scope.button = "Signup";
		$scope.pagename="main.signup";
		$scope.userstatus="Not a Member?";
	} 
	if($state.current.name == "main.email-verify"){
		$scope.button = "Login";
		$scope.pagename="main.login";
		$scope.userstatus="Already have an account?";
	} 
	if($state.current.name == "main.forgotPassword"){
		$scope.button = "Login";
		$scope.pagename="main.login";
		$scope.userstatus="Already have an account?";
	}  
	// login signup header end

	if($state.current.name == "main.technician-signup"){
		$scope.button = "Login";
		$scope.pagename="main.technician-login";
		$scope.userstatus="Already have an account?";
	}
	if($state.current.name == "main.technician-login"){
		$scope.button = "Signup";
		$scope.pagename="main.technician-signup";
		$scope.userstatus="Not a Member?";
	} 
 	$scope.searchToggle = function(){
 		if ($scope.class === "open")
            $scope.class = "closed";
        else
            $scope.class = "open";
    };  
    $(window).resize(function() {
        if ($(window).width() < 991) {
            angular.element('.sidebar .dropdown').removeClass('open');
            angular.element('.sidebar ul').addClass('dropdown-menu');       
        } else {
            angular.element('.sidebar .dropdown').addClass('open');
            angular.element('.sidebar ul').removeClass('dropdown-menu');
        }
    }).resize();

    $scope.slider = {
	    value: 10,
	    options: {
	        showSelectionBar: true,
	        translate: function(value) {
		      	return value +'mi';
		    }
	    }
	};

});



