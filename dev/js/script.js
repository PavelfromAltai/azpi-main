$(document).ready(function(){
  //Code here
  ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [56.2472317210527,74.25148588083509],
              zoom: 4,
              controls: [],
              type:'yandex#satellite'
          });
          myPlacemark = new ymaps.Placemark([53.38905307106474,83.73703400000001], {
                    // hintContent: 'Собственный значок метки',
                      balloonContent: '<b>АЗПИ</b><br><span>г. Барнаул</span><br><span>+7 (999) 987 65 43</span<br>'
                  },{
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/placemark.svg',
            // Размеры метки.
            iconImageSize: [38, 55],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

        myMap.behaviors
                .disable(['scrollZoom']);
        myMap.geoObjects
               .add(myPlacemark);
});


});
