import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FormChangeButton from "../../components/FormChangeButton";
import FormSubmitButton from "../../components/FormSubmitButton";
import EndPoints from "../../data/api/EndPoints";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import Map from "../../components/Map";
import { useSelector } from "react-redux";
import { selectJourneyStartingPlace } from "../../slices/journeySlice";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Feather } from "@expo/vector-icons";
import ShareTripPlanComponent from "../../components/ShareTripPlanComponent";
import { useEffect, useState } from "react";

export default function FinalPlan({ pageNumber, setPageNumber }) {
  const { getJourney, setJourney } = EndPoints();
  const origin = useSelector(selectJourneyStartingPlace);
  const [showShareTripPlanBar, setShowShareTripPlanBar] = useState(false);

  async function fetchJourney() {
    try {
      const journeyData = await getJourney(1);
      setJourney(journeyData);
      console.log(journeyData);
    } catch (error) {
      console.error("Error fetching journey data:", error);
    }
  }

  return (
    <GestureHandlerRootView>
      <FlatList
        data={[{ key: "content" }]}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <>
            <View style={styles.container}>
              <Text style={styles.tittleText}>Add Locations For Events</Text>
              <View style={tw`w-4/5 mt-4`}>
                <View style={[tw`w-full flex-row`, styles.timesTextBlock]}>
                  <Text style={styles.subtittleText}>Allocated Time</Text>
                  <Text style={styles.subtittleText}>Calculate Time</Text>
                </View>
                <View style={[tw`w-full flex-row`, styles.timesTextBlock]}>
                  <Text style={styles.subtittleTimeValues}>09:00-11:30</Text>
                  <Text
                    style={[
                      styles.subtittleTimeValues,
                      tw`font-medium text-green-900`,
                    ]}
                  >
                    2.5 hours
                  </Text>
                </View>
              </View>
              <View style={[tw`w-full`, styles.mapBorder]}>
                <View style={styles.mapStyles}>
                  <Map
                    latitude={origin?.latitude || 6.9754}
                    longitude={origin?.longitude || 79.9156}
                  />
                </View>
                <View style={styles.buttonLineContainer}>
                  <TouchableOpacity style={styles.finalJouneyMapButtons}
                     onPress={() => setShowShareTripPlanBar(!showShareTripPlanBar)}
                  >
                    <AntDesign name="sharealt" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.finalJouneyMapButtons}>
                    <AntDesign name="hearto" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.finalJouneyMapButtons}>
                    <Feather name="bookmark" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
              {showShareTripPlanBar && (
                <View style={styles.shareTripPlannerComponent}>
                  <ShareTripPlanComponent />
                </View>
              )}
              {!showShareTripPlanBar && (
                <View
                  style={[
                    styles.buttonsContainer,
                    {
                      justifyContent:
                        pageNumber === 1
                          ? "flex-end"
                          : pageNumber === 4
                          ? "flex-start"
                          : "space-between",
                    },
                  ]}
                >
                  {pageNumber > 1 && (
                    <>
                      <FormChangeButton
                        text="Preview"
                        onPress={() => {
                          setPageNumber(pageNumber - 1);
                        }}
                      />
                    </>
                  )}
                  {pageNumber < 4 && (
                    <>
                      <FormChangeButton
                        text="Next"
                        onPress={() => {
                          //djsjdhsjdhsjdhsjdhsjdhsdsjd
                          setPageNumber(pageNumber + 1);
                        }}
                      />
                    </>
                  )}
                </View>
              )}
            </View>
          </>
        )}
        keyExtractor={(item) => item.key}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    justifyContent: "flex-start",
  },
  buttonsContainer: {
    width: "80%",
    marginTop: "3%",
    flexDirection: "row",
  },
  tittleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#2F264B",
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginBottom: "3%",
  },
  timesTextBlock: {
    justifyContent: "space-between",
    width: "100%",
  },
  subtittleText: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#726E6E",
    alignSelf: "flex-start",
    marginBottom: "2%",
  },
  subtittleTimeValues: {
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#726E6E",
    alignSelf: "flex-start",
    marginBottom: "2%",
  },
  mapStyles: {
    width: "100%",
    height: 300,
    borderWidth: 1,
    borderColor: "#84E9BD",
  },
  mapBorder: {
    width: "90%",
    marginTop: "3%",
    flexDirection: "column",
  },
  buttonLineContainer: {
    marginTop: "3%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  finalJouneyMapButtons: {
    backgroundColor: "#c8eafc",
    padding: 10,
    borderRadius: 10,
    marginLeft: "2%",
  },
  shareTripPlannerComponent: {
      width: "100%",
  }
});
