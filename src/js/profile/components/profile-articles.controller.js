export default class ProfileArticlesCtrl {
  constructor(profile, $state) {
    'ngInject'

    this.profile = profile;

    this.profileState = $state.current.name.replace('app.profile.', '');

  }


}
