import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Event from "./Event";
import EventForLocationScreen from "./EventForLocationScreen";
import { useState } from "react";
import TestingObjects from "../screens/TestingObjects";
import { Card } from "react-native-paper";
import { Dimensions } from "react-native";
import PreferencesView from "./PreferencesView";

export default function SelectedLocationsForEvents({
  navigation,
  selectedLocationList,
}) {
  //   {
  //         "eventNumber": 1,
  //         "eventName": "swimming",
  //         "allocatedTime": "2h : 40min",
  //         "preferences": [
  //             "beach",
  //             "warm"
  //         ],
  //         "locationName": "galkissa beach",
  //         "latitude": 23.222,
  //         "longitude": 45.422
  //     },
  const [data, setData] = useState(selectedLocationList);
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.eventNumber.toString()}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      style={tw`w-full`}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("map-screen", { item })}
        >
          <View style={styles.eventContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={tw`w-full h-full`}
                source={{
                  uri: "https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=",
                }}
              />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.nameOfLocation}>
                <Text style={styles.textOfLocation}>
                  Blue Sky Hotel, Jaffna Road
                </Text>
              </View>
              <View style={styles.reviewsArea}>
                <View style={styles.numberOfRatings}>
                  {Array.from({ length: 5 }).map(() => (
                    <Image
                      source={require("../assets/images/greenCircle.png")}
                      style={styles.ratingImage}
                    />
                  ))}
                </View>
                <View style={styles.numberOfReviews}>
                  <Text>128 Reviews</Text>
                </View>
              </View>
              <View style={styles.distanceViewArea}>
                <Text>34 km away</Text>
              </View>
            </View>
            <View style={styles.cancelButtonArea}>
                <TouchableOpacity style={styles.side_bar_up}>
                  <Image
                    source={require("../assets/images/wrong_mark.png")}
                    style={styles.image_sidebar}
                  />
                </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  eventContainer: {
    flexDirection: "row",
    width: "100%",
    height: screenWidth * 0.8 * 0.35,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "5%",
    borderColor: "#9E9E9E",
    borderWidth: 1,
    borderRadius: 10,
    padding: "2%",
  },
  imageContainer: {
    width: "30%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#9E9E9E",
  },
  ratingImage: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  textContainer: {
    width: "60%",
    height: "100%",
    justifyContent: "space-between",
    marginLeft: "2%",
  },
  nameOfLocation: {
    width: "100%",
    height: "30%",
  },
  reviewsArea: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  numberOfRatings: {
    width: "50%",
    height: "100%",
    flexDirection: "row",
  },
  numberOfReviews: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  distanceViewArea: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  textOfLocation: {
    fontSize: 15,
    fontWeight: "bold",
  },
  cancelButtonArea: {
    width: "10%",
    height: "100%",
    flexDirection: "column",
  },
  image_sidebar: {
    width: screenWidth * 0.5 * 0.1,
    height: screenWidth * 0.5 * 0.1,
    resizeMode: "contain",
  },
  side_bar_up: {
    width: "100%",
    marginBottom: "30%",
    alignItems: "center",
  },
});
