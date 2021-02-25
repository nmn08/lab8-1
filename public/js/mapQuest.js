function initMap() {
	// add your code here
	L.mapquest.key = 'mffsGaJ4rE5p1sIFcqztNpSxJUTmbuuY';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	center: [37.7749, -122.4194],
	layers: L.mapquest.tileLayer('map'),
	zoom: 12,
	zoomControl: false
	});

	L.marker([32.87884383681223, -117.23586822388323]).addTo(map);
}