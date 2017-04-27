class CommentCtrl {
  constructor(User){
    'ngInject';

    this._User = User;

  }
  //The user can only delete this comment if ther are the author.
  $onInit(){
    if (this._User.current) {
      this.canModify = (this._User.current.username === this.data.author.username);
    } else {
      this.canModify = false;
    }
  }
}

let Comment = {
  bindings: {
    data: '=',
    deleteCb: '&'
  },
  templateUrl: 'article/components/comment.html',
  controller: CommentCtrl
}

export default Comment;
