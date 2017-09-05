'use strict';

var CONSTANTS = {
	numOfLocations: 10,

	hackeryouProxyUrl: 'https://proxy.hackeryou.com',

	/* Spotify API Related */
	spotifyAuthUrl: 'https://accounts.spotify.com/api/token',
	spotifyPlaylistsBaseUrl: 'https://api.spotify.com/v1/browse/categories/',
	spotifyEmbeddedBaseUrl: 'https://open.spotify.com/embed',

	spotifyAuthProxyHeader: { 'Authorization': 'Basic MTY5Y2EwNGU1ODk5NGQwNWJhOWRmYzcxMjE5YzQ2NGQ6YmUwNWI1ZTc3NGE2NDVhMjllNWYzZjFiOTQyMDExMDI' },

	spotifyGenres: { "toplists": "Hits", "chill": "Chillout", "mood": "Mood", "pop": "Pop", "edm_dance": "Electronic/Dance", "hiphop": "Hip Hop", "party": "Party", "rock": "Rock", "workout": "Workout", "focus": "Focus", "decades": "Decades", "dinner": "Ambiance", "sleep": "Sleep", "indie_alt": "Indie/Alternative", "rnb": "RnB", "popculture": "Trending", "metal": "Metal", "soul": "Soul", "romance": "Romantic", "jazz": "Jazz" },

	numOfPlaylistLimit: 10, //number of playlists that is stored by the app.

	/* Spotify Embedded Player Settings */
	spotifyEmbeddedThemeColor: 'white',
	spotifyEmbeddedWidth: 300,
	spotifyEmbeddedHeight: 380,

	// Foursquare API keys

	foursquare_id: 'RT3LKD5UVN1NHTLW20JOPKOLJEPNXGCDZFNRCZAH5UIJ5XNN',
	foursquare_secret: 'JK0QPEHBL5WHEUBISF1NGUXNPHF30F2QKYYNNU30PHVVEFMW',

	/* Map Related */

	googleMapStyles: [{
		"featureType": "administrative",
		"elementType": "labels.text.fill",
		"stylers": [{
			"color": "#444444"
		}]
	}, {
		"featureType": "landscape",
		"elementType": "all",
		"stylers": [{
			"color": "#f2f2f2"
		}]
	}, {
		"featureType": "landscape",
		"elementType": "geometry.fill",
		"stylers": [{
			"color": "#f8f3b2"
		}]
	}, {
		"featureType": "poi",
		"elementType": "all",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "road",
		"elementType": "all",
		"stylers": [{
			"saturation": -100
		}, {
			"lightness": 45
		}]
	}, {
		"featureType": "road.highway",
		"elementType": "all",
		"stylers": [{
			"visibility": "simplified"
		}]
	}, {
		"featureType": "road.arterial",
		"elementType": "labels.icon",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "transit",
		"elementType": "all",
		"stylers": [{
			"visibility": "off"
		}]
	}, {
		"featureType": "water",
		"elementType": "all",
		"stylers": [{
			"color": "#1f6d61"
		}, {
			"visibility": "on"
		}]
	}]

};