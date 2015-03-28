var fn = {
    ready: function(){
        document.addEventListener("deviceready",fn.init,false);
    },
    init: function(){
        navigator.geolocation.getCurrentPosition(fn.mapa,fn.error);
    },
    mapa: function(p){
        //Posición del mapa
        var latlng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
        var myOptions = {
            zoom: 8,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
        //Marcador
        var marker = new google.maps.Marker({
            position: latlng, 
            map: map, 
            title:"Mi posición"
        });
    },
    error: function(err){
        alert(err.code);
    }
};
$(fn.ready);