// 'use strict';

// var generateAds = function () {
//   var ads = [];

//   for (var i = 0; i < 8; i++) {
//     var ad = {
//       "author": {
//         "avatar": 'img/avatars/user0[' + i + 1 + '].png'
//       },
//       "offer": {
//         "title": 'Заголовок предложения'
//         "address": 'this.location.x, this.location.y',
//         "price": 1,
//         "type": строка с одним из четырёх фиксированных значений: palace, flat, house или bungalo
//         "rooms": 1,
//         "guests": 2,
//         "checkin": строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00,
//         "checkout": строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00
//         "features": массив строк случайной длины из ниже предложенных: "wifi", "dishwasher", "parking", "washer", "elevator", "conditioner",
//         "description": 'Строка с описанием',
//         "photos": массив строк случайной длины, содержащий адреса фотографий "http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
//       },
//       "location": {
//         "x": случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
//         "y": случайное число, координата y метки на карте от 130 до 630.
//       }
//     };
//   }
// };

// var fragment = document.createDocumentFragment();

var map = document.querySelector('.map');
map.classList.remove('map--faded');
