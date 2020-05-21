'use strict';
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }
});

/* eslint-disable */
    // Модальное окно

// открыть по кнопке
$(".js-button-campaign").click(function() {

  $(".js-overlay-campaign").fadeIn();
  $(".js-overlay-campaign").addClass("disabled");

});

// закрыть на крестик
$(".js-close-campaign").click(function() {
  $(".js-overlay-campaign").fadeOut();

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
  var popup = $(".js-popup-campaign");
  if (e.target!=popup[0]&&popup.has(e.target).length === 0){
    $(".js-overlay-campaign").fadeOut();
  }
});

//Маска для телефона
var element = document.getElementById("phone");
  var maskOptions = {
      mask: "+0(000)000-00-00",
      lazy: false
  }
  var mask = new IMask(element, maskOptions);


/* eslint-disable */
