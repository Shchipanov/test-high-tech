import {iosVhFix} from './utils/ios-vh-fix';
import {becomeDisabled} from './modules/disabled';
import {getSelectCard, hoverCard} from './modules/selected';

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
    becomeDisabled();
    getSelectCard();
    hoverCard();
  });
});
