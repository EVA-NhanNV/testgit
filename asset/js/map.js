$(document).ready(function() {
    function initMap() {
    	$.each(['mapcpn', 'mapcpnsp'], function( index, value ) {
		  var map = new google.maps.Map(document.getElementById(value), {
		    center: {lat: 35.692261, lng: 139.722381},
		    zoom: 17,
		    zoomControl: true,
		    scaleControl: false,
		    scrollwheel: false,
		    disableDoubleClickZoom: true,
		    styles:[{
		    "stylers": [
			    {
			    	"hue": "#ffff00"
			    },
			    {
			    	"lightness": 10
			    },
			    {
			    	"saturation": -100
			    }
			    ],
			    	"elementType": "all",
			    	"featureType": "all"
		    }]
	    });
		});
    }
    setTimeout(initMap, 4000);
});