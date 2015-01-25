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
		}).when("/apple", {
			templateUrl: "pages/apple.html",
			controller: "appleController",
			title: "Summer 2014 Internship"
		}).when("/codeprep", {
			templateUrl: "pages/codeprep.html",
			controller: "codeprepController",
			title: "First Business"
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
			{
				title: "Web Design DeCal", 
				path: "wdd", 
				tagline: "Teaching Web Design to UC Berkeley",
				summary: "How I found myself teaching Berkeley's most popular student-run class."},
			{
				title: "Pluggable Metrics", 
				path: "apple", 
				tagline: "Built during my Summer @ Apple, Inc.",
				summary: "A data visualization tool to help server administrators everywhere!"},
			{
				title: "CodePrep, LLC",
				path: "codeprep", 
				tagline: "Web Development Classes for K-12 Students",
				summary: "In which I ramble about my first business, and the challenges we faced."}
		];

	});

	app.controller("aboutController", function($scope) {
		$scope.params = "about";
	});

	app.controller("resumeController", function($scope) {
		$scope.params = "resume";
	});

	app.controller("wddController", function($scope) {
		$scope.params = "wdd";
	});

	app.controller("appleController", function($scope) {
		$scope.params = "apple";
	});

	app.controller("codeprepController", function($scope) {
		$scope.params = "codeprep";
	});

}).call(this);