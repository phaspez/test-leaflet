import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLng } from "leaflet";
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";
import iconPng from "../assets/location.png";

export interface LocationDetails {
  locationData: any;
}

function MapComponent({ locationData }: LocationDetails) {
  let geocodeMapper = [];

  if (locationData) {
    for (let i = 0; i < locationData.length; i++) {
      let fileData = locationData[i];
      for (let i = 0; i < fileData["features"].length; i++) {
        let place = fileData["features"][i];
        let geo = place["geometry"];
        let coord = geo["coordinates"];
        let props = place["properties"];

        geocodeMapper.push({
          // geocode format: [ LAT, LONG, ELEVATE ]
          // in json file: [ LONG, LAT, ELEVATE ]
          geocode: new LatLng(coord[1], coord[0]),
          popUp: props["Text"],
        });
      }
    }
  }

  const customIcon = new Icon({
    iconUrl: iconPng,
    iconSize: [38, 38],
  });

  return (
    <>
      <MapContainer
        center={[11.83, 108.9]}
        zoom={7}
        scrollWheelZoom={true}
        className="limit-width"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geocodeMapper.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}

export default MapComponent;
