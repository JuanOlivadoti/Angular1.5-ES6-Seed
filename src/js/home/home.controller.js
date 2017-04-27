class HomeCtrl {
  constructor(User, Tags, AppConstants, $scope) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._$scope = $scope;
    this._Tags = Tags;
    this._User = User;

    }

    $onInit(){

    // Get list of all tags
    this._Tags
      .getAll()
      .then(
        (tags) => {
          this.tagsLoaded = true;
          this.tags = tags;
        }
      );


    // Set current list to either feed or all, depending on auth status.
    this.listConfig = {
      type: this._User.current ? 'feed' : 'all'
    };

  }

  changeList(newList){
    this._$scope.$broadcast('setListTo', newList)
  }


}

export default HomeCtrl;
