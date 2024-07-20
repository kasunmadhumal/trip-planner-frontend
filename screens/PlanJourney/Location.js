import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import FormChangeButton from "../../components/FormChangeButton";
import AddLocationsForEventSlideView from "../../components/AddLocationsForEventSlideView";
import tw from "tailwind-react-native-classnames";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Map from "../../components/Map";
import { useSelector } from "react-redux";
import { selectJourneyStartingPlace } from "../../slices/journeySlice";
import SelectedLocationsForEvents from "../../components/SelectedLocationsForEvents";

export default function Location({ navigation, pageNumber, setPageNumber }) {

  const origin = useSelector(selectJourneyStartingPlace);

  const eventList = [
    {
      id: 1,
      eventName: "Tech Innovations",
      alocatedTimeForEvent: "09:00-11:30",
      preferences: ["Technology", "Networking", "Presentations"],
    },
    {
      id: 2,
      eventName: "Art & Cultur",
      alocatedTimeForEvent: "13:00-15:00",
      preferences: ["Art", "Exhibitions", "Live Performances"],
    },
    {
      id: 3,
      eventName: "Gourmet Food",
      alocatedTimeForEvent: "11:00-12:30",
      preferences: ["Food", "Wine", "Chef Demonstrations"],
    },
    {
      id: 4,
      eventName: "Sustainability",
      alocatedTimeForEvent: "14:30-16:00",
      preferences: ["Environment", "Hands-on Activities", "Discussions"],
    },
    {
      id: 5,
      eventName: "Digital Market",
      alocatedTimeForEvent: "10:00-12:00",
      preferences: ["Marketing", "Social Media", "Workshops"],
    },
    {
      id: 6,
      eventName: "Startup Pitc",
      alocatedTimeForEvent: "15:00-17:00",
      preferences: ["Entrepreneurship", "Investment", "Networking"],
    },
    {
      id: 7,
      eventName: "Music & Art",
      alocatedTimeForEvent: "18:00-22:00",
      preferences: ["Live Music", "Dance", "Crafts"],
    },
    {
      id: 8,
      eventName: "Science Fair",
      alocatedTimeForEvent: "09:00-12:00",
      preferences: ["Science", "Innovation", "Demonstrations"],
    },
    {
      id: 9,
      eventName: "Wellness",
      alocatedTimeForEvent: "13:30-16:00",
      preferences: ["Health", "Yoga", "Meditation"],
    },
    {
      id: 10,
      eventName: "Book Reading",
      alocatedTimeForEvent: "16:00-17:30",
      preferences: ["Literature", "Author Talks", "Autographs"],
    },
  ];

  const selectedLocationList = [
      {
                eventNumber: 1,
                eventName: "swimming",
                allocatedTime: "2h : 40min",
                preferences: [
                    "beach",
                    "warm"
                ],
                locationName: "galkissa beach",
                latitude: 23.222,
                longitude: 45.422
            },
            {
              eventNumber: 2,
                eventName: "eating",
                allocatedTime: "1h : 40min",
                preferences: [
                    "dinner",
                    "spicy"
                ],
                locationName: "galadari hotel",
                latitude: 55.222,
                longitude: 43.422
            }
  ];
  return (
    <GestureHandlerRootView>
      <FlatList
        data={[{ key: "content" }]}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <>
            <View style={styles.container}>
              <Text style={styles.tittleText}>Add Locations For Events</Text>
              <View style={tw`w-full ml-4`}>
                <AddLocationsForEventSlideView
                  navigation={navigation}
                  locations={eventList}
                  style={tw`w-full`}
                />
              </View>
              <View style={tw`w-full mt-4`}>
                <View style={[tw`w-full flex-row`, styles.timesTextBlock]}>
                  <Text style={styles.subtittleText}>Allocated Time</Text>
                  <Text style={styles.subtittleText}>Calculate Time</Text>
                  <Text style={styles.subtittleText}>End Time</Text>
                </View>
                <View style={[tw`w-full flex-row`, styles.timesTextBlock]}>
                  <Text style={styles.subtittleTimeValues}>09:00-11:30</Text>
                  <Text style={styles.subtittleTimeValues}>2.5 hours</Text>
                  <Text style={styles.subtittleTimeValues}>11:30</Text>
                </View>
              </View>
              <View style={tw`w-full`}>
                <View style={styles.mapStyles}>
                  <Map
                    latitude={origin?.latitude || 6.9754}
                    longitude={origin?.longitude || 79.9156}
                  />
                </View>
              </View>
              <Text style={[styles.tittleText, tw`mt-6`]}>Selected List</Text>
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
  subtittleText: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Roboto",
    color: "#726E6E",
    alignSelf: "flex-start",
    marginLeft: "5%",
    marginBottom: "2%",
  },
  subtittleTimeValues: {
    fontSize: 15,
    fontFamily: "Roboto",
    color: "#726E6E",
    alignSelf: "flex-start",
    marginLeft: "5%",
    marginBottom: "2%",
  },
  timesTextBlock: {
    justifyContent: "space-between",
    width: "90%",
  },
  mapStyles: {
    width: "90%",
    height: 300,
    marginTop: "5%",
    flexDirection: "row",
    marginLeft: "5%",
  },
  selectedLocationContainer: {
    width: "90%",
    flexDirection: "row",
    marginLeft: "5%",
  },
});
