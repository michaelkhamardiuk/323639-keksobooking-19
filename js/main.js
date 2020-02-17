'use strict';

var ADS_QUANTITY = 8;
var PIN_WIDTH = 50;
var PIN_HEIGHT = 70;

var ads = [];
var offer_titles = ['Заголовок предложения 1', 'Заголовок предложения 2', 'Заголовок предложения 3', 'Заголовок предложения 4', 'Заголовок предложения 5', 'Заголовок предложения 6', 'Заголовок предложения 7', 'Заголовок предложения 8'];
var offer_addreses = ['200, 130', '300, 185', '400, 250', '500, 350', '600, 450', '700, 350', '800, 250'];
var offer_prices = ['1500', '200', '2700', '800', '999', '8900', '1000', '9999'];
var offer_types = ['palace', 'flat', 'house', 'bungalo'];
var offer_rooms = ['1', '2', '3', '4'];
var offer_guests = ['1', '2', '3', '4', '5', '6', '7', '8'];
var offer_checkins = ['12:00', '13:00', '14:00'];
var offer_checkouts = ['12:00', '13:00', '14:00'];
var offer_feutures = [['washer', 'elevator', 'conditioner'], ['wifi', 'dishwasher', 'parking'], ['wifi', 'parking', 'washer',  'conditioner']];
var offer_descriptions = ['Строка с описанием 1', 'Строка с описанием 2', 'Строка с описанием 3', 'Строка с описанием 4', 'Строка с описанием 5', 'Строка с описанием 6', 'Строка с описанием 7', 'Строка с описанием 8'];
var offer_photos = [['http://o0.github.io/assets/images/tokyo/hotel1.jpg, http://o0.github.io/assets/images/tokyo/hotel2.jpg'], ['http://o0.github.io/assets/images/tokyo/hotel2.jpg, http://o0.github.io/assets/images/tokyo/hotel3.jpg'], ['http://o0.github.io/assets/images/tokyo/hotel1.jpg, http://o0.github.io/assets/images/tokyo/hotel3.jpg']];
var offer_location_x = ['200', '300', '400', '500', '600', '700', '800', '630'];
var offer_location_y = ['130', '200', '270', '340', '430', '500', '570', '630'];

var map = document.querySelector('.map');
map.classList.remove('map--faded');

var pinList = document.querySelector('.map__pins');
var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

var getRandomValue = function (data) {
  var randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
};

var generateAds = function () {
  for (var i = 0; i < ADS_QUANTITY; i++) {
    var ad = {
      "author": {
        "avatar": "img/avatars/user0" + [i + 1] + ".png"
      },
      "offer": {
        "title": getRandomValue(offer_titles),
        "address": getRandomValue(offer_addreses),
        "price": getRandomValue(offer_prices),
        "type": getRandomValue(offer_types),
        "rooms": getRandomValue(offer_rooms),
        "guests": getRandomValue(offer_guests),
        "checkin": getRandomValue(offer_checkins),
        "checkout": getRandomValue(offer_checkouts),
        "features": getRandomValue(offer_feutures),
        "description": getRandomValue(offer_descriptions),
        "photos": getRandomValue(offer_photos)
      },
      "location": {
        "x": getRandomValue(offer_location_x),
        "y": getRandomValue(offer_location_y)
      }
    };

    ads[i] = ad;
  }

  return ads;
};

generateAds();

var renderPin = function (ad) {
  var pinElement = pinTemplate.cloneNode(true);

  pinElement.style.left = ad.location.x - PIN_WIDTH + 'px';
  pinElement.style.top = ad.location.y - PIN_HEIGHT + 'px';
  pinElement.querySelector('img').src = ad.author.avatar;
  pinElement.querySelector('img').alt = ad.offer.title;

  return pinElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < ads.length; i++) {
  var pinItem = renderPin(ads[i]);
  fragment.appendChild(pinItem);
}

pinList.appendChild(fragment);
