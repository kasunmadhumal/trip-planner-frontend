import { Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import Map from "../../components/Map";
import { useSelector } from "react-redux";
import { selectJourneyStartingPlace } from "../../slices/journeySlice";
 
export default function SearchLocation() {
  const origin = useSelector(selectJourneyStartingPlace);

  return (
    <View style={tw`w-full h-full`}>
      <View style={tw`h-1/2`}>
        <Map
          latitude={origin?.latitude || 6.9754}
          longitude={origin?.longitude || 79.9156}
        />
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  );
}
