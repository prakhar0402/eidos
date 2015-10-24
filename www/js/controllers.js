angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('CardsCtrl', function($scope, $http) {
	var APIURL = 'http://45.79.65.134:3500/'
	$http.get(APIURL+'api/dictionary/cards')
	.then(function successCallback(response) {
		$scope.cards = response.data
	}, function errorCallback(response) {
	    $scope.cards = [
	  	  { keyword: 'Unicorn',
	  	  	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
	  		image: "http://myths.e2bn.org/library/1402159986/unicorn1402159862.jpg",
	  		color:'#e84c3d',
	  	  },
	  	  { keyword: 'City',
	  	  	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
	  		image: "http://foto.hrsstatic.com/fotos/0/3/256/256/80/000000/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2F1%2F0%2F9%2F1%2F109110%2F109110_bc_5512982.jpg/rx2iqbXutGkCoKu9qFQdNw%3D%3D/621,416/6/The_Westin_St_Francis_San_Francisco_on_Union_Square-San_Francisco-Buisnesscenter-1-109110.jpg",
	  		color:'red',
	  	  },
	  	  { keyword: 'Reggae',
	  	  	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
	  		image: "http://i676.photobucket.com/albums/vv127/huguin_ska/espalda_negra.jpg",
	  		color:'green',
	  	  },

	    ];
	});
	$scope.card_header_style = function(){
		// return {"background": "blue"}
		return {"background": "linear-gradient(45deg, blue 0%, blue 80%, white 140%)"}
	}
	$scope.card_on_focus = 0
	$scope.focus_card = function(card_index){
		$scope.card_on_focus = card_index;
	}
	$scope.card_is_on_focus = function(index){
		return index == $scope.card_on_focus
	}
	
	$scope.card_body_style = function(index){
		if( index == $scope.card_on_focus)
			return {"display": "block"}
		return {"display": "none"}
	}

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
