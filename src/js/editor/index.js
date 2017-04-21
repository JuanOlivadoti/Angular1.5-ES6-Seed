import angular from 'angular';

let editorModule = angular.module('app.editor', []);

import EditorCtrl from './editor.controller';
import EditorConfig from './editor.config';

export default editorModule
  .controller('EditorCtrl', EditorCtrl)
  .config(EditorConfig)
  .name;
