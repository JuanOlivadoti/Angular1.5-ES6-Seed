import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

import UserService from './user.service';
import JwtService from './jwt.service';

export default servicesModule
  .service('User', UserService)
  .service('JWT', JwtService)
  .name;
