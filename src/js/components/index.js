import angular from 'angular';

let componentsModule = angular.module('app.components', []);

//Directive
import ShowAuthed from './showAuthed.directive';

//Component
import ListErrors from './listErrors.component';
import FollowBtn from './buttons/followBtn.component';
import ArticleMeta from './article-helpers/article-meta.component';

export default componentsModule
  //Directive
  .directive('showAuthed', ShowAuthed)
  //Component
  .component('listErrors', ListErrors)
  .component('followBtn', FollowBtn)
  .component('articleMeta', ArticleMeta)
  .name;
