import angular from 'angular';

let componentsModule = angular.module('app.components', []);

//Component
import ListErrors from './listErrors.component';
import FollowBtn from './buttons/followBtn.component';
import ArticleMeta from './article-helpers/article-meta.component';

//Directive
import ShowAuthed from './showAuthed.directive';

export default componentsModule
  .component('listErrors', ListErrors)
  .component('followBtn', FollowBtn)
  .component('articleMeta', ArticleMeta)
  //Directive
  .directive('showAuthed', ShowAuthed)
  .name;
