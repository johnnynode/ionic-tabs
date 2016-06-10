angular.module('chatDetail.controller', ['starter.services.chats'])
  .controller('ChatDetailCtrl', ['$scope','$stateParams','Chats',function($scope, $stateParams,Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  }]);
