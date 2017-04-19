import angular from "angular";

let authModule = angular.module('app.auth', []);

//Config
import AuthConfig from './auth.config';

//Controller
import AuthCtrl from './auth.controller';

export default authModule
  //Config
  .config(AuthConfig)
  //Controller
  .controller('AuthCtrl', AuthCtrl)
  .name;
