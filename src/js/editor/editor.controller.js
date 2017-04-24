class EditorCtrl {
  constructor(Articles, article, $state) {
    'ngInject';

    this._Articles = Articles;
    this._$state = $state;

    if (!article){
      this.article = {
        title: '',
        description: '',
        body: '',
        tagList: []
      }
    } else {
      this.article = article;
    }
  }

  submit() {
    this.isSubmitting = true;

    this._Articles.save(this.article).then(
      (newArticle) => {
        this._$state.go('app.article', { slug: newArticle.slug });
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    );
  }

  addTag(){
    //Make sure this tag is not already in the array
    if (!this.article.tagList.includes(this.tagField)) {
      this.article.tagList.push(this.tagField);
      this.tagField = '';
    }
  }

  removeTag(tagName) {
    this.article.tagList = this.article.tagList.filter((slug) => slug != tagName);
  }

}

export default EditorCtrl;
