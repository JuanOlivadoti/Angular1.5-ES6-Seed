class FavoriteBtnCtrl {
  constructor(User, Articles, $state) {
    'ngInject';

    this._Articles = Articles;
    this._User = User;
    this._$state = $state;

  }

  submit() {
    this.isSubmitting = true;

    if (!this._User.current) {
      this._$state.go('app.register');
      return;
    }

    // If fav'd already, unfavorite it
    if (this.article.favorited) {
      this._Articles.unfavoriteArticle(this.article.slug).then(
        () => {
          this.isSubmitting = false;
          this.article.favorited = false;
          this.article.favoritesCount--;
        }
      )

    // Otherwise, favorite it
    } else {
      this._Articles.favoriteArticle(this.article.slug).then(
        () => {
          this.isSubmitting = false;
          this.article.favorited = true;
          this.article.favoritesCount++;
        }
      )
    }
  }
}

export default {
  bindings: {
    article: '='
  },
  transclude: true,
  controller: FavoriteBtnCtrl,
  templateUrl: 'components/buttons/favoriteBtn.html'
};
