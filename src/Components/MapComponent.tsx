import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";

export interface LocationDetails {
  locationData: any;
}

function MapComponent({ locationData }: LocationDetails) {
  let styleOpt = [
    { color: "red", fillColor: "red" },
    { color: "blue", fillColor: "blue" },
    { color: "green", fillColor: "green" },
    { color: "black", fillColor: "black" },
  ];

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

        {locationData ? (
          locationData.map((dat: any, idx: number) => (
            <GeoJSON
              data={dat}
              pathOptions={styleOpt[idx % styleOpt.length]}
              key={idx}
            ></GeoJSON>
          ))
        ) : (
          <></>
        )}
      </MapContainer>
    </>
  );
}

export default MapComponent;
