// @ts-nocheck
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import useLocationManager from "./LocationContext";
import { useEffect, useState } from "react";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

function MapComponent() {
  const { selectedLocations, locations, styleOpt } = useLocationManager();
  const [, setSelected] = useState(selectedLocations);

  useEffect(() => {
    setSelected(selectedLocations);
  }, [selectedLocations]);

  const pointToLayer = (feature, latlng) => {
    return L.circleMarker(
      latlng,
      /*styleOpt[(getRandomInt(styleOpt.length), latlng)]*/ null
    );
  };

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

        {selectedLocations
          ? selectedLocations.map((cond: boolean, idx: number) =>
              cond ? (
                <GeoJSON
                  key={idx + "mapjson"}
                  data={locations[idx]}
                  pathOptions={styleOpt[idx % styleOpt.length]}
                  pointToLayer={pointToLayer}
                />
              ) : undefined
            )
          : undefined}
      </MapContainer>
    </>
  );
}

export default MapComponent;
