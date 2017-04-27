import angular from 'angular';

let componentsModule = angular.module('app.components', []);

//Directive
import ShowAuthed from './showAuthed.directive';

//Component
import ListErrors from './listErrors.component';
import FollowBtn from './buttons/followBtn.component';
import FavoriteBtn from './buttons/favoriteBtn.component';
import ArticleMeta from './article-helpers/article-meta.component';
import ArticlePreview from './article-helpers/article-preview.component';
import ArticleList from './article-helpers/article-list.component';

export default componentsModule
  //Directive
  .directive('showAuthed', ShowAuthed)
  //Component
  .component('listErrors', ListErrors)
  .component('followBtn', FollowBtn)
  .component('favoriteBtn', FavoriteBtn)
  .component('articleMeta', ArticleMeta)
  .component('articlePreview', ArticlePreview)
  .component('articleList', ArticleList)
  .name;
