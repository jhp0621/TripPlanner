const mapboxgl = require("mapbox-gl");
const markerMaker = require('./marker.js')

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9zZWJ1dGNoIiwiYSI6ImNrNXdxYmF2MjF4dWgzbG5uaHB3c2RzcjEifQ.rLx85d82L4e7TpClpaE0sA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885],
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v11" // mapbox has lots of different map styles available.
});

const markerActivity = markerMaker('activities',[-87.639, 41.8954])
const markerHotel = markerMaker('hotels',[-87.632, 41.8946])
const markerRestaurant = markerMaker('restaurants',[-87.634, 41.8964])

markerActivity.addTo(map)
markerHotel.addTo(map)
markerRestaurant.addTo(map)
