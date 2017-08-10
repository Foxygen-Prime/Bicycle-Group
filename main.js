function initMap() {
       var uluru = {lat: 30.2629284,lng: -97.76293090000001};
       var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 4,
         center: uluru
       });
       var marker = new google.maps.Marker({
         position: uluru,
         map: map
       });
     }
