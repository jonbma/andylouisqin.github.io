(function() {
	var app;
	app = angular.module("app", ['ngRoute']);

	app.config(function($routeProvider) {
		return $routeProvider.when("/", {
			templateUrl: "pages/main.html",
			controller: "mainController",
			title: "Portfolio"
		}).when("/main", {
			templateUrl: "pages/main.html",
			controller: "mainController",
			title: "Portfolio"
		}).when("/about", {
			templateUrl: "pages/about.html",
			controller: "aboutController",
			title: "Purpose"
		}).when("/resume", {
			templateUrl: "pages/resume.html",
			controller: "resumeController",
			title: "Resume"
		}).when("/wdd", {
			templateUrl: "pages/wdd.html",
			controller: "wddController",
			title: "Web Design Class"
		}).otherwise({
			redirectTo: "/",
			title: "Portfolio"
		});
	});

	app.run(['$location','$rootScope', function($scope, $rootScope) {
		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			$rootScope.title = current.$$route.title;
		});
	}]);

	app.controller("navController", function($scope, $location) {
		$scope.isActive = function(viewLocation) {
			return viewLocation === $location.path();
		};
	});

	app.controller("mainController", function($scope) {

		$scope.projects = [
			{title: "Web Design DeCal", path: "wdd", tagline: "Teaching Web Design to UC Berkeley"}
		];

	});

	app.controller("aboutController", function($scope) {
		$scope.params = "about";
	});

	app.controller("resumeController", function($scope) {
		$scope.params = "resume";
	});


}).call(this);