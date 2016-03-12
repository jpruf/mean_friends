var friends_app = angular.module('friends_app',[]);

  friends_app.factory('FriendsFactory', function($http){
      var factory = {};
      var friends = [];
      factory.index = function(callback){
        $http.get('/friends').success(function(output){
          friends = output;
          callback(friends);
        })
      }
      factory.create = function(info, callback){
        $http.post('/addfriend', info).success(function(data){
          friends = data;
          callback(friends);
        })
      }
      factory.delete = function(info, callback){
        $http.post('/deletefriend', info).success(function(output){
          callback(output);
        })
      }
      return factory;
  })

  friends_app.controller('FriendsController', function($scope, FriendsFactory){
    FriendsFactory.index(function(data){
      $scope.friends = data;
    })
    $scope.addfriend = function(){
      FriendsFactory.create($scope.new_friend, function(data){
        $scope.friends = data;
      })
        $scope.new_friend = null;
    }
    $scope.deletefriend = function(friend){
      FriendsFactory.delete(friend, function(data){
        $scope.friends = data;
      })
    }
  })