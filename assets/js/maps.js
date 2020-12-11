function initMap() {
     const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: { lat: 46.8014526, lng: -63.9233633 },
        });

        var labels='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var locations = [
            {lat: 43.642566 , lng: -79.387057 },
            {lat: 43.667250 , lng: -79.393540},
            {lat: 40.712776, lng: -74.005974},
            {lat: 41.496650 , lng: -74.109590 }
        ];
        var markers = locations.map(function(location,i){
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });  
        });
        var path = "assets/images";
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: `${path}/m`});

    }