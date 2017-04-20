class AuthCtrl {
  constructor(User, $state){
    'ngInject'

    this._User = User;
    this._$state = $state;

    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');


    // this.isSubmitting = false;
  }

  submitForm(){
    this.isSubmitting = true;

    this._User.attemptAuth(this.authType, this.formData)
      .then(
        (res) => {
          this._$state.go('app.home');
          console.log(res);
        },
        (err) => {
          this.isSubmitting = false;
          this.errors = err.data.errors;
        }
      );
  }
}

export default AuthCtrl;
