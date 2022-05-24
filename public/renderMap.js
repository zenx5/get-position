"use strict";
(function(){

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position => {
            let longitude = position.coords.longitude;
            let latitude = position.coords.latitude;
            let zoom = 7;
            let map = L.map('map').setView([latitude,longitude], zoom);
            let tiles = L
            .tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib21hcnRpbmV6MTYxOCIsImEiOiJjbDNqZHM5OTExYW8wM2RxaTRzdDl6amoyIn0.aHsna_GZwqv43-FzOyPWnA', {
                maxZoom: 18,
                attribution: 'Creado por Octavio Martinez',
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1
            }).addTo(map);

            
        });
    }
})();
