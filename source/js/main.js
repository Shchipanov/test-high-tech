import {iosVhFix} from './utils/ios-vh-fix';

import {initVideo} from './modules/init-video';
import {addText} from './modules/adding-text';
import {sliderTrainers, removeNotJs, sliderAdvt} from './modules/slider';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initVideo();
    addText();
    sliderTrainers();
    removeNotJs();
    sliderAdvt();
  });
});
