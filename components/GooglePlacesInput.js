import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import {
  setJourneyStartingPlace,
  setJourneyEndingPlace,
} from "../slices/journeySlice";

export default function GooglePlacesInput({typeOfLocation}) {

   const dispatch = useDispatch();

  return (
    <GooglePlacesAutocomplete
      placeholder="Search location"
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      minLength={2}
      listViewDisplayed={false}
      autoFocus={false}
      returnKeyType={"search"}
      keyboardAppearance={"light"}
      enablePoweredByContainer={false}
      fetchDetails={true}
      styles={{
        container: {
          flex: 0,
          width: "80%",
          fontSize: 18,
          width: "80%",
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: "4%",
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 1,
        },
      }}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: "en",
      }}
      onPress={(data, details = null) => {
        if (typeOfLocation === "startingLocation") {
          dispatch(
            setJourneyStartingPlace({
              name: details.name,
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              description: data.description,
            })
          );
        } else if (typeOfLocation === "endingLocation") {
          dispatch(
            setJourneyEndingPlace({
              name: details.name,
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              description: data.description,
            })
          );
        }
      }}
    />
  );
}
