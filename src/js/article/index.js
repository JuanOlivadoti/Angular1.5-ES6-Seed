import angular from 'angular';

// Create the module where our functionality can attach to
let articleModule = angular.module('app.article', []);

// Include our UI-Router config settings
import ArticleConfig from './article.config';

// Controllers
import ArticleCtrl from './article.controller';

// Component
import ArticleActions from './article-actions.component';

export default articleModule
  .config(ArticleConfig)
  .controller('ArticleCtrl', ArticleCtrl)
  .component('articleActions', ArticleActions)
  .name;
