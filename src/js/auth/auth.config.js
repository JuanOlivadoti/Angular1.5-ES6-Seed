function AuthConfig($stateProvider, $httpProvider) {
  'ngInject';

  $stateProvider
    .state('app.login', {
      url: '/login',
      templateUrl: 'auth/auth.html',
      controller: 'AuthCtrl as $ctrl',
      title: 'Sign In'
    })
    .state('app.register', {
      url: '/register',
      templateUrl: 'auth/auth.html',
      controller: 'AuthCtrl as $ctrl',
      title: 'Sign Up'
    })
}

export default AuthConfig;
