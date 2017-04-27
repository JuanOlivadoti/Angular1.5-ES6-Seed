class ArticleActionsCtrl {
  constructor(Articles, User, $state) {
    'ngInject';

    this._Articles = Articles;
    this._$state = $state;
    this.User = User;

  }

  $onInit(){
    if (this.User.current) {
      this.canModify = (this.User.current.username === this.article.author.username);
    } else {
      this.canModify = false;
    }
  }

  deleteArticle() {
    this.isDeleting = true;
    this._Articles.destroy(this.article.slug).then(
      (success) => this._$state.go('app.home'),
      (err) => this._$state.go('app.home')
    )
  }
}

let ArticleActions = {
  bindings: {
    article: '='
  },
  controller: ArticleActionsCtrl,
  templateUrl: 'article/components/article-actions.html'
};

export default ArticleActions;
