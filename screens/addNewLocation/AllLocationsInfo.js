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
import SelectedLocationsForEvents from "../../components/SelectedLocationsForEvents";

export default function AllLocationsInfo({ navigation, pageNumber, setPageNumber }) {
  const { getJourney, setJourney } = EndPoints();
  const origin = useSelector(selectJourneyStartingPlace);
  const [showShareTripPlanBar, setShowShareTripPlanBar] = useState(false);

  const selectedLocationList = [
    {
      eventNumber: 1,
      eventName: "swimming",
      allocatedTime: "2h : 40min",
      preferences: ["beach", "warm"],
      locationName: "galkissa beach",
      latitude: 23.222,
      longitude: 45.422,
    },
    {
      eventNumber: 2,
      eventName: "eating",
      allocatedTime: "1h : 40min",
      preferences: ["dinner", "spicy"],
      locationName: "galadari hotel",
      latitude: 55.222,
      longitude: 43.422,
    },
  ];

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
              <Text style={styles.tittleText}>Recently Added</Text>
              <View style={[tw`w-full`, styles.selectedLocationContainer]}>
                <SelectedLocationsForEvents
                  navigation={navigation}
                  selectedLocationList={selectedLocationList}
                />
              </View>
              <Text style={[styles.tittleText,{marginTop: "10%"}]}>Added Places</Text>
              <View style={[tw`w-full`, styles.selectedLocationContainer]}>
                <SelectedLocationsForEvents
                  navigation={navigation}
                  selectedLocationList={selectedLocationList}
                />
              </View>
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
                {pageNumber < 3 && (
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
  selectedLocationContainer: {
    width: "90%",
    flexDirection: "row",
    marginLeft: "5%",
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
  },
});
