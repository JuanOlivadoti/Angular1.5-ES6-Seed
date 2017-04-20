import angualr from "angular";

let settingsModule = angular.module('app.settings', []);

import SettingsConfig from "./settings.config";
import SettingsCtrl from "./settings.controller"

export default settingsModule
  .config(SettingsConfig)
  .controller('SettingsCtrl', SettingsCtrl)
  .name;
