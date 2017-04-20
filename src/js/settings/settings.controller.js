class SettingsCtrl {
  constructor(User, $state) {
    'ngInject';

    this._User = User;
    this._$state = $state;

    this.formData = {
      username: User.current.username,
      image: User.current.image,
      bio: User.current.bio,
      email: User.current.email
    };


    // this.logout = User.logout.bind(User);
  }

  logout(){
    this._User.logout();
  }

  submitForm(){
    this.isSubmitting = true;
    this._User.update(this.formData)
      .then(
        (user) => {
          console.log('updated!');
          this._$state.go('app.profile', { username: user.username });
        },
        (err) => {
          this.isSubmitting = false;
          this.errors = err.data.errors;
        }
      )
  }

}

export default SettingsCtrl;
