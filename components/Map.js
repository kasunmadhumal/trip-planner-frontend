import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";

export default function Map({latitude, longitude}){

    return (
        <MapView
          style={tw`flex-1`}
          mapType="mutedStandard"
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        />
    );
}