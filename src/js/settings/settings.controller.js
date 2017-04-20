class SettingsCtrl {
  constructor(User) {
    'ngInject';

    // this._User = User;

    this.formData = {
      username: User.current.username,
      image: User.current.image,
      bio: User.current.bio,
      email: User.current.email
    };


    this.logout = User.logout.bind(User);
  }

  // logout(){
  //   this._User.logout();
  // }

}

export default SettingsCtrl;
