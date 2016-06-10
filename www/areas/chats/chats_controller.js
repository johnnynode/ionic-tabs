angular.module('chats.controller', ['starter.services.chats'])
  .controller('ChatsCtrl', ['$scope','Chats',function($scope,Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  }]);
