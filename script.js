// $(document).ready(function() {
//     $.ajax({
//         url: "http://192.168.64.1:3000/get-place",
//         method: "GET",
//         success: function(response) {
//         var place = response.place;
//         for (var i = 0; i < place.length; i++) {
//             $("#map").append("<p>" + place[i].diachi + "</p>");
//         }
//         }
//     });
// });

function moveMapToKHTN(map){
    map.setCenter({lat:10.76316473604989, lng:106.68238541539267});
    map.setZoom(15);
}


function addMarkerToGroup(group, coordinate, html) {
    var marker = new H.map.Marker(coordinate);
    // add custom data to the marker
    marker.setData(html);
    group.addObject(marker);
}

function addInfoBubble(map) {
    var group = new H.map.Group();

    map.addObject(group);

    group.addEventListener('tap', function (evt) {
        var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
            // read custom data
            content: evt.target.getData()
        });
        // show info bubble
        ui.addBubble(bubble);
    }, false);

    $(document).ready(function() {
        $.ajax({
            url: "http://localhost:3000/get-place",
            method: "GET",
            success: function(response) {
            var place = response.place;
            for (var i = 0; i < place.length; i++) {
                addMarkerToGroup(group, {lat: place[i].latitude, lng: place[i].longitude},
                    `<div class="place-info">
                        <b>${place[i].hinhthuc}</b>
                        <p>${place[i].loaivt}</p>
                        <p>${place[i].diachi}, ${place[i].khuvuc}</p>
                        <b><i>${place[i].quyhoach}</i></b>
                        <img class="img-place" src="${place[i].hinhanh}">
                    </div>`);
            }
            }
        });
    });

    // addMarkerToGroup(group, {lat: 10.764171, lng: 106.682503},
    //     '<div class="place-info"><p>Nowzone Fashion Mall</p></div>');

    // addMarkerToGroup(group, {lat: 10.759589, lng: 106.683782},
    //     '<div class="place-info"><p>Cây xăng</p></div>');
}

var platform = new H.service.Platform({
    apikey: "ylfzo_XrCL0wFOWqMdk89chLwml3by9ZPi5U6J-S3EU"
});
var defaultLayers = platform.createDefaultLayers(
    {
        lg: 'vi'
    }
);

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
    defaultLayers.vector.normal.map,{
    center: {lat:50, lng:5},
    zoom: 4,
    pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

  // Now use the map as required...
window.onload = function () {
    moveMapToKHTN(map);
}

  // Now use the map as required...
addInfoBubble(map);