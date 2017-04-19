import angular from 'angular';

let componentsModule = angular.module('app.components', []);

//Component
import ListErrors from './listErrors.component';

//Directive
import ShowAuthed from './showAuthed.directive';

export default componentsModule
  .component('listErrors', ListErrors)
  //Directive
  .directive('showAuthed', ShowAuthed)
  .name;
