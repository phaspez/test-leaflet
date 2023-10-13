///////////////////////////////////////////////
//
// DEPRECATED
//
///////////////////////////////////////////////
import { createContext, useContext, useState } from "react";

export interface LocationManager {
  getLocations(): LocationProps;
  setLocations(locations: LocationProps): void;
}

export interface LocationProps {
  locations: any;
}

export interface LocationDetails {
  type: string;
  name: string;
  features: Array<LocationObject>;
}

export interface LocationObject {
  type: string;
  properties: Object;
  geometry: Object;
}

const ShopCartContext = createContext<LocationManager | undefined>(undefined);

export const LocationContextProvider = (props: any) => {
  const [selectedLocations, setSelectedLocations] = useState<LocationProps>();

  const getLocations = () => {
    return selectedLocations;
  };

  const setLocations = (locations: LocationProps) => {
    setSelectedLocations(locations);
  };

  const contextValue = {
    getLocations,
    setLocations,
  } as LocationManager;

  return (
    <ShopCartContext.Provider value={contextValue}>
      {props.children}
    </ShopCartContext.Provider>
  );
};

export const useLocationManager = () => {
  const context = useContext(ShopCartContext);
  if (context === undefined) {
    throw new Error(
      "useLocationManager must be used within a LocationContextProvider"
    );
  }
  return context;
};
