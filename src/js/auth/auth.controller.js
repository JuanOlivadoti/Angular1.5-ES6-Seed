class AuthCtrl {
  constructor($state){
    'ngInject'

    // this.$state = $state;
    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');

    // this.isSubmitting = false;
  }

  submitForm(){
    this.isSubmitting = true;

    console.log(this.formData);
  }
}

export default AuthCtrl;
