import angular from 'angular';

// Create the module where our functionality can attach to
let profileModule = angular.module('app.profile', []);

// Include our UI-Router config settings
import ProfileConfig from './profile.config';

// Controllers
import ProfileCtrl from './profile.controller';
import ProfileArticlesCtrl from './components/profile-articles.controller';


export default profileModule
  .config(ProfileConfig)
  .controller('ProfileCtrl', ProfileCtrl)
  .controller('ProfileArticlesCtrl', ProfileArticlesCtrl)
  .name;
