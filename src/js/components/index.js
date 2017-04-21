import angular from 'angular';

let componentsModule = angular.module('app.components', []);

//Component
import ListErrors from './listErrors.component';
import FollowBtn from './buttons/followBtn.component';

//Directive
import ShowAuthed from './showAuthed.directive';

export default componentsModule
  .component('listErrors', ListErrors)
  .component('followBtn', FollowBtn)
  //Directive
  .directive('showAuthed', ShowAuthed)
  .name;
