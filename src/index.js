const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zZWJ1dGNoIiwiYSI6ImNrNXdxYmF2MjF4dWgzbG5uaHB3c2RzcjEifQ.rLx85d82L4e7TpClpaE0sA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885],
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = document.createElement('div');
marker.style.width = '32px';
marker.style.height = '39px';
marker.style.backgroundImage = "url('http://i.imgur.com/WbMOfMl.png')";

new mapboxgl.Marker(marker).setLngLat([-87.639, 41.8954]).addTo(map);
