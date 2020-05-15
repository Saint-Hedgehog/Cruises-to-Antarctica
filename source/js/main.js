'use strict';
var element = document.getElementById('phone');
var maskOptions = {
  mask: '+0(000)000-00-00',
  lazy: false
};
var mask = new IMask(element, maskOptions);

// Модальное окно

// открыть по кнопке
('.js-button-campaign').click (function () {
  ('.js-overlay-campaign').fadeIn();
  ('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
('.js-close-campaign').click (function () {
  ('.js-overlay-campaign').fadeOut();
});

// закрыть по клику вне окна
(document).mouseup(function (e) {
  var popup = ('.js-popup-campaign');
  if (e.target !== [0] && popup.has (e.target).length === 0) {
    ('.js-overlay-campaign').fadeOut();
  }
});
