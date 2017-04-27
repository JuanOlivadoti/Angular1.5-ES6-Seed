import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

import UserService from './user.service';
import JwtService from './jwt.service';
import ProfileService from './profile.service';
import ArticlesService from './articles.service';
import CommentsService from './comments.service';
import Tags from './tags.service';

export default servicesModule
  .service('User', UserService)
  .service('JWT', JwtService)
  .service('Profile', ProfileService)
  .service('Articles', ArticlesService)
  .service('Comments', CommentsService)
  .service('Tags', Tags)
  .name;
