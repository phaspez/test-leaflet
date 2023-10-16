import ANNOTATION from "../assets/geojson/geojson/ANNOTATION.json";
import BTB_RG from "../assets/geojson/geojson/BTB_RG_2023.5.18.json";
import BVNL from "../assets/geojson/geojson/BVNL_2023.5.18.json";
import CAM_KT from "../assets/geojson/geojson/Cam KT_2023.5.18.json";
import CAM_POINT from "../assets/geojson/geojson/cam_point_25072022_point.json";
import CAM_REGION from "../assets/geojson/geojson/cam_region_25072022_region.json";
import RAN from "../assets/geojson/geojson/Ran_2023.5.18.json";
import TEN from "../assets/geojson/geojson/ten_.json";
import VE_POINT from "../assets/geojson/geojson/ve_point_25072022.json";
import VE_REGION from "../assets/geojson/geojson/ve_region_05062023_region.json";
import VN_HC from "../assets/geojson/geojson/VN_HCtinh.json";

import { createContext, useContext, useState, useEffect } from "react";

export interface LocationManager {
  getLocations(): Array<any>;
  setLocations(locs: Array<any>): void;
  locations: Array<any>;
  locationDetails: Array<any>;
  name_locations: Array<any>;
  selectedLocations: Array<boolean>;
  count_locations: Array<number>;
}

export interface LocationDetails {
  name: string;
  data: any;
}

const LocationContext = createContext<LocationManager | undefined>(undefined);

export const LocationContextProvider = (props: any) => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [locationDetails, setLocationDetails] = useState<
    Array<LocationDetails>
  >([]);

  const locations = [
    ANNOTATION,
    BTB_RG,
    BVNL,
    CAM_KT,
    CAM_POINT,
    CAM_REGION,
    RAN,
    TEN,
    VE_POINT,
    VE_REGION,
    VN_HC,
  ];

  const name_locations: Array<string> = [
    "Annotation.geojson",
    "BTB_RG_2023.5.18.geojson",
    "BVNL_2023.5.18.geojson",
    "Cam KT_2023.5.18.geojson",
    "cam_point_25072022_point.geojson",
    "cam_region_25072022_region.geojson",
    "Ran_2023.geojson",
    "ten_.geojson",
    "ve_point_25072022.geojson",
    "ve_region_25072022.geojson",
    "VN_HCtinh.geojson",
  ];

  const mapData = locations.map((val, idx) => {
    return { name: name_locations[idx], data: val } as LocationDetails;
  });

  const count_locations = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const getLocations = () => {
    return locationDetails;
  };

  const setLocations = (loc: any) => {
    setSelectedLocations(loc);
    console.log("set loc: ", loc);
  };

  useEffect(() => {
    let loc = mapData.filter((val, i) => selectedLocations[i] && val);

    console.log("selectedLocations: ", selectedLocations);
    setLocationDetails(loc);
    console.log(locationDetails);
  }, [selectedLocations]);

  const contextValue = {
    getLocations,
    setLocations,
    locations,
    selectedLocations,
    locationDetails,
    name_locations,
    count_locations,
  } as LocationManager;

  return (
    <LocationContext.Provider value={contextValue}>
      {props.children}
    </LocationContext.Provider>
  );
};

function useLocationManager() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error(
      "useLocationManager must be used within a LocationContextProvider"
    );
  }
  return context;
}

export default useLocationManager;
