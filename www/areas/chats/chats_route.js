angular.module('chats.route', ['chats.controller'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'areas/chats/chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
  });
